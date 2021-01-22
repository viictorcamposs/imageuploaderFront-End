import { useState } from 'react';
import filesize from 'filesize';
import uuid from 'uuid';

import { Container, Content, MessageError } from './styles/app.styles';
import GlobalStyle from './styles/global';

import Upload from './components/Upload';
import Uploading from './components/Uploading';
import Uploaded from './components/Uploaded';

import api from './services/api';

function App() {
  const [UploadedFile, setUploadedFile] = useState([]);
  const [Component, setComponent] = useState('upload');
  const [FileTooLarge, setFileTooLarge] = useState(false);

  const updateFile = (id, data) => {
    setUploadedFile(state => state.map(uploadedFile => {
      if(id === uploadedFile.id) return {...uploadedFile, ...data}

      return uploadedFile;
    }));
  };

  const processUpload = async uploadedFile => {
    try {
      setComponent('uploading');
      const data = new FormData();

      if(!uploadedFile.file) return;

      data.append('file', uploadedFile.file);

      const response = await api.post('/', data, {
        onUploadProgress: e => {
          const progress = Math.round((e.loaded * 100) / e.total);

          updateFile(uploadedFile.id, { progress });
        }
      });

      updateFile(uploadedFile.id, {
        uploaded: true,
        id: response.data._id,
        url: response.data.url,
      });

      setComponent('uploaded');
    } catch (error) {
      updateFile(uploadedFile.id, { error: true })
      setFileTooLarge(true);

      setInterval(() => {
        setFileTooLarge(false);
        setComponent('upload');
      }, 3000);
    }
  };

  const handleFileUpload = file => {
    const formatedFile = file.map(file => ({
      file,
      id: uuid.v4(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedFile(formatedFile);
    processUpload(formatedFile[0]);
  };

  return (
    <Container>
      <Content>
        {Component === 'upload' && <Upload onUpload={handleFileUpload} />}
        {Component === 'uploading' && <Uploading file={UploadedFile} />}
        {Component === 'uploaded' && <Uploaded file={UploadedFile} />}
        {FileTooLarge && (
          <MessageError>
            This image is too large to upload! Try again.
          </MessageError>
        )}
      </Content>
      <GlobalStyle />
    </Container>
  );
}

export default App;

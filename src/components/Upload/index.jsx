import React from 'react';
import Dropzone from 'react-dropzone';

import { Container, DropContainer } from './styles';
import image from '../../assets/image.svg';

const Upload = ({ onUpload }) => {
  return (
    <Dropzone accept="image/*" maxFiles={1} onDropAccepted={onUpload}>
      { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <Container>
          <h1>Upload your image</h1>
          <span>File should be Jpeg, Png...</span>
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <img src={image} alt="" />
            <span>Drag & Drop your image here</span>
            <input {...getInputProps()} /> 
          </DropContainer>
          <div className="xh2e45">
            <span>Or</span>
            <button>
              Choose a file
              <input type="file" 
                name="uploadFile" 
                id="uploadFile"
                accept="image/*"
                onChange={(event) => onUpload(event) }
              />
            </button>
          </div>
        </Container>
      ) }
    </Dropzone>
  );
};

export default Upload;

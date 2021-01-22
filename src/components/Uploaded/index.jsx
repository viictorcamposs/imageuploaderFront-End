import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'

import { Container, Preview, Clipboard } from './styles';

const Uploaded = ({ file }) => {
  const handleClick = () => {
    const inputField = document.getElementById('clipboardInput');

    inputField.select();
    document.execCommand('copy');
  };

  return (
    <Container>
      <FaCheckCircle size={36} color="#219653" />
      <h1>upload successfully!</h1>
      <Preview src={file[0].url} />
      <Clipboard>
        <input id="clipboardInput" readOnly type="text" value={file[0].url} />
        <button onClick={handleClick}>
          Copy Link
        </button>
      </Clipboard>
    </Container>
  );
};

export default Uploaded;

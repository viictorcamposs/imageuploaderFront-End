import React from 'react';
import { Line } from 'rc-progress';

import { Container } from './styles';

const Uploading = ({ file }) => {
  return (
    <Container>
      <h1>Uploading...</h1>
      <Line percent={file[0].progress} strokeWidth={1} strokeColor="#2F80ED" trailColor="#F2F2F2" />
    </Container>
  );
};

export default Uploading;

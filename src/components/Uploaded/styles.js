import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  h1 {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    color: #4f4f4f;
    text-transform: capitalize;

    margin-top: .75rem;
  }
`;

export const Preview = styled.div`
  height: 13.625rem;
  width: 100%;

  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  border-radius: .75rem;
  margin: 1.5rem 0;
`;

export const Clipboard = styled.div`
  width: 100%;
  height: 2.125rem;

  border: 2px solid #e0e0e0;
  border-radius: .5rem;
  background-color: #F6F8FB;

  display: flex;

  input {
    width: 100%;
    background: none;
    border: none;
    padding-left: .5rem;
    padding-right: 1rem;

    font-weight: 500;
    font-size: .5rem;
    line-height: .75rem;
    color: #4f4f4f;
  }

  button {
    width: 4.625rem;
    height: 1.875rem;

    color: #FFF;
    font-size: .5rem;
    font-weight: 500;

    border: none;
    cursor: pointer;
    border-radius: .5rem;
    background-color: #2f80ed;
  }
`;

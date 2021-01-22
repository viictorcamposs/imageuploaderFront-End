import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
  h1 {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    color: #4f4f4f;

    margin-bottom: 1rem;
  }
  span {
    color: #828282;
    font-weight: 500;
    font-size: .625rem;
    line-height: 1rem;

    margin-bottom: 1.875rem;
  } 
  .xh2e45 {
    margin-top: 1.125rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      font-size: .75rem;
      margin-bottom: 1.25rem;
    }
    button {
      position: relative;
      width: 6.25rem;
      height: 2rem;

      color: white;
      font-size: .75rem;
      line-height: 1rem;
      font-weight: 500;

      border: none;
      cursor: pointer;
      border-radius: .5rem;
      background-color: #2f80ed;
      
      input {
        cursor: pointer;
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        opacity: 0;

        width: 100%;
        height: 100%;
      }
    } 
  }
`;

export const DropContainer = styled.div`
  border: 1px dashed #97BEF4;
  border-radius: .75rem;
  background: #F6F8FB;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 13.625rem;
  width: 100%;
  max-width: 21.125rem;

  span { 
    font-weight: 500;
    font-size: .75rem;
    line-height: 1.125rem;
    color: #BDBDBD;

    margin-top: 2.25rem;
  }

  ${props => props.isDragActive && dragActive}
  ${props => props.isDragReject && dragReject}
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 25rem;

  margin: 2rem;
  padding: 2.25rem 2rem;
  
  background: #FFF;
  border-radius: .75rem;
  box-shadow: 0px 4px 12px 0px rgba(0,0,0,.1);
`;

export const MessageError = styled.div`
  position: absolute;
  right: 0; top: 0;
  
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ee4444;
  color: #f0f0f0;
  font-weight: 500;

  animation: show .2s ease;

  @keyframes show {
    from { 
      transform: translateY(-100%);
    } to {
      transform: translateY(0%);
    }
  }
`;
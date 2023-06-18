import styled from '@emotion/styled'

export const Container = styled.header`
  margin-bottom: 30px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 29px;
  border: 0;
  opacity: 1;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #687E8C;
  color:#A8B5BF;

  &:hover {
    color: #2C3540;
    opacity: 0.6;
  }
`;

export const BtnLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  color:#3C401D;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  box-shadow: inset 0px 0px 5px 0px rgba(208,221,231,1);
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
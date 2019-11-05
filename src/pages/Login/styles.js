import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs({
placeholderTextColor:'#A1A3B0',
})`
  background:#FFF;
  border-radius: 4px;
  border-bottom-width:2px;
  border-bottom-color:#E3EEF9;
  top:80px;
  left:50px;
  padding:0 20px;
  height:52px;
  font-size:16px;
  color:#333;
  width:280px
`;

export const ButtonText = styled.Text`
  text-decoration: underline;
  color:#A1A3B0;
  font-size:13px;
  font-family:Poppins Regular;

`;

export const Footer = styled.Text`
position:absolute;
bottom:0;
`;

export const ErrorMessage =styled.Text`
color:red;
top:110;
left:10
`;






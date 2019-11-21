import styled from 'styled-components/native';
import {Dimensions, PixelRatio} from 'react-native';

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};


export const Header = styled.View`
flex-direction:row;
align-Items:center;
left:${heightPercentageToDP('16.5%')};
top:${widthPercentageToDP('10%')};
width:${widthPercentageToDP('35%')};

`;

export const Avatar = styled.Image`
width:60px;
height:60px;
`;

export const ScrView =styled.ScrollView`

`
export const ButtonText = styled.Text`  
  color:#443B49;
  font-size:13px;
  font-family:Poppins Regular;

`;

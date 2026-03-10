import { Dimensions, PixelRatio } from 'react-native';

/*
  Get device screen size
*/
const { width, height } = Dimensions.get('window');

/*
  Base design size (Figma / UI design size)
  Most designers use iPhone X frame
*/
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

/*
  Horizontal scaling
  Use for:
  - width
  - marginHorizontal
  - paddingHorizontal
*/
export const scale = size => {
  return (width / BASE_WIDTH) * size;
};

/*
  Vertical scaling
  Use for:
  - height
  - marginTop
  - marginBottom
  - paddingVertical
*/
export const verticalScale = size => {
  return (height / BASE_HEIGHT) * size;
};

/*
  Moderate scaling
  Prevents components from becoming too big on large screens

  Best for:
  - icons
  - borderRadius
  - buttons
*/
export const moderateScale = (size, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

/*
  Font scaling

  Uses device pixel density for better typography scaling
*/
export const fontScale = size => {
  return size * PixelRatio.getFontScale();
};

/*
  Export device width & height if needed
*/
export { width, height };

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    palette: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      gray: string;

      sucess: string;
      info: string;
      danger: string;
      warning: string;
    },
  };
}

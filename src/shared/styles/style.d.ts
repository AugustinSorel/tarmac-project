import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundDark: string;
      color: string;
      accentColor: string;
    };

    fontSizes: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };

    fontWeights: {
      light: number;
      regular: number;
      bold: number;
    };

    sizes: {
      borderRadius: string;
      borderHeight: string;
    };
  }
}

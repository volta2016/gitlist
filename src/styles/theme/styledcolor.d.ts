// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      bg: string;
      link: string;
      textMain: string;
      textProfile: string;
      textHeader: string;
      white: string;
      border: string,
      button: string;
      header: string;
      badge: string;
    };
  }
}


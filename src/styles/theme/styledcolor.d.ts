// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      bg: string;
      link: string;
      textRepoAndBorder: string;
      textRepoTwoAndBorder: string;
      textHeader: string;
      white: string;
      button: string;
      header: string;
      badge: string;
    };
  }
}


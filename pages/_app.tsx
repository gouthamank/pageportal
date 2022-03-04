import '../styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { darkTheme, lightTheme } from 'styles/theme';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors?.backgroundSoft};
  }
`;

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme: DefaultTheme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isMounted && getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

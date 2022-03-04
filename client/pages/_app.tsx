import buildClient from '../api/build-client';
import Header from '../components/header';
import axios from 'axios';
import Footer from '../components/footer';
import { SnackbarContextProvider } from '../context/snackbar-context';
import CustomizedSnackbars from '../components/snakbar';
import '../styles/globals.css';
import Error from 'next/error';
import { domain } from '../src/config/keys';

const AppComponent = ({
  Component,
  pageProps,
  currentUser,
  errorCode,
}: any) => {
  if (errorCode) {
    return <Error statusCode={404} />;
  }
  return (
    <section className="flex flex-col min-h-screen">
      <Header currentUser={currentUser} />
      <div className="mb-auto">
        <SnackbarContextProvider>
          <Component currentUser={currentUser} {...pageProps} />
          <CustomizedSnackbars />
        </SnackbarContextProvider>
      </div>
      <Footer />
    </section>
  );
};

AppComponent.getInitialProps = async (appContext: any) => {
  const headers: any = appContext.ctx.req.headers;
  let pageProps = {};
  try {
    if (typeof window !== 'undefined') {
      const { data } = await axios.get(
        `${domain.kubernetes}api/users/currentuser`,
        {
          headers: headers,
        }
      );

      if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(
          appContext.ctx,
          data.currentUser
        );
      }
      return {
        pageProps,
        ...data,
      };
    }
    return { pageProps };
  } catch (err) {
    console.log(err);
    const errorCode = 404;
    return {
      pageProps,
      errorCode,
    };
  }
};

export default AppComponent;

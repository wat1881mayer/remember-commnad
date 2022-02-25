import buildClient from '../api/build-client';
import Header from '../components/header';
import Footer from '../components/footer';
import { SnackbarContextProvider } from '../context/snackbar-context';
import CustomizedSnackbars from '../components/snakbar';
import '../styles/globals.css';

const AppComponent = ({ Component, pageProps, currentUser }: any) => {
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
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;

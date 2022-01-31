import buildClient from '../api/build-client';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/globals.css';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <Header currentUser={currentUser} />
      <div>
        <Component currentUser={currentUser} {...pageProps} />
      </div>
      <Footer />
    </section>
  );
};

AppComponent.getInitialProps = async (appContext) => {
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

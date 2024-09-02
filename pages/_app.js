import FlareCursor from "../components/Cursor";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <FlareCursor/>
      <Component {...pageProps} />
    </Layout>
  );
}

import "../styles/globals.css";
import AdminLayout from "../components/layouts/AdminLayout";

function MyApp({ Component, pageProps }) {
  return (
    <AdminLayout>
      <Component {...pageProps} />
    </AdminLayout>
  );
}

export default MyApp;

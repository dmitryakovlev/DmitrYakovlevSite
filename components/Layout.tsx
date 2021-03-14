import { FC } from "react";
import Head from "next/head";
import Footer from "@components/Footer";

const Layout: FC<{
  title: string;
  children: JSX.Element | JSX.IntrinsicElements;
}> = ({ title, children }) => (
  <div className="layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <link rel="shortcut icon" href="/images/favicon.webp"></link> */}
    </Head>
    <main className="main">{children}</main>
    <Footer />
  </div>
);

export default Layout;

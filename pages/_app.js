import '../styles/globals.css'
import '../styles/homeCategroy.css'
import '../styles/HomeBlog.css'
import '../styles/HomeBanner.css'
import '../styles/category.css'
import '../styles/AboutMe.css'
import '../styles/TopBar.css'
import { wrapper } from '../src/store/store'
import { AnimatePresence } from 'framer-motion'
import EmptyLayout from '../src/Layouts/EmptyLayout'
import { ToastContainer } from 'react-toastify';
import Router from "next/router";

import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import LoadingSection from '../src/Components/LoadingSection/LoadingSection'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps, router }) {

  const Layout = Component.Layout || EmptyLayout;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setTimeout(() => {
        setLoading(false);
      }, 850)
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 850)
    }
  }, [])
  return <>
    <Layout>

      <AnimatePresence exitBeforeEnter>
        <>
          <NextNProgress color="rgb(250 204 21 )" />
          <Component {...pageProps} key={router.route} />
          <ToastContainer theme="dark" />
        </>
      </AnimatePresence>
    </Layout>
    <LoadingSection isVisible={loading}></LoadingSection>
  </>
}

export default wrapper.withRedux(MyApp);
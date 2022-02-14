import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/navbar";
import MainBanner from "../components/organisms/mainBanner";
import TransactionStep from "../components/organisms/transactionStep";
import FeaturedGame from "../components/organisms/featuredGame";
import Reached from "../components/organisms/reached";
import Story from "../components/organisms/story";
import Footer from "../components/organisms/footer";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>StoreGG - Get a new Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="StoreGG - Get a new Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati"
        />
        {/* <meta
          property="og:image"
          content=""
        />
        <meta
          property="og:url"
          content=""
        /> */}
      </Head>
      <Navbar />

      <MainBanner />

      <TransactionStep />

      <FeaturedGame />

      <Reached />

      <Story />

      <Footer />
    </>
  );
}

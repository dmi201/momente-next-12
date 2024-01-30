import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Momente</title>
        <meta
          name="description"
          content="Specializat în fotografierea evenimentelor precum nunți, cununii, botezuri, petreceri de Crăciun, petreceri corporate și poze de familie."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Momente Magice"
        message="Specialiști în capturarea momentelor voastre prețioase. Nunți, Cununii, Botezuri, Petreceri de Crăciun, Evenimente Corporate și Portrete de Familie."
      />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  );
}

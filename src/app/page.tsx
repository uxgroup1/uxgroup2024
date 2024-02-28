"use client"

import styles from "./page.module.css";
import CarroselVertical from "@/components/carrouselVerticalMain";
import image from "../assets/ctaBanner.png"
import Cta from "@/components/cta";
import LogisticaComPerformance from "@/components/logisticaComPerformance";
import BannerMain from "@/components/bannerMain";

export default function Home() {
  return (
    <main className={styles.main}>
      <BannerMain/>
      <CarroselVertical/>
      <Cta title={"Descubra como podemos transformar sua operação, reduzir custos e impulsionar seus resultados"} banner={image.src}/>
      <LogisticaComPerformance/>
      <Cta title={"Descubra como podemos transformar sua operação, reduzir custos e impulsionar seus resultados"} banner={image.src}/>
    </main>
  );
}

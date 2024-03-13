"use client"

import CarroselVertical from "@/components/institucional/carrouselVerticalMain";
import image from "../assets/cta/ctaBanner.png"
import Cta from "@/components/cta";
import LogisticaComPerformance from "@/components/institucional/logisticaComPerformance";
import BannerMain from "@/components/institucional/bannerMain";
import UxPartners from "@/components/institucional/uxPartners";
import LogisticaSustentavel from "@/components/institucional/logisticaSustentavel";
import UxMidia from "@/components/institucional/uxMidia";
import { Blog } from "@/components/institucional/blog";
import Link from "next/link";
import CarroselVerticalMobile from "@/components/institucional/carrouselVerticalMain/mobile";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/institucional/ContactForm";

export default function Home() {
  return (
    <main>
      <Header/>
      <BannerMain/>
      <CarroselVertical/>
      <CarroselVerticalMobile/>
      <Cta title={"Eficiência, Sustentabilidade e Informação: Descubra o futuro da logística com a UX"} banner={image.src}/>
      <LogisticaComPerformance/>
      <Cta title={"Descubra como podemos transformar sua operação, reduzir custos e impulsionar seus resultados"} banner={image.src}/>
      <LogisticaSustentavel/>
      <UxPartners/>
      <Blog/>
      <UxMidia/>
      <Cta title={"Descubra como podemos transformar sua operação, reduzir custos e impulsionar seus resultados"} banner={image.src}/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}

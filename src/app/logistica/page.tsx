"use client";

import Header from "@/components/header";
import ContactForm from "@/components/institucional/ContactForm";
import Footer from "@/components/Footer";
import JumboTron from "@/components/produtos/jumbotron";
import SecondSection from "@/components/produtos/SecondSection";
import { Cases } from "@/components/institucional/cases";
import { title } from "process";
import CarroselVertical from "@/components/institucional/carrouselVerticalMain";



const slides = [
  {
    title: "Lorem Ipsum",
    text: "lorem Ips laborum et sapien et dolor sit amet",
    imageSrc:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Ema Watson",

  }
];




export default function Logistica() {
  return (
    <main>
      <Header />
      <JumboTron/>
      <SecondSection title="Fulfillment Personalizado" text="Nosso foco é fornecer soluções de fulfillment sob medida para atender às demandas específicas do seu negócio. Desde o armazenamento até a entrega, cuidamos de cada etapa do processo para garantir uma experiência de compra excepcional para seus clientes." image="."/>
      <Cases content={slides}/>
      <SecondSection image="" title="Implementação de WMS" text="Com a nossa plataforma de gerenciamento de armazém (WMS), oferecemos uma gestão eficiente e transparente do estoque. Nosso sistema avançado permite o monitoramento em tempo real, controle de inventário preciso e otimização dos processos de picking e packing."/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}

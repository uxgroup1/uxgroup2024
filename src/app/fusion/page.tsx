"use client";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer")) ;
const Header = dynamic(() => import("@/components/header")) ;
const ContactForm = dynamic(() => import("@/components/institucional/ContactForm")) ;
const FeaturesComponent = dynamic(() => import("@/components/produtos/features")) ;
const JumboTron = dynamic(() => import("@/components/produtos/jumbotron")) ;
import arrowImage from "@/assets/fusion/arrow/arrowListComponentesPudo.svg"
import fusionLogo from "@/assets/logos/fusion.svg"

const contentFeatures = [
    {
      title: "Envio de ocorrências simultâneo para vários sistemas.",
      icons: arrowImage,
    },
    {
      title:
        "Integração via API com os transportadores.",
      icons: arrowImage,
    },
    {
      title: "Ajuste de/para de ocorrências.",
      icons: arrowImage,
    },
    {
      title: "Reprocessamento massivo de ocorrências.",
      icons: arrowImage,
    },
    {
      title: "Garante acurácia entre Rastreamento + TMS + ERP.",
      icons: arrowImage,
    },
    {
      title: "Cobrança para o transportador em caso de evidência de falha de comunicação.",
      icons: arrowImage,
    },
  ];
const contentFeaturesTwo = [
    {
      title: "Integração com marketplaces ilimitadas.",
      icons: arrowImage,
    },
    {
      title:
        "Autonomia na manutenção de tabelas.",
      icons: arrowImage,
    },
    {
      title: "Cotação de multi CDs.",
      icons: arrowImage,
    },
    {
      title: "Contingência dos Correios.",
      icons: arrowImage,
    },
    {
      title: "Atende operações: ship from store, click and collect e dropshipping.",
      icons: arrowImage,
    },
    {
      title: "Algoritmo de redução de frete para embalagem única.",
      icons: arrowImage,
    },
  ];



export default function Fusion() {
  return (
    <>
      <main>
        <Header />
        <JumboTron
          corButtonOne="#28265b"
          logo={fusionLogo}
          title="We invest in the world’s potential"
          banner=""
          text="Seja no mundo do e-commerce ou em marketplaces, o frete é sempre um desafio, o que torna a tecnologia uma peça fundamental para o sucesso das vendas digitais. Nossa solução de gestão de fretes oferece módulos eficazes que garantem a melhora de performance, redução de custos e aumento das vendas, resolvendo os desafios de cada uma das etapas da cadeia de entrega."
        />
        <section style={{paddingTop:'50px', paddingBottom:"0px"}}></section>
        <FeaturesComponent
          titleSection="Ofereça as melhores opções de frete"
          text="Tenha uma solução inteligente de cálculo de frete com diversas opções precisas e ágeis de prazo e preços e evite os constantes abandonos de carrinho."
          banner=""
          content={contentFeaturesTwo}
          rowReverse

        />
        <FeaturesComponent
          titleSection="Reduza os contatos no SAC com Rastreamento"
          text="Ofereça mais visibilidade das etapas e mantenha seus clientes informados sobre o seu tracking com uma tecnologia de rastreamento completa."
          banner=""
          content={contentFeatures}
          rowReverse={false}

        />
        
        <section style={{paddingTop:'0px', paddingBottom:"50px"}}></section>
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}

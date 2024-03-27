"use client";

const CarroselVertical = dynamic(() => import("@/components/institucional/carrouselVerticalMain")) ;
import image from "../assets/cta/ctaBanner.png";
const Cta = dynamic(() => import("@/components/cta")) ;
const LogisticaComPerformance = dynamic(() => import("@/components/institucional/logisticaComPerformance")) ;
const BannerMain = dynamic(() => import("@/components/institucional/bannerMain")) ;
const UxPartners = dynamic(() => import("@/components/institucional/uxPartners")) ;
const LogisticaSustentavel = dynamic(() => import("@/components/institucional/logisticaSustentavel")) ;
const UxMidia = dynamic(() => import("@/components/institucional/uxMidia")) ;
import { Blog } from "@/components/institucional/blog";
const CarroselVerticalMobile = dynamic(() => import("@/components/institucional/carrouselVerticalMain/mobile")) ;
const Header = dynamic(() => import("@/components/header")) ;
const Footer = dynamic(() => import("@/components/Footer")) ;
const ContactForm = dynamic(() => import("@/components/institucional/ContactForm")) ;
const EcoSistemaUx = dynamic(() => import("@/components/ecosistemaUx")) ;
import { Cases } from "@/components/institucional/cases";
import dynamic from "next/dynamic";

const slides = [
  {
    title: "Lorem Ipsum",
    text: "lorem Ips laborum et sapien et dolor sit amet",
    imageSrc:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Ema Watson",
  },
  {
    title: "UX Group",
    text: "lorem Ips laborum et sapien et dolor sit amet",
    imageSrc:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "John Doe",
  },
  {
    title: "UX Log",
    text: "lorem Ips laborum et sapien et dolor sit amet",
    imageSrc:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Jane Smith",
  },
];

const content = [
  {
    index: 0,
    title: "TMS embarcador",
    contentTitle: "TMS embarcador",
    contentText:
      "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
  },
  {
    index: 1,
    title: "TMS Transportador",
    contentTitle: "TMS Transportador",
    contentText:
      "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
  },
  {
    index: 2,
    title: "Plataforma de comunicação",
    contentTitle: "Plataforma de comunicação",
    contentText:
      "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
  },
  {
    index: 3,
    title: "Loja digital",
    contentTitle: "Loja digital",
    contentText:
      "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
  },
];

const contentUxMidia = [
  {
    title: "Armazenagem e expedição de pedidos ",
    text: "Todos os produtos armazenados e expedidos com 99,6% do cumprimento de SLA para uma operação eficiente com foco na experiência do cliente.",
    banner: "",
    index : 0
  },
  {
    title: "Gestão de estoque",
    text: "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    banner: "",
    index : 1
  },
  {
    title: "Logística Reversa",
    text: "Transforme a devolução de produtos em oportunidades de satisfação. Simplifique as etapas com a garantia do mesmo cuidado com a expedição.",
    banner: "",
    index : 2
  },
  {
    title: "Gestão de transportes",
    text: "Otimize o seu transporte, com uma gestão de entregas 100% integradas a tecnologia permitindo tomada de decisão rápida e assertiva, garantindo o cuidado com a jornada do pedido.",
    banner: "",
    index : 3
  },
  {
    title: "PUDO's",
    text: "Aumente a satisfação do cliente com nossos pontos de coleta e entrega estrategicamente localizados. A conveniência e a agilidade ao alcance do seu cliente.",
    banner: "",
    index : 4
  },
  {
    title: "WMS",
    text: "Automação total para uma operação de e-commerce de alta performance. Digitalização e visibilidade em tempo real para gestão de estoque e coleta do pedido.",
    banner: "",
    index : 5
  },
  {
    title: "S&OP",
    text: "Evite atrasos e reclamações, com Planejamento de Vendas e Operação é possível alinhar e integrar as áreas para melhor gerenciamento de produtos e demandas garantindo a eficiência do processo logístico.",
    banner: "",
    index : 6
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <BannerMain />
      <EcoSistemaUx />
      <Cases content={slides} />
      <CarroselVertical title="Inove, Controle e Venda Mais" text="Adapte-se às mudanças do mercado com facilidade. Nossas soluções de tecnologia modulares oferecem flexibilidade, informação e eficiência para a gestão de fretes, gestão de transportes e comunicação das suas vendas digitais. Conheça nossas soluções!" content={content}/>
      <CarroselVerticalMobile />
      <Cta
        button={true}
        title={
          "Eficiência, Sustentabilidade e Informação: Descubra o futuro da logística com a UX"
        }
        banner={image.src}
      />
      <LogisticaComPerformance />

      <Cta
        button={true}
        title={
          "Descubra como podemos transformar sua operação, reduzir custos e impulsionar seus resultados"
        }
        banner={image.src}
      />

      <LogisticaSustentavel />
      <UxPartners />
      <Blog />
      <UxMidia content={contentUxMidia} />
      <Cta
        button={true}
        title={
          "Descubra como podemos transformar sua operação, reduzir custos e impulsionar seus resultados"
        }
        banner={image.src}
      />
      <section style={{paddingTop:'0px', paddingBottom:"30px"}}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}

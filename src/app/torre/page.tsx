"use client";

import Footer from "@/components/Footer";
import Header from "@/components/header";
import ContactForm from "@/components/institucional/ContactForm";
import FeaturesComponent from "@/components/produtos/features";
import JumboTron from "@/components/produtos/jumbotron";
import ThreeTopics from "@/components/produtos/threeTopics";
import movingImage from "@/assets/torre/icons/moving.svg"
import natureImage from "@/assets/torre/icons/nature.svg"
import packgeImage from "@/assets/torre/icons/package.svg"
import imageArrow from "@/assets/torre/arrow/arrowListComponentes.svg"

const contentFeaturesOne = [
  {
    title: "Redução de custos operacionais.",
    icons: imageArrow,
  },
  {
    title:
      "Aumento da eficiência e produtividade.",
    icons: imageArrow,
  },
  {
    title: "Maior visibilidade e controle dos processos.",
    icons: imageArrow,
  },
];
const contentFeaturesTwo = [
  {
    title: "Redução da pegada de carbono.",
    icons: imageArrow,
  },
  {
    title:
      "Entregas mais rápidas e eficientes.",
    icons: imageArrow,
  },
  {
    title: "Maior visibilidade e controle dos processos.",
    icons: imageArrow,
  },
];

const contentTopics = [
    {
      icon: natureImage,
      title: "Redução da pegada de carbono",
      text: "lorem Ipsum et al.",
    },
    {
      icon: movingImage,
      title: "Entregas mais rápidas e eficientes",
      text: "lorem Ipsum et al.",
    },
    {
      icon: packgeImage,
      title: "Geração de valor para sua marca",
      text: "lorem Ipsum et al.",
    },
  ];

export default function Torre() {
  return (
    <main>
      <Header />
      <JumboTron
        banner=""
        title="We invest in the world’s potential"
        text="Oferecemos soluções integradas e inovadoras para otimizar toda a cadeia logística da sua empresa. Combinamos tecnologia de ponta com expertise em logística para garantir que suas operações de transporte sejam eficientes, econômicas e ecologicamente sustentáveis."
      />
      <section style={{paddingTop:'50px', paddingBottom:"0px"}}></section>
      <FeaturesComponent banner="" rowReverse={false} content={contentFeaturesOne} titleSection="Gestão de Transportes" text="Nossa solução de gestão de transportes é projetada para simplificar e otimizar todas as etapas do processo logístico. Desde o planejamento até o monitoramento em tempo real, tudo 100% integrado à tecnologia da UX, garantindo mais visibilidade e controle para suas entregas."/>
      <ThreeTopics content={contentTopics} title="Green Mile" text="Nossa abordagem inovadora para entregas urbanas inclui o uso de motos elétricas, contribuindo para a redução das emissões de carbono e para a sustentabilidade ambiental. Integrando tecnologia de rastreamento e um planejamento de entrega, garantimos que suas entregas sejam rápidas, seguras e eficientes."/>
      <FeaturesComponent rowReverse={true} banner="" content={contentFeaturesTwo} titleSection="SAC (Serviço de Atendimento ao Cliente) Integrado" text="Nosso compromisso com a excelência no atendimento ao cliente é evidenciado pelo nosso serviço de atendimento integrado. Com uma equipe dedicada, estamos sempre prontos para atender às suas necessidades, resolver problemas e garantir uma experiência positiva para seus clientes. Utilizando tecnologia de ponta, oferecemos suporte personalizado e eficiente."/>
      <section style={{paddingTop:'0px', paddingBottom:"50px"}}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}

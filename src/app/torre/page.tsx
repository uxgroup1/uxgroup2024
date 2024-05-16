"use client";

import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
const Header = dynamic(() => import("@/components/header"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);
const FeaturesComponent = dynamic(
  () => import("@/components/produtos/features")
);
const JumboTron = dynamic(() => import("@/components/produtos/jumbotron"));
const ThreeTopics = dynamic(() => import("@/components/produtos/threeTopics"));
import movingImage from "@/assets/torre/icons/moving.svg";
import natureImage from "@/assets/torre/icons/nature.svg";
import packgeImage from "@/assets/torre/icons/package.svg";
import imageArrow from "@/assets/torre/arrow/arrowListComponentes.svg";
import torreLogo from "@/assets/logos/torre.svg";
const ProductInstitutional = dynamic(
  () => import("@/components/produtos/institucional")
);
import sac from "@/assets/sac.png";
import transporte from "@/assets/transporte.png";
import banner from "@/assets/trux/torre.png";
import Script from "next/script";

const contentFeaturesOne = [
  {
    title: "Redução de custos operacionais.",
    icons: imageArrow,
  },
  {
    title: "Aumento da eficiência e produtividade.",
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
    title: "Entregas mais rápidas e eficientes.",
    icons: imageArrow,
  },
  {
    title: "Maior visibilidade e controle dos processos.",
    icons: imageArrow,
  },
];

const valuesInput = [
  {
    value: "",
  },
];

const contentTopics = [
  {
    icon: natureImage,
    title: "Redução da pegada de carbono",
    text: "",
  },
  {
    icon: packgeImage,
    title: "Entregas mais rápidas e eficientes",
    text: "",
  },
  {
    icon: movingImage,
    title: "Geração de valor para sua marca",
    text: "",
  },
];

export default function Torre() {
  return (
    <main>
      {/* <!-- Hotjar Tracking Code for https://uxgroup.com.br/ --> */}
      <Script>
        {` (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2580853,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>

      {/* <!-- Google Tag Manager --> */}
      <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5M78MWM');`}</Script>
      {/* <!-- End Google Tag Manager --> */}
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5M78MWM"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <Header />
      <JumboTron
        corButtonOne="#fac30c"
        corButtonTwo="#fe8012"
        textButtonOne="fale com um especialista"
        textButtonTwo="saiba mais"
        linkButtonOne="#formulario"
        linkButtonTwo="#sobre"
        logo={torreLogo.src}
        banner={banner.src}
        title="Torre de controle e gestão de transportes para operações de e-commerce."
        text="Tecnologia de ponta e um time com expertise em logística que garantem performance na operação de transportes."
      />
      <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
      <ProductInstitutional
        id="sobre"
        title="Otimize e transforme sua operação com Torre de Controle."
        text="Gerenciamento de transportes, entrega sustentável e suporte ao cliente integrado para um operação de entregas eficiente. Soluções inovadoras com tecnologia própria em todas as etapas que otimizam o processo logístico e garantem uma melhor experiência ao cliente."
        banner={banner.src}
        corButtonOne="#fac30c"
        corButtonThree="#fe8012"
        linkButtonOne="#gestao-transporte"
        linkButtonTwo="https://calendly.com/natielen-campos/ux-group-voce"
        textButtonOne="saiba mais"
        textButtonTwo="agende uma reunião"
      />
      <FeaturesComponent
        id="gestao-transporte"
        banner={transporte.src}
        rowReverse={false}
        content={contentFeaturesOne}
        titleSection="Gestão de Transportes."
        text="Nossa solução de gestão de transportes é projetada para simplificar e otimizar todas as etapas do processo logístico. Desde o planejamento até o monitoramento em tempo real, tudo 100% integrado à tecnologia da UX, garantindo mais visibilidade e controle para suas entregas."
      />
      <ThreeTopics
        content={contentTopics}
        title="Green Mile."
        text="Nossa abordagem inovadora para entregas urbanas inclui o uso de motos elétricas, contribuindo para a redução das emissões de carbono e para a sustentabilidade ambiental. Integrando tecnologia de rastreamento e um planejamento de entrega, garantimos que suas entregas sejam rápidas, seguras e eficientes."
      />
      <FeaturesComponent
        rowReverse={true}
        banner={sac.src}
        content={contentFeaturesTwo}
        titleSection="SAC (Serviço de Atendimento ao Cliente) Integrado."
        text="Nosso compromisso com a excelência no atendimento ao cliente é evidenciado pelo nosso serviço de atendimento integrado. Com uma equipe dedicada, estamos sempre prontos para atender às suas necessidades, resolver problemas e garantir uma experiência positiva para seus clientes. Utilizando tecnologia de ponta, oferecemos suporte personalizado e eficiente."
      />
      <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
      <ContactForm nameForm="FormTorre" page="Torre de Controle" content={valuesInput} />
      <Footer />
    </main>
  );
}

"use client";

import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
const Header = dynamic(() => import("@/components/header"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);

const JumboTron = dynamic(() => import("@/components/produtos/jumbotron"));
const ThreeTopics = dynamic(() => import("@/components/produtos/threeTopics"));
import movingImage from "@/assets/torre/icons/moving.svg";
import natureImage from "@/assets/torre/icons/nature.svg";
import packgeImage from "@/assets/torre/icons/package.svg";
import imageArrow from "@/assets/torre/arrow/arrowListComponentes.svg";
import torreLogo from "@/assets/logos/torre.svg";
const FeaturesComponent = dynamic(
  () => import("@/components/produtos/features")
);
const ProductInstitutional = dynamic(
  () => import("@/components/produtos/institucional")
);
import sac from "@/assets/sac.png";
import transporte from "@/assets/transporte.png";
import vennux from "@/assets/cards/venuxxTorre.png";
import entregaRapida from "@/assets/cards/entrega-rapida.png";
import banner from "@/assets/trux/torre.png";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SecondSection from "@/components/produtos/SecondSection";

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
const contentFeaturesThree = [
  {
    bold: "Same Day:",
    title: ` Atenda às urgências com entregas no mesmo dia, garantindo satisfação imediata.`,
    icons: imageArrow,
  },
  {
    bold: "Next Day:",
    title: " Ofereça conveniência com entregas no dia seguinte, aumentando a confiança do cliente.",
    icons: imageArrow,
  },
  {
    bold: "Agendada:",
    title: " Dê flexibilidade aos seus clientes, permitindo que escolham a melhor data e hora para a entrega.",
    icons: imageArrow,
  },
];

const valuesInput = [
  {
    value: "Soluções  para otimizar minha operação",
  },
  {
    value: "Fulfillment",
  },
  {
    value: "Transporte",
  },
  {
    value: "Consultoria Estratégica",
  },
  {
    value: "Projetos especiais",
  },
  {
    value: "Parcerias",
  },
  {
    value: "Quero trabalhar com vocês",
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
    <QueryClientProvider client={new QueryClient()}>
      <main>
        <Script
          type="text/javascript"
          async
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/139aadf5-b7d4-4ce5-b117-ddb828aef384-loader.js"
        ></Script>

        {/* <!-- Hotjar Tracking Code for https://uxgroup.com.br/ --> */}

        <Script>
          {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5174280,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}</Script>


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
        buttonTwo
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
        buttonTwo
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

        <FeaturesComponent
          id="gestao-transporte"
          banner={entregaRapida.src}
          rowReverse={true}
          content={contentFeaturesThree}
          titleSection="Entrega Rápida e Programada para seu Negócio"
          text="Aumente suas conversões e fidelize seus clientes proporcionando uma experiência de compra única com serviços de entrega personalizados. Com opções flexíveis e rápidas, atendemos todas as suas necessidades logísticas, proporcionando uma experiência de compra superior e conveniente para o seu cliente."
        />
        <SecondSection  text="O Ship from Store garante que seus pedidos sejam enviados diretamente das lojas físicas mais próximas, reduzindo o tempo de entrega e aumentando a eficiência. Realizado por um time majoritariamente composto por mulheres, não só melhora a eficiência logística, como combina a excelência operacional, com uma forte responsabilidade social. Ao optar por esse serviço da UX em conexão com a Venuxx, você promove a inclusão feminina no mercado de trabalho e desfruta de uma entrega rápida,confiável e sustentável, já que todas as entregas são 100% carbono compensado através de tecnologia ." title="Eficiência e Inclusão" flowReverse={false} image={vennux.src} link="https://venuxx.com/" corButtonOne="#fac30c" corButtonTwo="#fe8012" />
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
        <ContactForm
          nameForm="FormTorre"
          page="Torre de Controle"
          content={valuesInput}
        />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}

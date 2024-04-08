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
import arrowImage from "@/assets/trux/arrow/arrowListComponentesPudo.svg";
import truxLogo from "@/assets/logos/trux.svg";
import banner from "@/assets/trux/tms-transp.png";
const ProductInstitutional = dynamic(
  () => import("@/components/produtos/institucional")
);
import imageGestao from "@/assets/trux/gestao-financeira.png";
import imageRoteirizacao from "@/assets/trux/roteirizacao-de-entrega.png";
import imageTrux from "@/assets/trux/trux.png";
import Numbers from "@/components/produtos/numbers";

const contentFeatures = [
  {
    title: "Rotas otimizadas com 100% das necessidades atendidas em minutos.",
    icons: arrowImage,
  },
  {
    title:
      "Aderência com diversos tipos de operação com regras personalizadas.",
    icons: arrowImage,
  },
  {
    title: "Plataforma 100% web com mapas sempre atualizados.",
    icons: arrowImage,
  },
  {
    title: "Algoritmo avançado que garante rotas altamente precisas.",
    icons: arrowImage,
  },
];
const contentFeaturesTwo = [
  {
    title: "Emissão de CTEs direto no sistema.",
    icons: arrowImage,
  },
  {
    title: "Geração de faturas automáticas para transportadores e motoristas.",
    icons: arrowImage,
  },
  {
    title: "Integração com sistemas financeiros para automação de processos.",
    icons: arrowImage,
  },
  {
    title:
      "Automatizar a folha de pagamento dos motoristas, incluindo horas extras, pedágios e outros encargos.",
    icons: arrowImage,
  },
];

const contentFeaturesFour = [
  {
    title:
      "Captação de localização do motorista atualizada a cada 15 segundos.",
    icons: arrowImage,
  },
  {
    title: "Check out fotográfico.",
    icons: arrowImage,
  },
  {
    title: "Gestão do tempo gasto em cada etapa.",
    icons: arrowImage,
  },
  {
    title: "Notificação proativa.",
    icons: arrowImage,
  },
];
const number = [
  {
    number: "+98%",
    text: "pedidos concluídos com sucesso",
  },
  {
    number: "+99,9%",
    text: "de disponibilidade do sistema",
  },
  {
    number: "+96%",
    text: "dos pedidos integrados",
  },
  {
    number: "30 MM",
    text: "de entregas",
  },
];

export default function Trux() {
  
  return (
    <>
      <main>
        <Header />
        <JumboTron
          linkButtonOne="#"
          linkButtonTwo="#"
          textButtonOne="falar com especialista"
          textButtonTwo="saiba mais"
          corButtonOne="#009881"
          corButtonThree="#046C5C"
          logo={truxLogo.src}
          title="Transforme a sua gestão de transportes com o TMS: eficiência, controle, redução de custos e crescimento para sua empresa."
          banner={banner.src}
          text="Tenha visão completa da sua operação em tempo real e tome decisões inteligentes baseada em dados sobre a sua operação de transportes."
        />
        <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
        <ProductInstitutional
          title="Organize, gerencie e monitore cada etapa do transporte e motoristas."
          text="Uma tecnologia completa com módulos de gestão, financeiro, reversa, roteirizador, averbação, que permitem otimizar rotas, reduzir custos e aumentar a precisão das entregas, como uma visão detalhada de cada um dos processos que envolvem a gestão de transportes. Nosso TMS transportador garante uma cadeia de suprimentos ágil, confiável e totalmente alinhada às demandas do mercado."
          banner={banner.src}
          corButtonOne="#009881"
          corButtonThree="#046C5C"
          linkButtonOne=""
          linkButtonTwo=""
          textButtonOne="saiba mais"
          textButtonTwo="agende uma demo"
        />
        <Numbers
          title="Tecnologia de ponta a ponta para gestão logística da sua venda digital."
          number={number}
          cor="#009881"
          banner="https://uxsolutions.com.br/wp-content/uploads/2023/07/universo-uxs-2.gif"
          text="Nossas soluções de TMS embarcador, TMS transportador, WMS, Live Tracking com atendimento via chatbot estão conectadas aos maiores players do mercado, proporcionando performance e eficiência para sua logística."
        />
        <FeaturesComponent
          titleSection="Roteirização de entrega"
          text="Otimize suas rotas, acelere processos, ganhe mais produtividade."
          banner={imageRoteirizacao.src}
          content={contentFeaturesTwo}
          rowReverse={false}
        />
        <FeaturesComponent
          titleSection="Gestão financeira"
          text="Tenha o controle total das suas finanças e automatize processos."
          banner={imageGestao.src}
          content={contentFeatures}
          rowReverse={true}
        />
        <FeaturesComponent
          titleSection="App para Motoristas: Agilidade e Eficiência na Ponta dos Dedos"
          text="Nosso aplicativo exclusivo para first e last mile, permite interação instantânea com os motoristas e transportadores, proporcionando uma comunicação eficaz e ágil durante todo o processo de entrega. Com o uso do app, você reduz o índice de insucessos, tem mais precisão na informação e contribui para a redução do uso de papel na operação, promovendo uma abordagem mais sustentável e eficiente."
          banner={imageTrux.src}
          content={contentFeaturesFour}
          rowReverse={false}
        />

        <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}

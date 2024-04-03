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
import Cta from "@/components/cta";
const ProductInstitutional = dynamic(
  () => import("@/components/produtos/institucional")
);

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
const contentFeaturesThree = [
  {
    title: "Envio automático do XML via FTP.",
    icons: arrowImage,
  },
  {
    title:
      "Cadastro de diferentes apólices de seguro, para garantir a vigência das regras e restrições.",
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
          logo={truxLogo}
          title="Transforme a sua gestão de transportes com o TMS: eficiência, controle, redução de custos e crescimento para sua empresa."
          banner={banner.src}
          text="Tenha visão completa da sua operação em tempo real e tome decisões inteligentes baseada em dados sobre a sua operação de transportes."
        />
        <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
        <ProductInstitutional
          title="Organize, gerencie e monitore cada etapa do transporte e motoristas."
          text="Uma tecnologia completa com módulos de gestão, financeiro, reversa, roteirizador, averbação, que permitem otimizar rotas, reduzir custos e aumentar a precisão das entregas, como uma visão detalhada de cada um dos processos que envolvem a gestão de transportes. Nosso TMS transportador garante uma cadeia de suprimentos ágil, confiável e totalmente alinhada às demandas do mercado."
          banner=""
          corButtonOne="#28265b"
          corButtonThree="#1F1D47"
          linkButtonOne=""
          linkButtonTwo=""
          textButtonOne=""
          textButtonTwo=""
        />
        <FeaturesComponent
          titleSection="Roteirização de entrega"
          text="Otimize suas rotas, acelere processos, ganhe mais produtividade."
          banner=""
          content={contentFeaturesTwo}
          rowReverse
        />
        <FeaturesComponent
          titleSection="Gestão financeira"
          text="Tenha o controle total das suas finanças e automatize processos."
          banner=""
          content={contentFeatures}
          rowReverse={false}
        />
        <Cta
          button
          banner={""}
          title={"Lorem"}
          text={"lorem ispum njkb"}
          corButtonOne="#FFF"
        />
        <FeaturesComponent
          titleSection="Averbação de Carga"
          text="Sua carga protegida em todas as etapas da entrega."
          banner=""
          content={contentFeaturesThree}
          rowReverse={true}
        />
        <FeaturesComponent
          titleSection="App para Motoristas: Agilidade e Eficiência na Ponta dos Dedos"
          text="Nosso aplicativo exclusivo para first e last mile, permite interação instantânea com os motoristas e transportadores, proporcionando uma comunicação eficaz e ágil durante todo o processo de entrega. Com o uso do app, você reduz o índice de insucessos, tem mais precisão na informação e contribui para a redução do uso de papel na operação, promovendo uma abordagem mais sustentável e eficiente."
          banner=""
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

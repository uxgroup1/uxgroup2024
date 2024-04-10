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
import imageGestao from "@/assets/ondetah/imagesSections/gestaoFinanceira.png";
import imageRoteirizacao from "@/assets/trux/roteirizacao.png";
import atendimento from "@/assets/trux/atendimento.png";
import averbacao from "@/assets/trux/averbacao.png";
import dash from "@/assets/trux/dashboards.png"
import reversa from "@/assets/trux/reversa.png";
import imageTrux from "@/assets/trux/trux.png";
import Numbers from "@/components/produtos/numbers";
import Script from "next/script";

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
const contentFeaturesSix = [
  {
    title: "Integração simples das notas de entrada diretamente no TMS.",
    icons: arrowImage,
  },
  {
    title:
      "Implementação de sistema de rastreamento de devoluções com acompanhamento em tempo real.",
    icons: arrowImage,
  },
  {
    title:
      "Otimização do processo de gestão de devoluções, reduzindo o tempo e os recursos necessários para processar e reembolsar devoluções.",
    icons: arrowImage,
  },
];
const contentFeaturesSeven = [
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
const contentFeaturesFive = [
  {
    title:
      "Nossos dashboards oferecem uma visão instantânea e informada da operação logística, incluindo desempenho de transporte e status de pedidos, permitindo uma análise rápida da situação atual.",
    icons: arrowImage,
  },
  {
    title:
      "Personalizamos os dashboards para atender às necessidades e preferências de cada usuário, garantindo uma experiência otimizada para todos na organização.",
    icons: arrowImage,
  },
  {
    title:
      "Com alertas personalizáveis, nossos dashboards garantem uma resposta rápida a situações críticas, permitindo que os usuários definam seus próprios critérios de notificação.",
    icons: arrowImage,
  },
];
const contentFeaturesThree = [
  {
    title: "Atualizações automáticas sobre as entregas.",
    icons: arrowImage,
  },
  {
    title:
      "Suporte acessível e conveniente via telefone, e-mail ou chat para resolver dúvidas ou problemas    .",
    icons: arrowImage,
  },
  {
    title:
      "Base de conhecimento completa no portal do cliente com vídeos, artigos e tutoriais.",
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
          linkButtonOne="#contactForm"
          linkButtonTwo="#sobre"
          textButtonOne="falar com especialista"
          textButtonTwo="saiba mais"
          corButtonOne="#009881"
          corButtonThree="#046C5C"
          logo={truxLogo.src}
          title="Gestão de motoristas e entregas para operações de transporte."
          banner={banner.src}
          text="Tenha visão completa da operação em tempo real e tome decisões inteligentes baseadas em dados de rotas, entregas e performance de motoristas."
        />
        <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
        <ProductInstitutional
          id="sobre"
          title="Organize, gerencie e monitore cada etapa do transporte e motoristas."
          text="Uma tecnologia completa com módulos de gestão, financeiro, reversa, roteirizador, averbação, que permitem otimizar rotas, reduzir custos e aumentar a precisão das entregas, como uma visão detalhada de cada um dos processos que envolvem a gestão de transportes. Nosso TMS transportador garante uma cadeia de suprimentos ágil, confiável e totalmente alinhada às demandas do mercado."
          banner={banner.src}
          corButtonOne="#009881"
          corButtonThree="#046C5C"
          linkButtonOne="#roteirizacao-entregas"
          linkButtonTwo="https://calendly.com/natielen-campos/ux-group-voce"
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
          id="roteirizacao-entregas"
          titleSection="Roteirização de entrega."
          text="Otimize suas rotas, acelere processos, ganhe mais produtividade."
          banner={imageRoteirizacao.src}
          content={contentFeatures}
          rowReverse={false}
        />
        <FeaturesComponent
          titleSection="Gestão financeira."
          text="Tenha o controle total das suas finanças e automatize processos."
          banner={imageGestao.src}
          content={contentFeaturesTwo}
          rowReverse={true}
        />
        <FeaturesComponent
          titleSection="Atendimento."
          text="Atendimento personalizado e suporte 24/7."
          banner={atendimento.src}
          content={contentFeaturesThree}
          rowReverse={false}
        />
        <FeaturesComponent
          titleSection="Dashboards."
          text="Uma visão completa em tempo real, com dados parametrizáveis de acordo com a necessidade do seu negócio."
          banner={dash.src}
          content={contentFeaturesFive}
          rowReverse={true}
        />
        <FeaturesComponent
          titleSection="Reversa."
          text="Gerencie suas cargas de retorno de forma automatizada com total visibilidade do processo."
          banner={reversa.src}
          content={contentFeaturesSix}
          rowReverse={false}
        />
        <FeaturesComponent
          titleSection="Averbação de Carga."
          text="Sua carga protegida em todas as etapas da entrega."
          banner={averbacao.src}
          content={contentFeaturesSeven}
          rowReverse={true}
        />
        <FeaturesComponent
          titleSection="App para Motoristas: Agilidade e Eficiência na Ponta dos Dedos."
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

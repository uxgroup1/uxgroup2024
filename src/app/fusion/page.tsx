"use client";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer/index"));
const Header = dynamic(() => import("@/components/header/index"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm/index")
);
const FeaturesComponent = dynamic(
  () => import("@/components/produtos/features/index")
);
const JumboTron = dynamic(
  () => import("@/components/produtos/jumbotron/index")
);
const Cta = dynamic(() => import("@/components/cta"));
const ProductInstitutional = dynamic(
  () => import("@/components/produtos/institucional/index")
);
const Integrations = dynamic(
  () => import("@/components/produtos/integracoes/index")
);

import arrowImage from "@/assets/fusion/arrow/arrowListComponentesPudo.svg";
import fusionLogo from "@/assets/logos/fusion.svg";
import Numbers from "@/components/produtos/numbers";
import imageOne from "@/assets/fusion/cf-final.png";
import imageTwo from "@/assets/fusion/r-final.png";
import imageThree from "@/assets/fusion/e-final.png";
import imageFour from "@/assets/fusion/c-final.png";
import imageFive from "@/assets/fusion/envios-final.png";
import imageSix from "@/assets/fusion/cf-mktpl-final.png";
import banner from "@/assets/fusion/fusionBanner.png";
import iconeEnvios from "@/assets/fusion/fusion-envios.svg";
import Script from "next/script";

const contentFeatures = [
  {
    title: "Envio de ocorrências simultâneo para vários sistemas.",
    icons: arrowImage,
  },
  {
    title: "Integração via API com os transportadores.",
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
    title:
      "Cobrança para o transportador em caso de evidência de falha de comunicação.",
    icons: arrowImage,
  },
];
const contentFeaturesTwo = [
  {
    title: "Integração com marketplaces ilimitadas.",
    icons: arrowImage,
  },
  {
    title: "Autonomia na manutenção de tabelas.",
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
    title:
      "Atende operações: ship from store, click and collect e dropshipping.",
    icons: arrowImage,
  },
  {
    title: "Algoritmo de redução de frete para embalagem única.",
    icons: arrowImage,
  },
];
const contentFeaturesThree = [
  {
    title:
      "Todas as informações disponibilizadas de forma automática para emissão de CTe    .",
    icons: arrowImage,
  },
  {
    title:
      "Autonomia na alteração de transportador pré movimentação da carga    .",
    icons: arrowImage,
  },
  {
    title: "Reenvio de Notifs direto na plataforma    .",
    icons: arrowImage,
  },
  {
    title:
      "Personalização das informações do Notifis de acordo com o transportador/embarcador.",
    icons: arrowImage,
  },
];
const contentFeaturesFour = [
  {
    title: "Conciliação de todos os custos do CTe.",
    icons: arrowImage,
  },
  {
    title: "Tolerância personalizada de divergência de valores (% ou $).",
    icons: arrowImage,
  },
  {
    title: "Geração de faturas manuais ou automáticas.",
    icons: arrowImage,
  },
  {
    title: "Conciliação de fretes B2B ou B2C.",
    icons: arrowImage,
  },
  {
    title: "Leitura de arquivos transportador via XML do CTe.",
    icons: arrowImage,
  },
  {
    title: "Relatório completo de entregas conciliadas.",
    icons: arrowImage,
  },
];
const contentFeaturesFive = [
  {
    title: "Centro de novas receitas com a gestão de fretes para os sellers.",
    icons: arrowImage,
  },
  {
    title:
      "Controle absoluto da performance de seus transportadores e sellers.",
    icons: arrowImage,
  },
  {
    title: "Visão online da despesa de frete dos pedidos aprovados.",
    icons: arrowImage,
  },
  {
    title: "Conciliação de frete com Correios.",
    icons: arrowImage,
  },
  {
    title: "Integração com multi transportadores.",
    icons: arrowImage,
  },
  {
    title: "Envio automático de etiqueta e etiquetas massivas.",
    icons: arrowImage,
  },
  {
    title: "Etiquetas integradas diretamente ao seu ERP.",
    icons: arrowImage,
  },
];
const contentFeaturesSix = [
  {
    title:
      "Configuração de tabelas de frete de acordo com o hub de fretes de cada vendedor.",
    icons: arrowImage,
  },
  {
    title: "Personalização da tabela de contingência.",
    icons: arrowImage,
  },
  {
    title: "Definição de regra massiva para os sellers de preços e prazos.",
    icons: arrowImage,
  },
  {
    title: "Criação de campanhas personalizadas de frete.",
    icons: arrowImage,
  },
  {
    title:
      "Atende operações: ship from store, click and collect e dropshipping.",
    icons: arrowImage,
  },
  {
    title: "Algoritmo de redução de frete para embalagem única.",
    icons: arrowImage,
  },
];

const number = [
  {
    number: "+700",
    text: "Transportadores conectados.",
  },
  {
    number: "+14",
    text: "HUBs conectados.",
  },
  {
    number: "+12",
    text: "Marketplaces conectados.",
  },
  {
    number: "+12",
    text: "ERPs conectados.",
  },
];

export default function Fusion() {
  return (
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
        corButtonOne="#28265b"
        corButtonThree="#1F1D47"
        logo={fusionLogo.src}
        title="Gestão de fretes para e-commerce e marketplaces."
        banner={banner.src}
        text="Aumente a conversão de vendas e reduza custos com uma gestão que permite autonomia para criação de campanhas de fretes e conciliação de pagamentos."
      />
      <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
      <ProductInstitutional
        id="sobre"
        title="Tecnologia de Fretes Inovadora: Otimização, Economia e Escalabilidade"
        text="Uma tecnologia modular desde o cálculo de frete à conciliação, nossa solução para gestão de fretes garante ao gestor das vendas digitais, a melhora de performance, redução de custos, resolvendo os desafios de cada uma das etapas da cadeia de entrega seja no mundo do e-commerce ou do marketplace.        "
        banner={banner.src}
        corButtonOne="#28265b"
        corButtonThree="#1F1D47"
        linkButtonOne="#e-commerce"
        linkButtonTwo="#marketplace"
        textButtonOne="e-commerce"
        textButtonTwo="marketplace"
      />
      <Numbers
        cor="#28265b"
        title="Tecnologia de ponta a ponta para gestão logística da sua venda digital."
        number={number}
        banner="https://uxsolutions.com.br/wp-content/uploads/2023/07/universo-uxs-2.gif"
        text=""
      />
      <FeaturesComponent
        id={"e-commerce"}
        titleSection="Ofereça as melhores opções de frete"
        text="Tenha uma solução inteligente de cálculo de frete com diversas opções precisas e ágeis de prazo e preços e evite os constantes abandonos de carrinho."
        banner={imageOne.src}
        content={contentFeaturesTwo}
        rowReverse={false}
      />
      <FeaturesComponent
        titleSection="Reduza os contatos no SAC com Rastreamento"
        text="Ofereça mais visibilidade das etapas e mantenha seus clientes informados sobre o seu tracking com uma tecnologia de rastreamento completa."
        banner={imageTwo.src}
        content={contentFeatures}
        rowReverse={true}
      />
      <FeaturesComponent
        titleSection="Agilize a entrega com automatização na Expedição"
        text="Comunicação 100% integrada via API com o transportador para aviso de coleta de pedidos."
        banner={imageThree.src}
        content={contentFeaturesThree}
        rowReverse={false}
      />
      <FeaturesComponent
        titleSection="Pague somente o acordado com os transportadores"
        text="Tenha a certeza de que está pagando o correto pelos fretes do seu negócio,, utilize uma solução de conciliação de frete."
        banner={imageFour.src}
        content={contentFeaturesFour}
        rowReverse={true}
      />

      <Cta
        title={
          "Descubra como podemos transformar sua operação, reduzir custos e impulsionar seus resultados e ai pode usar a mesma imagem dele a home"
        }
        banner={""}
        button
        gradient={true}
      />

      <FeaturesComponent
        id="marketplace"
        titleSection=""
        text="Controle com inteligência de todas as etapas do frete para o seu negócio e sellers. Desde o cálculo de frete , impressão de etiquetas, planejamento de malha, rastreamento e conciliação de fretes, tudo 100% integrado à sua plataforma."
        banner={imageFive.src}
        content={contentFeaturesFive}
        rowReverse={false}
        imageSobTitle={iconeEnvios}
      />
      <FeaturesComponent
        titleSection="Expanda suas opções de frete          "
        text="Cálculo de frete do seu marketplace totalmente integrado aos sellers. Através do gateway de fretes ofereça a mesma possibilidade de um cálculo preciso, resposta rápida e redução de custos através de tabelas parametrizáveis."
        banner={imageSix.src}
        content={contentFeaturesSix}
        rowReverse={true}
      />

      <Integrations />

      <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}

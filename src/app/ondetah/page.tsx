"use client";
const Footer = dynamic(() => import("@/components/Footer"));
const Cta = dynamic(() => import("@/components/cta"));
const Header = dynamic(() => import("@/components/header"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);
const CarroselVertical = dynamic(
  () => import("@/components/institucional/carrouselVerticalMain")
);
const SecondSection = dynamic(
  () => import("@/components/produtos/SecondSection")
);
const JumboTron = dynamic(() => import("@/components/produtos/jumbotron"));
const ThreeTopics = dynamic(() => import("@/components/produtos/threeTopics"));
import headsetImage from "@/assets/ondetah/headset.svg";
import counterImage from "@/assets/ondetah/counter.svg";
import smartphoneImage from "@/assets/ondetah/smartphone.svg";
import imageOndetah from "@/assets/ondetah/ondetah.png";
import ondetahLogo from "@/assets/logos/ondetah.svg";
import dynamic from "next/dynamic";
import ProductInstitutional from "@/components/produtos/institucional";
import FeaturesComponent from "@/components/produtos/features";
import arrowList from "@/assets/ondetah/arrow/arrowListComponentesPudo.svg";
import CarroselVerticalMobile from "@/components/institucional/carrouselVerticalMain/mobile";
import imageOne from "@/assets/ondetah/imagesSections/ondetah-1.png";
import imageTwo from "@/assets/ondetah/imagesSections/ondetah-2.png";
import imageSlideOne from "@/assets/ondetah/imagesSections/1.png";
import imageSlideTwo from "@/assets/ondetah/imagesSections/2.png";
import imageSlideThree from "@/assets/ondetah/imagesSections/3.png";
import imageSlideFour from "@/assets/ondetah/imagesSections/4.png";
import Numbers from "@/components/produtos/numbers";
import Script from "next/script";

const contentFeatures = [
  {
    title:
      "Entrega Pontual: Garanta que seus produtos sejam entregues dentro do prazo previsto, aumente a satisfação do cliente e fortaleça a reputação da sua marca.",
    icons: arrowList,
  },
  {
    title:
      "Redução de Custos: Evite atrasos e custos adicionais associados a entregas fora do prazo ou reenvios de produtos devido a problemas não resolvidos. ",
    icons: arrowList,
  },
  {
    title:
      "Maior Confiança do Cliente: Lide de forma rápida com as ocorrências e forneça atualizações transparentes sobre o status dos pedidos. Crie conexão com o seu cliente com comprometimento com a qualidade e o serviço.    ",
    icons: arrowList,
  },
  {
    title:
      "Melhoria da Experiência do Cliente: Tenha uma abordagem proativa para lidar com ocorrências e resolva os problemas antes que afetem negativamente a experiência do cliente.",
    icons: arrowList,
  },
  {
    title:
      "Feedback Valioso: Acompanhe de perto os feedback dos clientes, assim você consegue identificar áreas de melhoria e implementar mudanças para otimizar ainda mais seus processos.",
    icons: arrowList,
  },
];

const content = [
  {
    index: 0,
    title: "Informação em Tempo Real",
    contentTitle: "Informação em Tempo Real",
    contentText:
      "Acompanhe cada etapa do pedido em tempo real. Desde a confirmação até a entrega, atualizações regulares, incluindo notificações em caso de eventos inesperados.",
    banner: imageSlideOne.src,
  },
  {
    index: 1,
    title: "Redução de Contatos no SAC",
    contentTitle: "Redução de Contatos no SAC",
    contentText:
      "Utilize nosso SAC 4.0 com um chatbot disponível 24 horas por dia. Reduza o tempo de espera e resolva questões rapidamente através de aplicativos de mensagens, garantindo uma experiência mais positiva para o cliente e reduzindo custos.",

    banner: imageSlideTwo.src,
  },
  {
    index: 2,
    title: "Entrega Sustentável",
    contentTitle: "Entrega Sustentável",
    contentText:
      "Deixe suas entregas mais ecológicas através da compensação de carbono. Utilizamos tecnologia para calcular e neutralizar as emissões de carbono associadas aos seus pedidos, e fornecemos certificados de compensação para cada compra.",

    banner: imageSlideThree.src,
  },
  {
    index: 3,
    title: "Pesquisas de Satisfação",
    contentTitle: "Pesquisas de Satisfação Personalizadas",
    contentText:
      "Fidelize seus clientes com pesquisas de satisfação adaptadas às suas necessidades. Entenda melhor a experiência do cliente e reverta possíveis insatisfações, garantindo uma jornada de compra mais positiva.",

    banner: imageSlideFour.src,
  },
];

const contentTopics = [
  {
    icon: headsetImage,
    title: `50% de Redução de Contato com SAC`,
    text: "",
  },
  {
    icon: smartphoneImage,
    title: "100% dos Pedidos com Tracking Centralizado",
    text: "",
  },
  {
    icon: counterImage,
    title: "+5 Pontos Percentuais na Performance de Entrega",
    text: "",
  },
];

const number = [
  {
    number: "50%",
    text: "de redução de contato com SAC.",
  },
  {
    number: "20TON",
    text: "de carbono compensadas/mês.",
  },
  {
    number: "+5P.P",
    text: "na performance de entrega.",
  },
  {
    number: "100%",
    text: "dos pedidos com tracking centralizado.",
  },
];

export default function Ondetah() {
  return (
    <main>
      {/* <!-- Google Tag Manager --> */}
      <Script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TKFK2WW');`}
      </Script>
      {/* <!-- End Google Tag Manager --> */}

      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TKFK2WW"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}

      {/* <!-- Google Tag Manager --> */}
      <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5M78MWM');`}</script>
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
        textButtonOne="fale com um especialista"
        textButtonTwo="saiba mais"
        linkButtonOne=""
        linkButtonTwo=""
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        logo={ondetahLogo.src}
        title="Aplique eficiência, controle e sustentabilidade à sua operação através de tecnologia."
        banner={imageOndetah.src}
        text="Gerenciamento simplificado de prazos e ocorrências, informação em tempo real e compensação de carbono que garantem a experiência do cliente."
      />
      <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
      <ProductInstitutional
        title="Produtividade e sustentabilidade um um único lugar."
        text="Uma solução tecnológica inovadora de rastreamento que permite ao gestor das vendas digitais e de transportes o acompanhamento em tempo real de todas as etapas do processo, podendo atuar de forma inteligente com base em dados e assim,  reduzir custos, melhorar a performance e a satisfação do cliente."
        banner={imageOndetah.src}
        corButtonOne="#28265b"
        corButtonTwo="#009580"
        linkButtonOne=""
        linkButtonTwo=""
        textButtonOne="saiba mais"
        textButtonTwo="agendar reunião"
      />
      <Numbers
        cor="#009580"
        title="Garanta redução de custos no seu pós-venda com uma solução completa focada na experiência do cliente."
        number={number}
        banner="https://uxsolutions.com.br/wp-content/uploads/2023/07/universo-uxs-2.gif"
        text=""
      />
      <ThreeTopics
        content={contentTopics}
        title="Garanta uma solução completa focada na experiência do cliente e no sucesso do seu negócio."
        text=""
      />
      <CarroselVertical
        content={content}
        title="Transforme a experiência do seu cliente com funcionalidades exclusivas."
        text=""
      />
      <CarroselVerticalMobile
        content={content}
        title="Transforme a experiência do seu cliente com funcionalidades exclusivas."
        sub=""
      />
      <SecondSection
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        title="Gestão de Prazos e Ocorrências."
        text="Entendemos a importância de uma gestão de prazos eficiente e de como lidar com ocorrências de maneira proativa pode impactar positivamente sua operação e a experiência do seu cliente. Com o Ondetah você pode acompanhar de perto o desempenho da sua operação e identificar possíveis distorções entre os prazos prometidos e os prazos reais de entrega. Atue de maneira preventiva, evite contatos no SAC e ainda melhore a satisfação do cliente."
        image={imageOne.src}
        flowReverse={true}
      />
      <FeaturesComponent
        rowReverse={false}
        titleSection="Confira os benefícios da nossa solução para uma gestão de prazos e ocorrências:"
        content={contentFeatures}
        banner={imageTwo.src}
      />

      <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}

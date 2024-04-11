"use client";
const Footer = dynamic(() => import("@/components/Footer"));
const Cta = dynamic(() => import("@/components/cta"));
const Header = dynamic(() => import("@/components/header"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);
const SecondSection = dynamic(
  () => import("@/components/produtos/SecondSection")
);
const JumboTron = dynamic(() => import("@/components/produtos/jumbotron"));
import imageOndetah from "@/assets/ondetah/ondetah.png";
import ondetahLogo from "@/assets/logos/ondetah.svg";
import dynamic from "next/dynamic";
import ProductInstitutional from "@/components/produtos/institucional";
import imageOne from "@/assets/ondetah/imagesSections/ondetah-1.png";
import Numbers from "@/components/produtos/numbers";
import Script from "next/script";
import SliderTopics from "@/components/slider";
import IntegrationsOndetah from "@/components/produtos/integracoesOndetah";
import satisfacao from "@/assets/ondetah/imagesSections/pesquisa-de-satisfacao.png";
import informacoes from "@/assets/ondetah/imagesSections/informacao.png";
import sac from "@/assets/ondetah/imagesSections/sac.png";
import sustentavel from "@/assets/ondetah/imagesSections/sustentavel.png";


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
        textButtonOne="fale com um especialista"
        textButtonTwo="saiba mais"
        linkButtonOne="#contactForm"
        linkButtonTwo="#sobre"
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        logo={ondetahLogo.src}
        title="Gestão e comunicação com o cliente a partir do tracking personalizado."
        banner={imageOndetah.src}
        text="Visão simplificada de prazos e ocorrências, informação em tempo real e compensação de carbono que garantem excelência na experiência do cliente."
      />
      <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
      <ProductInstitutional
        id="sobre"
        title="Produtividade e sustentabilidade um um único lugar."
        text="Uma solução tecnológica inovadora de rastreamento que permite ao gestor das vendas digitais e de transportes o acompanhamento em tempo real de todas as etapas do processo, podendo atuar de forma inteligente com base em dados e assim,  reduzir custos, melhorar a performance e a satisfação do cliente."
        banner={imageOndetah.src}
        corButtonOne="#28265b"
        corButtonTwo="#009580"
        linkButtonOne="#gestao-de-prazos"
        linkButtonTwo="https://calendly.com/natielen-campos/ux-group-voce"
        textButtonOne="saiba mais"
        textButtonTwo="agende uma reunião"
      />
      <Numbers
        cor="#009580"
        title="Garanta redução de custos no seu pós-venda com uma solução completa focada na experiência do cliente."
        number={number}
        banner="https://uxsolutions.com.br/wp-content/uploads/2023/07/universo-uxs-2.gif"
        text=""
      />
      <SecondSection
        id="gestao-de-prazos"
        link="#contactForm"
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        title="Gestão de Prazos e Ocorrências."
        text="Entendemos a importância de uma gestão de prazos eficiente e de como lidar com ocorrências de maneira proativa pode impactar positivamente sua operação e a experiência do seu cliente."
        textTwo="Com o Ondetah você pode acompanhar de perto o desempenho da sua operação e identificar possíveis distorções entre os prazos prometidos e os prazos reais de entrega. Atue de maneira preventiva, evite contatos no SAC e ainda melhore a satisfação do cliente."
        image={imageOne.src}
        flowReverse={true}
      />

      <SecondSection
        link="#contactForm"
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        title="Informação em Tempo Real."
        text="Acompanhe cada etapa do pedido em tempo real. Desde a confirmação até a entrega, atualizações regulares, incluindo notificações em caso de eventos inesperados."
        image={informacoes.src}
        flowReverse={false}
      />
      <SecondSection
        link="#contactForm"
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        title="Redução de Contatos no SAC."
        text="Utilize nosso SAC 4.0 com um chatbot disponível 24 horas por dia. Reduza o tempo de espera e resolva questões rapidamente através de aplicativos de mensagens, garantindo uma experiência mais positiva para o cliente e reduzindo custos."
        image={sac.src}
        flowReverse={true}
      />
      <SecondSection
        link="#contactForm"
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        title="Entrega Sustentável."
        text="Deixe suas entregas mais ecológicas através da compensação de carbono. Utilizamos tecnologia para calcular e neutralizar as emissões de carbono associadas aos seus pedidos, e fornecemos certificados de compensação para cada compra."
        image={sustentavel.src}
        flowReverse={false}
      />
      <SecondSection
        link="#contactForm"
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        title="Pesquisas de Satisfação Personalizadas."
        text="Fidelize seus clientes com pesquisas de satisfação adaptadas às suas necessidades. Entenda melhor a experiência do cliente e reverta possíveis insatisfações, garantindo uma jornada de compra mais positiva.        "
        image={satisfacao.src}
        flowReverse={true}
      />
      <SliderTopics />
      <IntegrationsOndetah />
      <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}

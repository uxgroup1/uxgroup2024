"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Script from "next/script";
const Header = dynamic(() => import("@/components/header/index"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);
const JumboTron = dynamic(
  () => import("@/components/produtos/jumbotron/index")
);
const ProductInstitutional = dynamic(
  () => import("@/components/produtos/institucional/index")
);
const Footer = dynamic(() => import("@/components/Footer"));
import bannerOne from "@/assets/ondetah/analise-preditiva.png"
import banner from "@/assets/ondetah/clientesOndetah.png"
import Cta from "@/components/cta";
import NewTwoCards from "@/components/TwoCardsHome";

export default function Connect() {

  const valuesInput = [
    {
      value: "Quero fazer parte das conexões da UX",
    },
    {
      value: "Quero saber mais",
    },
    {
      value: "Outros",
    },
  ];

  const banners = [
    banner.src, bannerOne.src
  ]

  return (
    <QueryClientProvider client={new QueryClient()}>
      <main>
        <Script>
          {`function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-11020932578/BocGCOapxoIYEOKrmIcp',
                'event_callback': callback
            });
            return false;
          }`}
        </Script>

        <Script>
          {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-11020932578/i8_rCMzPkIUYEOKrmIcp',
                'event_callback': callback
            });
            return false;
          }
          `}
        </Script>

        <Script>
          {`
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-11020932578/IAM7CLz93bEZEOKrmIcp',
      'event_callback': callback
  });
  return false;
}`}
        </Script>

        <Script
          type="text/javascript"
          async
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/139aadf5-b7d4-4ce5-b117-ddb828aef384-loader.js"
        ></Script>

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
        <JumboTron banner="" trocaBanner bannersTroca={banners} corButtonOne="#7DAE59" linkButtonOne="" textButtonOne="falar com um especialista" textButtonTwo="saiba mais" linkButtonTwo="" title="Estratégia + Diferenciação + Integração" text="Gere uma experiência única para o seu cliente digital" />
        <ProductInstitutional banner={bannerOne.src} corButtonOne="#7DAE59" linkButtonOne="" linkButtonTwo="" textButtonOne="" textButtonTwo="" title="Seu e-commerce pede conexões que geram mais vendas." text="Com o ecossistema UX Group, as suas vendas digitais se transformam. Aqui, conectamos soluções desde o clique até o cliente buscando oferecer sempre a melhor experiência ao cliente. Utilize nossas soluções de vendas, gestão, logística e esg e garanta mais: visibilidade, personalização e resultados." />
        <Cta title={"Gere uma experiência única para o seu cliente digital"} banner={""} button />
        <NewTwoCards corButtonOne={"#A900D9"} corButtonTwo={"#A900D9"}  title="Conheça nossas conexões" titleOne="Unbox" textOne="Uma plataforma de vendas one stop shop, onde você encontra todas as ferramentas necessárias para gerenciar seu negócio online em um só lugar. Desde o desenvolvimento do projeto até automação de marketing, a Unbox simplifica a administração das vendas digitais,integra os processos de pagamento, economiza tempo, reduz os custos e melhora os resultados com soluções integradas." titleTwo="Venuxx" textTwo="Com soluções flexíveis e eficientes, adaptando os serviços às necessidades específicas de cada cliente, a Venuxx conecta especialistas em transporte a empresas do segmento B2B garantindo profissionalismo, confiabilidade e inovação. Com uma equipe majoritariamente de mulheres,cada entrega realizada reflete o compromisso com um serviço humanizado e de alta qualidade, agregando um valor único à experiência dos clientes. " />
        <ContactForm nameForm="connect" content={valuesInput} page="connect" />
        <Footer />

      </main>
    </QueryClientProvider>
  )
}
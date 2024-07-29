"use client";
const CarroselVertical = dynamic(
  () => import("@/components/institucional/carrouselVerticalMain/index")
);
const Cta = dynamic(() => import("@/components/cta/index"));
const LogisticaComPerformance = dynamic(
  () => import("@/components/institucional/logisticaComPerformance/index")
);
const UxPartners = dynamic(
  () => import("@/components/institucional/uxPartners/index")
);
const LogisticaSustentavel = dynamic(
  () => import("@/components/institucional/logisticaSustentavel/index")
);
const UxMidia = dynamic(
  () => import("@/components/institucional/uxMidia/index")
);
const CarroselVerticalMobile = dynamic(
  () => import("@/components/institucional/carrouselVerticalMain/mobile/index")
);
const Header = dynamic(() => import("@/components/header/index"));
const Footer = dynamic(() => import("@/components/Footer/index"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm/index")
);
const EcoSistemaUx = dynamic(() => import("@/components/ecosistemaUx/index"));
const BannerHome = dynamic(
  () => import("@/components/institucional/bannerHome")
);
import dynamic from "next/dynamic";
import ImageUxMidiaOne from "@/assets/home/UX-na-midia/logistica.png";
import ImageUxMidiaTwo from "@/assets/home/UX-na-midia/tecnologia.png";
import ImageUxMidiaThree from "@/assets/home/UX-na-midia/gestao.png";
import ClientsCases from "@/components/institucional/clients";
import ctaOne from "@/assets/cta/cta-1-home.png";
import ctaTwo from "@/assets/cta/cta-2-home.png";
import imageCarroselVerticalOne from "@/assets/fusion/fusionBanner.png";
import imageCarroselVerticalTwo from "@/assets/trux/tms-transp.png";
import imageCarroselVerticalThree from "@/assets/ondetah/ondetah.png";
import logoFusion from "@/assets/home/fusion-gestao.png";
import logoTrux from "@/assets/home/trux-gestao.png";
import logoOndetah from "@/assets/home/ondetah-gestao.png";
import iconFusion from "@/assets/home/fusion.svg";
import iconOndetah from "@/assets/home/ondetah.svg";
import iconTrux from "@/assets/home/trux.svg";
import Script from "next/script";
import { Blog } from "@/components/institucional/blog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import vendas from "@/assets/vendas.svg"
import gestao from "@/assets/gestao.svg"
import { useState } from "react";
import NewBannerHome from "@/components/institucional/newBannerHome";
import NewTwoCards from "@/components/TwoCardsHome";


const content = [
  {
    index: 0,
    title: "TMS para Embarcadores",
    contentTitle: "Gestão de fretes para e-commerce e marketplaces.",
    contentText: "Do cálculo à conciliação de fretes, utilize o mais completo TMS embarcador e reduza seus custos com frete.",
    banner: imageCarroselVerticalOne.src,
    logo: logoFusion.src,
    link: "/fusion",
    icon: iconFusion.src,
    textButton: "conheça a solução",
  },
  {
    index: 2,
    title: "Experiência do Cliente",
    contentTitle: "Gestão e comunicação com o cliente a partir do tracking.",
    contentText: "Melhore a gestão do ciclo do pedido com informação em tempo real e mensageria automatizada.",
    banner: imageCarroselVerticalThree.src,
    logo: logoOndetah.src,
    link: "/ondetah",
    icon: iconOndetah.src,
    textButton: "conheça a solução",
  },
  {
    index: 1,
    title: "TMS para Transportadores",
    contentTitle: "Gestão de entregas e de transportadores.",
    contentText: "Otimize suas rotas, controle suas finanças e tenha controle em tempo real das entregas pelo app de motoristas.",
    banner: imageCarroselVerticalTwo.src,
    logo: logoTrux.src,
    link: "/trux",
    icon: iconTrux.src,
    textButton: "conheça a solução",
  },
];

const contentUxMidia = [
  {
    title: "UX Group anuncia comando de nova diretoria focada no cliente.",
    text: "UX Group, ecossistema de inovações em tecnologia, logística e sustentabilidade, acaba de criar uma diretoria focada na experiência do cliente...",
    banner: ImageUxMidiaTwo.src,
    link: "https://startups.com.br/danca-das-cadeiras/ux-group-anuncia-comando-de-nova-diretoria-focada-no-cliente/",
  },
  {
    title: "Os influencers como nicho promissor para o fulfillment",
    text: "Para vencer no ambiente de e-commerce, é preciso oferecer uma experiência de compra positiva por todo o processo de venda digital...",
    banner: ImageUxMidiaOne.src,
    link: "https://portal.clientesa.com.br/cliente-sa/os-influencers-como-nicho-promissor-para-o-fulfillment/",
  },
  {
    title:
      "Dafiti firma parceria com UX Group para automatizar operações logísticas",
    text: "A UX Group anunciou contrato com a Dafiti para a adoção de soluções tecnológicas voltadas para a automatização de suas operações logísticas...",
    banner: ImageUxMidiaTwo.src,
    link: "https://mundologistica.com.br/noticias/dafiti-firma-parceria-com-ux-group-para-automatizar-operacoes-logisticas",
  },
  {
    title: "Inteligência operacional e seus impactos na performance logística",
    text: "Em logística, o ato de entregar não está atrelado somente ao transporte. Ele envolve um conjunto de atividades e estratégias...",
    banner: ImageUxMidiaOne.src,
    link: "https://www.ecommercebrasil.com.br/artigos/inteligencia-operacional-e-seus-impactos-na-performance-logistica",
  },
  {
    title: "Como os chatbots podem apoiar a logística? ",
    text: "Um robô com nível de inteligência notável interage com clientes, soluciona dúvidas e encaminha questões críticas para as devidas tratativas...",
    banner: ImageUxMidiaThree.src,
    link: "https://mundologistica.com.br/revista-extra/como-os-chatbots-podem-apoiar-a-logistica",
  },
  {
    title: "Petlove eleva performance logística em 90% no Sul do país",
    text: "A Petlove anuncia elevação de sua performance em 90% graças ao modelo de fulfillment adotado junto à UX Group, empresa especializada em gestão inteligente de logística e transportes...",
    banner: ImageUxMidiaOne.src,
    link: "https://sbvc.com.br/petlove-eleva-performance-logistica-em-90-no-sul-do-pais/",
  },
  {
    title: "Fulfillment: por que interessa aos pequenos e grandes?",
    text: "Para os pequenos, certos investimentos passam a não fazer sentido quando são colocados na ponta do papel e comparados a um modelo de terceirização...",
    banner: ImageUxMidiaOne.src,
    link: "https://www.ecommercebrasil.com.br/artigos/fulfillment-por-que-interessa-aos-pequenos-e-grandes",
  },
  {
    title: "Estratégias para ser diferente aos olhos da geração Z",
    text: "Mais tecnologia para atender à demanda do escoamento, descentralização do estoque, redução de despesas, implementação de recursos mais inovadores...",
    banner: ImageUxMidiaThree.src,
    link: "https://portal.clientesa.com.br/cliente-sa/estrategias-para-ser-diferente-aos-olhos-da-geracao-z/",
  },
  {
    title: "UX Group sela acordo com Amazon para integrar o grupo de parceiros",
    text: "Diferenciar-se diante de um público cada vez mais conectado, ávido por novidades e movido a propósitos...",
    banner: ImageUxMidiaTwo.src,
    link: "https://www.mundodomarketing.com.br/noticias-corporativas/conteudo/285412/ux-group-sela-acordo-com-amazon-para-integrar-o-grupo-de-parceiros-spn/",
  },
  {
    title: "UX Group desenvolve sistema de gestão de parceiros",
    text: "A UX Group, hub de soluções de tecnologia, operação e serviços logísticos, acaba de assinar contrato com a Amazon para que sua vertical de Fulfillment...",
    banner: ImageUxMidiaThree.src,
    link: "https://www.tecnologistica.com.br/noticias/lancamento-de-produtos/16917/ux-group-desenvolve-sistema-de-gestao-de-parceiros-e-aprimora-operacionalizacao-das-entregas/#:~:text=UX%20Group%20desenvolve%20sistema%20de%20gest%C3%A3o%20de%20parceiros%20e%20aprimora%20operacionaliza%C3%A7%C3%A3o%20das%20entregas,-Empresa%20espera%20atender&text=A%20UX%20Group%20anuncia%20o,das%20entregas%2C%20denominado%20Rede%20Credenciada.",
  },
];

const valuesInput = [
  { value: "Quero conhecer todo o ecossistema UX." },
  { value: "Quero conhecer as tecnologias para operação." },
  { value: "Quero conhecer os serviços logísticos." },
  { value: "Quero que meu negócio seja parte do ecossistema." },
  { value: "Quero trabalhar na UX." },
];

export default function Home() {
  const [questionario, setQuestinario] = useState(false)
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
        {/* <BannerHome /> */}
        <NewBannerHome />
        <EcoSistemaUx />
        <ClientsCases />
        <NewTwoCards
          title="Tecnologia para vendas digitais."
          text="Soluções personalizadas para o tamanho e perfil do seu negócio. Nossa plataforma one stop shop e nosso hub de integração oferecem uma experiência completa e integrada, desde o desenvolvimento da loja até a entrega ao cliente."
          titleOne=" One Stop Shop" titleTwo=" Hub de Integração"
          iconOne={vendas} iconTwo={gestao}
          textOne="A plataforma para quem quer crescer rápido, converter mais e escalar as vendas. Desenvolva a sua loja do seu jeito e do tamanho do seu negócio, com tudo em um só lugar."
          textTwo="Soluções de tecnologia e logística da UX conectadas às principais plataformas do mercado. Saiba como conectar estratégias personalizadas ao seu e-commerce."
          corButtonOne="#A900D9" corButtonTwo="#29265B" />
        {/* <button onClick={() => setQuestinario(!questionario)}><ButtonChat /></button>
        {questionario && (
          <Questionario fechar={async () => setQuestinario(!questionario)} />
        )} */}


        <CarroselVertical
          id="gestao"
          title="Tecnologia para gestão da logística."
          text="Nossas soluções de tecnologia são próprias, modulares e oferecem flexibilidade, informação e eficiência para a gestão de fretes, gestão de transportes e comunicação com o cliente.        "
          content={content}
        />
        <CarroselVerticalMobile
          title="Tecnologia para gestão da logística."
          sub="Nossas soluções de tecnologia são próprias, modulares e oferecem flexibilidade, informação e eficiência para a gestão de fretes, gestão de transportes e comunicação com o cliente."
          content={content}
        />
        {/* <Cta
          button={true}
          title={
            "Eficiência, Informação e Sustentabilidade: Descubra o futuro da logística com a UX.          "
          }
          banner={ctaOne.src}
        /> */}
        <LogisticaComPerformance id={"logistica"} />

        <Cta
          button={true}
          title={
            "Descubra  como podemos transformar sua operação, reduzir custos e impulsionar seus resultados."
          }
          banner={ctaTwo.src}
        />
        <LogisticaSustentavel id={"sustentabilidade"} />
        <UxPartners />
        <Blog />
        <UxMidia colorText="#000" content={contentUxMidia} />
        <section style={{ paddingTop: "0px", paddingBottom: "30px" }}></section>
        <ContactForm nameForm="contactForm" content={valuesInput} page="Home" />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}

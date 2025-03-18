"use client";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"));
const Header = dynamic(() => import("@/components/header/index"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);
const JumboTron = dynamic(() => import("@/components/produtos/jumbotron"));

import boxPudo from "@/assets/pudo/box-pudo.svg"
import mapaPudo from "@/assets/pudo/mapaPudo.png"
import pudoLogo from "@/assets/logos/pudos.svg";
import ProductInstitutional from "@/components/produtos/institucional";
import banner from "@/assets/pudo/pudoImages/banner-pudo.png";
import pudo from "@/assets/pudo/pudoImages/pudo.png";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SecondSection from "@/components/produtos/SecondSection";
import FluxoPudo from "@/components/fluxoPudo";
import ParaMarketPlacesPudo from "@/components/ParaMarketPlacesPudo";
import ParaLojasFisicasPudo from "@/components/paraLojasFisicasPudo";
import JornadaPudo from "@/components/jornadaPudo";



const valuesInput = [
  {
    value: "Conhecer soluções em operação PUDO para minha empresa",
  },
  {
    value: "Quero cadastrar minha empresa como PUDO",
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



export default function Pudos() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <>
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
            textButtonOne="saiba mais"
            textButtonTwo="falar com um especialista"
            linkButtonOne="#formulario"
            linkButtonTwo="#sobre"
            corButtonOne="#CA620A"
            corButtonThree="#ff7f12"
            logo={pudoLogo.src}
            title="Quer uma logística inteligente e escalável?"
            text="Conheça o PUDO, com eles, seus consumidores escolhem quando e onde retirar seu pedido, em pontos estratégicos, otimizando os processos, reduzindo falhas e gerando uma maior satisfação do cliente."
            banner={banner.src}
          />
          <section
            style={{ paddingTop: "50px", paddingBottom: "0px" }}
          ></section>
          <ProductInstitutional
            buttonTwo
            id="sobre"
            title="O que é um PUDO?"
            subTitle="Por que escolher o PUDO?"
            textTwo="Ao optar por um modelo de entrega com PUDO, sua empresa ganha eficiência logística, reduz custos e melhora a experiência do cliente."
            text="O modelo logístico PUDO (Pick-Up Drop-Off) permite que consumidores e vendedores usem pontos estratégicos para retirada e devolução de encomendas. Isso reduz custos, otimiza rotas e oferece mais flexibilidade ao cliente."
            banner={banner.src}
            corButtonOne="#ff7f12"
            corButtonThree="#CA620A"
            linkButtonOne="#para-marketplaces"
            linkButtonTwo="https://calendly.com/natielen-campos/ux-group-voce"
            textButtonOne="saiba mais"
            textButtonTwo="agende uma reunião"
          />


          <SecondSection
            title="A melhor solução para sua logística!"
            text="A UX Group transforma sua logística com o PUDO (Pick Up and Drop Off), uma solução ágil, sustentável e eficiente para entregas. Nossa ampla rede de pontos de retirada, estrategicamente distribuída, garante mais conveniência e acessibilidade para seus clientes, reduzindo distâncias e otimizando o processo logístico."
            textTwo="Com o PUDO da UX Group, você otimiza suas rotas, reduz impactos ambientais, melhora a experiência do consumidor e amplia sua capacidade logística com escalabilidade inteligente."
            flowReverse={false}
            corButtonOne="#ff7f12"
            textTwoSemiBold
            image={pudo.src}
          />

          <SecondSection
            title="Mais de 290 Pontos PUDO em Todo o Brasil!"
            text="A UX Group possui atualmente 296 pontos PUDO espalhados pelo Brasil, garantindo praticidade e conveniência para você. Confira a distribuição por estado:"
            textTwo="Estamos sempre em busca de expandir nossa rede. Se tem interesse em se tornar um ponto de coleta ou contratar um PUDO, clique no botão e faça parte da nossa rede de conveniência!"
            textTwoSemiBold
            corButtonOne="#ff7f12"
            flowReverse
            textButton="agendar uma reunião"
            image={mapaPudo.src}
            imagemSobTitulo={boxPudo}
            dimensaoImagem="90%"
          />
          <FluxoPudo />
          <ParaMarketPlacesPudo />
          <ParaLojasFisicasPudo/>
          <JornadaPudo/>
          <section
            style={{ paddingTop: "0px", paddingBottom: "50px" }}
          ></section>
          <ContactForm
            nameForm="FormPudos"
            page="Pudos"
            content={valuesInput}
          />
          <Footer />
        </main>
      </>
    </QueryClientProvider>
  );
}

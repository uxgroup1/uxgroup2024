"use client";
const Footer = dynamic(() => import("@/components/Footer"));
const Cta = dynamic(() => import("@/components/cta"));
const Header = dynamic(() => import("@/components/header"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);

const JumboTron = dynamic(() => import("@/components/produtos/jumbotron"));
import imageOndetah from "@/assets/ondetah/ondetah.png";
import ondetahLogo from "@/assets/logos/ondetah.svg";
import dynamic from "next/dynamic";
import imageOne from "@/assets/ondetah/imagesSections/ondetah-1.png";
import Numbers from "@/components/produtos/numbers";
import Script from "next/script";
import SliderTopics from "@/components/slider";
import ProductInstitutional from "@/components/produtos/institucional";
import IntegrationsOndetah from "@/components/produtos/integracoesOndetah";
import satisfacao from "@/assets/ondetah/imagesSections/pesquisa-de-satisfacao.png";
import informacoes from "@/assets/ondetah/imagesSections/informacao.png";
import sac from "@/assets/ondetah/imagesSections/sac.png";
import analisePreditiva from "@/assets/ondetah/analise-preditiva.png"
const SecondSection = dynamic(
  () => import("@/components/produtos/SecondSection")
);
import sustentavel from "@/assets/ondetah/imagesSections/sustentavel.png";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
    number: "5P.P",
    text: "na performance de entrega.",
  },
  {
    number: "100%",
    text: "dos pedidos com tracking centralizado.",
  },
];

const valuesInput = [
  {
    value: "Melhorar a experiência do cliente durante o processo de compra",
  },
  {
    value: "Reduzir os contatos no SAC",
  },
  {
    value: "Diminuir atrasos e problemas na entrega dos pedidos",
  },
  {
    value: "Antecipar e mitigar riscos operacionais",
  },
  {
    value: "Reduzir a pegada de carbono das operações logísticas",
  },
];

export default function Ondetah() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <main>


        <Script type="text/javascript">
          {`_linkedin_partner_id = "4584641";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
        </Script><Script type="text/javascript">
          {`(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=4584641&fmt=gif" />
        </noscript>


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
        buttonTwo
          textButtonOne="fale com um especialista"
          textButtonTwo="saiba mais"
          linkButtonOne="#formulario"
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
          buttonTwo
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
          link="#formulario"
          corButtonOne="#29265B"
          corButtonTwo="#009580"
          title="Maximize a eficiência logística do seu negócio com nossa análise preditiva."
          text="Controle absoluto sobre todo o ciclo de entrega dos seus pedidos.Transforme a sua visão logística com um sistema que não só prevê cada detalhe do processo de entrega, mas também oferece insights personalizados para o seu negócio."
          image={analisePreditiva.src}
          flowReverse={false}
        />
        <SecondSection
          id="gestao-de-prazos"
          link="#formulario"
          corButtonOne="#29265B"
          corButtonTwo="#009580"
          title="Gestão de Prazos e Ocorrências."
          text="Entendemos a importância de uma gestão de prazos eficiente e de como lidar com ocorrências de maneira proativa pode impactar positivamente sua operação e a experiência do seu cliente."
          textTwo="Com o Ondetah você pode acompanhar de perto o desempenho da sua operação e identificar possíveis distorções entre os prazos prometidos e os prazos reais de entrega. Atue de maneira preventiva, evite contatos no SAC e ainda melhore a satisfação do cliente."
          image={imageOne.src}
          flowReverse={true}
        />


        <SecondSection
          link="#formulario"
          corButtonOne="#29265B"
          corButtonTwo="#009580"
          title="Informação em Tempo Real."
          text="Acompanhe cada etapa do pedido em tempo real. Desde a confirmação até a entrega, atualizações regulares, incluindo notificações em caso de eventos inesperados."
          image={informacoes.src}
          flowReverse={false}
        />
        <SecondSection
          link="#formulario"
          corButtonOne="#29265B"
          corButtonTwo="#009580"
          title="Redução de Contatos no SAC."
          text="Utilize nosso SAC 4.0 com um chatbot disponível 24 horas por dia. Reduza o tempo de espera e resolva questões rapidamente através de aplicativos de mensagens, garantindo uma experiência mais positiva para o cliente e reduzindo custos."
          image={sac.src}
          flowReverse={true}
        />
        <SecondSection
          link="#formulario"
          corButtonOne="#29265B"
          corButtonTwo="#009580"
          title="Entrega Sustentável."
          text="Deixe suas entregas mais ecológicas através da compensação de carbono. Utilizamos tecnologia para calcular e neutralizar as emissões de carbono associadas aos seus pedidos, e fornecemos certificados de compensação para cada compra."
          image={sustentavel.src}
          flowReverse={false}
        />
        <SecondSection
          link="#formulario"
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
        <ContactForm
          nameForm="FormOndetah"
          page="Ondetah"
          content={valuesInput}
        />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}

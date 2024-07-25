// "use client"

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import dynamic from "next/dynamic";
// import Script from "next/script";
// const Header = dynamic(() => import("@/components/header/index"));
// const ContactForm = dynamic(
//   () => import("@/components/institucional/ContactForm")
// );
// const SimplifiqueEcommerce = dynamic(
//   () => import("@/components/produtos/vendas")
// );
// const SliderTopicsVendas = dynamic(
//   () => import("@/components/produtos/vendas/slider/index")
// );
// const JumboTron = dynamic(
//   () => import("@/components/produtos/jumbotron/index")
// );
// const ProductInstitutional = dynamic(
//   () => import("@/components/produtos/institucional/index")
// );
// const Cta = dynamic(() => import("@/components/cta/index"));
// const Footer = dynamic(() => import("@/components/Footer"));
// import Numbers from "@/components/produtos/numbers";
// import SecondSection from "@/components/produtos/SecondSection";

// import banner from "@/assets/fusion/fusionBanner.png";

// export default function Vendas() {

//   const valuesInput = [
//     {
//       value: "Quero montar o meu e-commerce",
//     },
//     {
//       value: "Quero migrar de plataforma",
//     },
//     {
//       value: "Preciso estruturar as minhas vendas digitais",
//     },
//     {
//       value: "Outros",
//     },
//   ];

//   const number = [ 
//     {
//       number: "12+",
//       text: "marketplaces.",
//     },
//     {
//       number: "+700",
//       text: "TMS transportadores.",
//     },
//     {
//       number: "14+",
//       text: "hubs.",
//     },
//     {
//       number: "12+",
//       text: "ERPS",
//     },
//   ];

//   return (
//     <QueryClientProvider client={new QueryClient()}>
//       <main>
//         <Script>
//           {`function gtag_report_conversion(url) {
//             var callback = function () {
//               if (typeof(url) != 'undefined') {
//                 window.location = url;
//               }
//             };
//             gtag('event', 'conversion', {
//                 'send_to': 'AW-11020932578/BocGCOapxoIYEOKrmIcp',
//                 'event_callback': callback
//             });
//             return false;
//           }`}
//         </Script>

//         <Script>
//           {`
//           function gtag_report_conversion(url) {
//             var callback = function () {
//               if (typeof(url) != 'undefined') {
//                 window.location = url;
//               }
//             };
//             gtag('event', 'conversion', {
//                 'send_to': 'AW-11020932578/i8_rCMzPkIUYEOKrmIcp',
//                 'event_callback': callback
//             });
//             return false;
//           }
//           `}
//         </Script>

//         <Script>
//           {`
// function gtag_report_conversion(url) {
//   var callback = function () {
//     if (typeof(url) != 'undefined') {
//       window.location = url;
//     }
//   };
//   gtag('event', 'conversion', {
//       'send_to': 'AW-11020932578/IAM7CLz93bEZEOKrmIcp',
//       'event_callback': callback
//   });
//   return false;
// }`}
//         </Script>

//         <Script
//           type="text/javascript"
//           async
//           src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/139aadf5-b7d4-4ce5-b117-ddb828aef384-loader.js"
//         ></Script>

//         {/* <!-- Hotjar Tracking Code for https://uxgroup.com.br/ --> */}
//         <Script>
//           {` (function(h,o,t,j,a,r){
//         h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//         h._hjSettings={hjid:2580853,hjsv:6};
//         a=o.getElementsByTagName('head')[0];
//         r=o.createElement('script');r.async=1;
//         r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//         a.appendChild(r);
//         })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
//         </Script>

//         {/* <!-- Google Tag Manager --> */}
//         <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//                     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//                     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//                     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//                     })(window,document,'script','dataLayer','GTM-5M78MWM');`}</Script>
//         {/* <!-- End Google Tag Manager --> */}
//         {/* <!-- Google Tag Manager (noscript) --> */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-5M78MWM"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>
//         {/* <!-- End Google Tag Manager (noscript) --> */}
//         <Header />
//         <JumboTron banner="" corButtonOne="#A900D9" linkButtonOne="" textButtonOne="falar com um especialista" textButtonTwo="saiba mais" linkButtonTwo="" title="Transforme suas vendas digitais soluções de vendas completas" text="Seu e-commerce do seu jeito, pronto para maximizar suas vendas e melhorar a experiência do cliente." />
//         <ProductInstitutional textButtonOne="saiba mais" textButtonTwo="fale conosco" linkButtonOne="" linkButtonTwo="" corButtonOne="#A900D9" banner={banner.src} title="Simplifique e potencialize sua operação de e-commerce" text="Uma loja online que ofereça uma excelente experiência ao cliente não só atrai mais visitantes, como também fideliza e aumenta as conversões. Na UX oferecemos soluções completas independente do tamanho do seu negócio, com uma plataforma one stop shop e um hub de integração , nossas soluções são 100% integradas à logística e tecnologia de ponta, garantindo um fluxo perfeito desde o clique até a entrega ao cliente." />
//         <SimplifiqueEcommerce/>
//         <Cta banner={""} title={"Crie uma experiência de compra única de alta qualidade para aumentar a fidelidade dos clientes."}  button={true}/>
//         <SecondSection  title="Operações automatizadas que maximizam resultados" flowReverse={false} corButtonOne="#A900D9" link="" image={banner.src} text="Um hub de integração que conecta soluções de tecnologia e logística às principais plataformas do mercado, otimizando a experiência de compra e melhorando a jornada do pedido. Com tudo automatizado, você pode focar exclusivamente nas estratégias de vendas, sabendo que todas as operações estão funcionando perfeitamente."/>
//         <Numbers
//           cor="#A900D9"
//           title="Garanta redução de custos no seu pós-venda com uma solução completa focada na experiência do cliente."
//           number={number}
//           banner="https://uxsolutions.com.br/wp-content/uploads/2023/07/universo-uxs-2.gif"
//           text=""
//         />
//         <SliderTopicsVendas/>
//         <ContactForm nameForm="connect" content={valuesInput} page="connect" />
//         <Footer />

//       </main>
//     </QueryClientProvider>
//   )
// }
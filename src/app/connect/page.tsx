"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Script from "next/script";
const Header = dynamic(() => import("@/components/header/index"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);
const Footer = dynamic(() => import("@/components/Footer"));

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
                <Header/>
                <ContactForm nameForm="connect" content={valuesInput} page="connect" />
                <Footer/>

            </main>
        </QueryClientProvider>
    )
}
"use client";

const CarroselVertical = dynamic(
  () => import("@/components/institucional/carrouselVerticalMain/index")
);
import image from "../assets/cta/ctaBanner.png";
const Cta = dynamic(() => import("@/components/cta/index"));
const LogisticaComPerformance = dynamic(
  () => import("@/components/institucional/logisticaComPerformance/index")
);
const BannerMain = dynamic(
  () => import("@/components/institucional/bannerMain/index")
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
import { Blog } from "@/components/institucional/blog/index";
const CarroselVerticalMobile = dynamic(
  () => import("@/components/institucional/carrouselVerticalMain/mobile/index")
);
const Header = dynamic(() => import("@/components/header/index"));
const Footer = dynamic(() => import("@/components/Footer/index"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm/index")
);
const EcoSistemaUx = dynamic(() => import("@/components/ecosistemaUx/index"));
import dynamic from "next/dynamic";
import ImageUxMidiaOne from "@/assets/home/UX-na-midia/logistica.png";
import ImageUxMidiaTwo from "@/assets/home/UX-na-midia/tecnologia.png";
import ImageUxMidiaThree from "@/assets/home/UX-na-midia/gestão.png";
import ClientsCases from "@/components/institucional/clients";
import ctaOne from "@/assets/cta/cta-1-home.png";
import ctaTwo from "@/assets/cta/cta-2-home.png";
import imageCarroselVerticalOne from "@/assets/fusion/fusionBanner.png";
import imageCarroselVerticalTwo from "@/assets/trux/tms-transp.png";
import imageCarroselVerticalThree from "@/assets/ondetah/ondetah.png";
import imageCarroselVerticalFour from "@/assets/consultoria/consultoria.png";

const content = [
  {
    index: 0,
    title: "TMS embarcador",
    contentTitle: "TMS embarcador",
    contentText:
      "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    banner: imageCarroselVerticalOne.src,
  },
  {
    index: 1,
    title: "TMS Transportador",
    contentTitle: "TMS Transportador",
    contentText:
      "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    banner: imageCarroselVerticalTwo.src,
  },
  {
    index: 2,
    title: "Plataforma de comunicação",
    contentTitle: "Plataforma de comunicação",
    contentText:
      "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    banner: imageCarroselVerticalThree.src,
  },
  {
    index: 3,
    title: "Consultoria",
    contentTitle: "Consultoria",
    contentText:
      "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    banner: imageCarroselVerticalFour.src,
  },
];

const contentUxMidia = [
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

export default function Home() {
  return (
    <main>
      <Header />
      <BannerMain />
      <EcoSistemaUx />
      <ClientsCases />
      <CarroselVertical
        title="Tecnologia para gestão da logística."
        text="Adapte-se às mudanças do mercado com facilidade. Nossas soluções de tecnologia modulares oferecem flexibilidade, informação e eficiência para a gestão de fretes, gestão de transportes e comunicação das suas vendas digitais. Conheça nossas soluções!"
        content={content}
      />
      <CarroselVerticalMobile
        title="Tecnologia para gestão da logística."
        sub="Adapte-se às mudanças do mercado com facilidade. Nossas soluções de tecnologia modulares oferecem flexibilidade, informação e eficiência para a gestão de fretes, gestão de transportes e comunicação das suas vendas digitais. Conheça nossas soluções!"
        content={content}
      />
      <Cta
        button={true}
        title={
          "Eficiência, Sustentabilidade e Informação: Descubra o futuro da logística com a UX."
        }
        banner={ctaOne.src}
      />
      <LogisticaComPerformance />

      <Cta
        button={true}
        title={
          "Descubra  como podemos transformar sua operação, reduzir custos e impulsionar seus resultados."
        }
        banner={ctaTwo.src}
      />

      <LogisticaSustentavel />
      <UxPartners />
      <Blog />
      <UxMidia colorText="#fff" content={contentUxMidia} />
      <section style={{ paddingTop: "0px", paddingBottom: "30px" }}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}

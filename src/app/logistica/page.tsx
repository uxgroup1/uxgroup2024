"use client";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/header/index"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);
const Footer = dynamic(() => import("@/components/Footer"));
const JumboTron = dynamic(() => import("@/components/produtos/jumbotron"));
const SecondSection = dynamic(
  () => import("@/components/produtos/SecondSection")
);

const CarroselImages = dynamic(
  () => import("@/components/produtos/carrouselVertical")
);
const CarroselImageMobile = dynamic(
  () => import("@/components/produtos/carrouselVertical/mobile")
);
const Cta = dynamic(() => import("@/components/cta"));
import FeaturesComponent from "@/components/produtos/features";
import arrowImage from "@/assets/logistica/arrow/arrowListComponentes.svg";
import itapeviImage from "@/assets/logistica/cdsImages/itapevi.jpg";
import barueriImage from "@/assets/logistica/cdsImages/barueri.jpg";
import itajaiImage from "@/assets/logistica/cdsImages/itajai.jpg";
import anvisaImage from "@/assets/logistica/anvisa.png";
import fulfillmet from "@/assets/logos/fulfillment.svg";
import ProductInstitutional from "@/components/produtos/institucional";

const CarroselImagesContent = [
  {
    title: "CD Itapevi",
    image: itapeviImage.src,
  },
  {
    title: "CD Barueri",
    image: barueriImage.src,
  },
  {
    title: "CD Itajaí",
    image: itajaiImage.src,
  },
];

const contentFeatures = [
  {
    title: "Experiência comprovada em fulfillment e logística integrada.",
    icons: arrowImage,
  },
  {
    title:
      "Personalização de serviços para atender às necessidades exclusivas do seu negócio.",
    icons: arrowImage,
  },
  {
    title: "Implementação de WMS para uma gestão eficiente do estoque.",
    icons: arrowImage,
  },
  {
    title: "Rede de distribuição abrangente com três CDs próprios.",
    icons: arrowImage,
  },
  {
    title:
      "Equipe dedicada e suporte personalizado para garantir a satisfação do cliente.",
    icons: arrowImage,
  },
];

export default function Logistica() {
  return (
    <main>
      <Header />
      <JumboTron
        textButtonOne="fale com um especialista"
        textButtonTwo="saiba mais"
        linkButtonOne=""
        linkButtonTwo=""
        corButtonOne="#fbc705"
        corButtonThree="#D3A707"
        logo={fulfillmet}
        title="Fulfillment inteligente que garante performance e impulsionam suas vendas"
        text="Aumente suas vendas, reduza prazo de entrega e custos de frete e fidelize seus clientes com nossa solução de fulfillment escalável e personalizada."
        banner=""
      />
      <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
      <ProductInstitutional
        title="Controle, Armazenagem e Entrega Eficientes"
        text="Todo o processo logístico desde o momento da venda do pedido até a expedição. Combinando tecnologia avançada e expertise em logística, o fulfillment é responsável por garantir um controle de estoque eficiente, uma armazenagem segura e um processo de separação eficaz que permite que seus clientes recebam seus produtos com precisão, agilidade e segurança."
        banner=""
        corButtonOne="#FBC709"
        corButtonThree="#D3A707"
        linkButtonOne=""
        linkButtonTwo=""
        textButtonOne="saiba mais"
        textButtonTwo="falar com consultor"
      />
      <SecondSection
        corButtonOne="#fbc705"
        corButtonThree="#D3A707"
        flowReverse={false}
        title="Fulfillment Personalizado"
        text="Nosso foco é fornecer soluções de fulfillment sob medida para atender às demandas específicas do seu negócio. Desde o armazenamento até a entrega, cuidamos de cada etapa do processo para garantir uma experiência de compra excepcional para seus clientes."
        image="."
      />
      <SecondSection
        corButtonOne="#fbc705"
        corButtonThree="#D3A707"
        flowReverse={true}
        image="."
        title="Implementação de WMS"
        text="Com a nossa plataforma de gerenciamento de armazém (WMS), oferecemos uma gestão eficiente e transparente do estoque. Nosso sistema avançado permite o monitoramento em tempo real, controle de inventário preciso e otimização dos processos de picking e packing."
      />
      <CarroselImages
        title="Infraestrutura de Armazenamento"
        subtitle="Operamos em 3 Centros de Distribuição próprios, que somam mais de 30.000m2, estrategicamente localizados, garantindo uma ampla cobertura geográfica e reduzindo os prazos de entrega. Nossos CDs são equipados com tecnologia de ponta e segurança de alto nível para proteger seus produtos."
        content={CarroselImagesContent}
      />
      <CarroselImageMobile content={CarroselImagesContent} />
      <Cta
        button={false}
        title={"Certificação ANVISA"}
        text={
          "Nosso CD de Barueri conta com a certificação da ANVISA, um espaço dentro de todos os parâmetros de segurança garantido pela Agência Nacional de Vigilância Sanitária, que nos permite receber e operar: cosméticos, perfumes, produtos de higiene, embalagem para alimentos e alimentos, tudo dentro dos padrões de saúde e segurança que o seu negócio precisa."
        }
        banner={anvisaImage.src}
      />
      <FeaturesComponent
        rowReverse
        titleSection="Benefícios de escolher a UX"
        content={contentFeatures}
        banner="https://uxgroup.com.br/_next/static/media/Desktop-sessao-fluxo-PLANEJAMENTO.f88261ee.png"
      />
      <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}

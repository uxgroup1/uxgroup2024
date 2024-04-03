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

const Cta = dynamic(() => import("@/components/cta"));
import itapeviImage from "@/assets/logistica/cdsImages/itapevi.png";
import barueriImage from "@/assets/logistica/cdsImages/barueri.png";
import itajaiImage from "@/assets/logistica/cdsImages/itajai.png";
import anvisaImage from "@/assets/logistica/anvisa.png";
import fulfillmet from "@/assets/logos/fulfillment.svg";
import ProductInstitutional from "@/components/produtos/institucional";
import CarroselVertical from "@/components/institucional/carrouselVerticalMain";
import CarroselVerticalMobile from "@/components/institucional/carrouselVerticalMain/mobile";
import logoAmazon from "@/assets/logistica/logo-amzn.png";
import wmsImage from "@/assets/logistica/wms.png";
import ThreeTopics from "@/components/produtos/threeTopics";
import imageOne from "@/assets/logistica/one.svg";
import imageTwo from "@/assets/logistica/two.svg";
import imageThree from "@/assets/logistica/three.svg";
import imageFour from "@/assets/logistica/four.svg";
import banner from "@/assets/logistica/ffBanner.png";
import logoAnvisa from "@/assets/logistica/anvisa-logo.png"
import bannerInstitucional from "@/assets/logistica/img-ff.png"

const content = [
  {
    index: 0,
    title: "CD Itapevi",
    contentTitle: "CD Itapevi",
    contentText:
      "Operamos em 3 Centros de Distribuição próprios, que somam mais de 30.000m2, estrategicamente localizados, garantindo uma ampla cobertura geográfica e reduzindo os prazos de entrega.",
    banner: itapeviImage.src,
  },
  {
    index: 1,
    title: "CD Barueri",
    contentTitle: "CD Barueri",
    contentText:
      "Operamos em 3 Centros de Distribuição próprios, que somam mais de 30.000m2, estrategicamente localizados, garantindo uma ampla cobertura geográfica e reduzindo os prazos de entrega.",
    banner: barueriImage.src,
  },
  {
    index: 2,
    title: "CD Itajaí",
    contentTitle: "CD Barueri",
    contentText:
      "Operamos em 3 Centros de Distribuição próprios, que somam mais de 30.000m2, estrategicamente localizados, garantindo uma ampla cobertura geográfica e reduzindo os prazos de entrega.",
    banner: itajaiImage.src,
  },
];

const contentTopics = [
  {
    icon: imageOne,
    title: `Experiência comprovada em fulfillment e logística integrada.`,
    text: "",
  },
  {
    icon: imageTwo,
    title:
      "Personalização de serviços para atender às necessidades do seu negócio.",
    text: "",
  },
  {
    icon: imageThree,
    title: "Implementação de WMS para uma gestão eficiente do estoque.",
    text: "",
  },
  {
    icon: imageFour,
    title:
      "Equipe dedicada e suporte personalizado para garantir a satisfação do cliente.",
    text: "",
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
        title="Fulfillment inteligente que garante performance e impulsionam suas vendas."
        text="Aumente suas vendas, reduza prazo de entrega e custos de frete e fidelize seus clientes com nossa solução de fulfillment escalável e personalizada."
        banner={banner.src}
      />
      <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
      <ProductInstitutional
        title="Controle, Armazenagem e Entrega Eficientes."
        text="Todo o processo logístico desde o momento da venda do pedido até a expedição. Combinando tecnologia avançada e expertise em logística, o fulfillment é responsável por garantir um controle de estoque eficiente, uma armazenagem segura e um processo de separação eficaz que permite que seus clientes recebam seus produtos com precisão, agilidade e segurança."
        banner=""
        corButtonOne="#FBC709"
        corButtonThree="#D3A707"
        linkButtonOne=""
        linkButtonTwo=""
        textButtonOne="saiba mais"
        textButtonTwo="falar com consultor"
      />
      <ThreeTopics
        title="Benefícios de escolher a UX."
        text=""
        content={contentTopics}
      />
      <SecondSection
        corButtonOne="#fbc705"
        corButtonThree="#D3A707"
        flowReverse={false}
        title="Fulfillment Personalizado."
        text="Nosso foco é fornecer soluções de fulfillment sob medida para atender às demandas específicas do seu negócio. Desde o armazenamento até a entrega, cuidamos de cada etapa do processo para garantir uma experiência de compra excepcional para seus clientes."
        image={bannerInstitucional.src}
      />
      <Cta
        button={false}
        title={"Certificação ANVISA."}
        text={
          "Nosso CD de Barueri conta com a certificação da ANVISA, um espaço dentro de todos os parâmetros de segurança garantido pela Agência Nacional de Vigilância Sanitária, que nos permite receber e operar: cosméticos, perfumes, produtos de higiene, embalagem para alimentos e alimentos, tudo dentro dos padrões de saúde e segurança que o seu negócio precisa."
        }
        logo={logoAnvisa.src}
        banner={anvisaImage.src}
      />
      <SecondSection
        corButtonOne="#fbc705"
        corButtonThree="#D3A707"
        flowReverse={true}
        image={wmsImage.src}
        title="Implementação de WMS."
        text="Com a nossa plataforma de gerenciamento de armazém (WMS), oferecemos uma gestão eficiente e transparente do estoque. Nosso sistema avançado permite o monitoramento em tempo real, controle de inventário preciso e otimização dos processos de picking e packing."
      />
      <CarroselVertical
        title="Infraestrutura de Armazenamento."
        text="Operamos em 3 Centros de Distribuição próprios, que somam mais de 30.000m2, estrategicamente localizados, garantindo uma ampla cobertura geográfica e reduzindo os prazos de entrega. Nossos CDs são equipados com tecnologia de ponta e segurança de alto nível para proteger seus produtos."
        content={content}
      />
      <CarroselVerticalMobile
        title="Infraestrutura de Armazenamento."
        sub="Operamos em 3 Centros de Distribuição próprios, que somam mais de 30.000m2, estrategicamente localizados, garantindo uma ampla cobertura geográfica e reduzindo os prazos de entrega. Nossos CDs são equipados com tecnologia de ponta e segurança de alto nível para proteger seus produtos."
        content={content}
      />

      <Cta
        button={false}
        title={"CD homologado Amazon."}
        text={
          "Nosso CD de Barueri conta com a certificação da ANVISA, um espaço dentro de todos os parâmetros de segurança garantido pela Agência Nacional de Vigilância Sanitária, que nos permite receber e operar: cosméticos, perfumes, produtos de higiene, embalagem para alimentos e alimentos, tudo dentro dos padrões de saúde e segurança que o seu negócio precisa."
        }
        logo={logoAmazon.src}
        banner={anvisaImage.src}
      />
      <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}

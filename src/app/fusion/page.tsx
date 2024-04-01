"use client";

import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"));
const Header = dynamic(() => import("@/components/header"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);
const FeaturesComponent = dynamic(
  () => import("@/components/produtos/features")
);
const JumboTron = dynamic(() => import("@/components/produtos/jumbotron"));
import arrowImage from "@/assets/fusion/arrow/arrowListComponentesPudo.svg";
import fusionLogo from "@/assets/logos/fusion.svg";
import Cta from "@/components/cta";

const contentFeatures = [
  {
    title: "Envio de ocorrências simultâneo para vários sistemas.",
    icons: arrowImage,
  },
  {
    title: "Integração via API com os transportadores.",
    icons: arrowImage,
  },
  {
    title: "Ajuste de/para de ocorrências.",
    icons: arrowImage,
  },
  {
    title: "Reprocessamento massivo de ocorrências.",
    icons: arrowImage,
  },
  {
    title: "Garante acurácia entre Rastreamento + TMS + ERP.",
    icons: arrowImage,
  },
  {
    title:
      "Cobrança para o transportador em caso de evidência de falha de comunicação.",
    icons: arrowImage,
  },
];
const contentFeaturesTwo = [
  {
    title: "Integração com marketplaces ilimitadas.",
    icons: arrowImage,
  },
  {
    title: "Autonomia na manutenção de tabelas.",
    icons: arrowImage,
  },
  {
    title: "Cotação de multi CDs.",
    icons: arrowImage,
  },
  {
    title: "Contingência dos Correios.",
    icons: arrowImage,
  },
  {
    title:
      "Atende operações: ship from store, click and collect e dropshipping.",
    icons: arrowImage,
  },
  {
    title: "Algoritmo de redução de frete para embalagem única.",
    icons: arrowImage,
  },
];
const contentFeaturesThree = [
  {
    title:
      "Todas as informações disponibilizadas de forma automática para emissão de CTe    .",
    icons: arrowImage,
  },
  {
    title:
      "Autonomia na alteração de transportador pré movimentação da carga    .",
    icons: arrowImage,
  },
  {
    title: "Reenvio de Notifs direto na plataforma    .",
    icons: arrowImage,
  },
  {
    title:
      "Personalização das informações do Notifis de acordo com o transportador/embarcador.",
    icons: arrowImage,
  },
];
const contentFeaturesFour = [
  {
    title: "Conciliação de todos os custos do CTe.",
    icons: arrowImage,
  },
  {
    title: "Tolerância personalizada de divergência de valores (% ou $).",
    icons: arrowImage,
  },
  {
    title: "Geração de faturas manuais ou automáticas.",
    icons: arrowImage,
  },
  {
    title: "Conciliação de fretes B2B ou B2C.",
    icons: arrowImage,
  },
  {
    title: "Leitura de arquivos transportador via XML do CTe.",
    icons: arrowImage,
  },
  {
    title: "Relatório completo de entregas conciliadas.",
    icons: arrowImage,
  },
];
const contentFeaturesFive = [
  {
    title: "Centro de novas receitas com a gestão de fretes para os sellers.",
    icons: arrowImage,
  },
  {
    title:
      "Controle absoluto da performance de seus transportadores e sellers.",
    icons: arrowImage,
  },
  {
    title: "Visão online da despesa de frete dos pedidos aprovados.",
    icons: arrowImage,
  },
  {
    title: "Conciliação de frete com Correios.",
    icons: arrowImage,
  },
  {
    title: "Integração com multi transportadores.",
    icons: arrowImage,
  },
  {
    title: "Envio automático de etiqueta e etiquetas massivas.",
    icons: arrowImage,
  },
  {
    title: "Etiquetas integradas diretamente ao seu ERP.",
    icons: arrowImage,
  },
];
const contentFeaturesSix = [
  {
    title:
      "Configuração de tabelas de frete de acordo com o hub de fretes de cada vendedor.",
    icons: arrowImage,
  },
  {
    title: "Personalização da tabela de contingência.",
    icons: arrowImage,
  },
  {
    title: "Definição de regra massiva para os sellers de preços e prazos.",
    icons: arrowImage,
  },
  {
    title: "Criação de campanhas personalizadas de frete.",
    icons: arrowImage,
  },
  {
    title:
      "Atende operações: ship from store, click and collect e dropshipping.",
    icons: arrowImage,
  },
  {
    title: "Algoritmo de redução de frete para embalagem única.",
    icons: arrowImage,
  },
];

export default function Fusion() {
  return (
    <>
      <main>
        <Header />
        <JumboTron
          linkButtonOne="#"
          linkButtonTwo="#"
          textButtonOne="Para E-commerce"
          textButtonTwo="Para Marketplaces"
          corButtonOne="#28265b"
          corButtonThree="#1F1D47"
          logo={fusionLogo}
          title="Satisfação dos clientes do seu e-commerce com uma gestão de fretes 100% integrada."
          banner=""
          text="Seja no mundo do e-commerce ou em marketplaces, o frete é sempre um desafio, o que torna a tecnologia uma peça fundamental para o sucesso das vendas digitais."
        />
        <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
        <FeaturesComponent
          titleSection="Ofereça as melhores opções de frete"
          text="Tenha uma solução inteligente de cálculo de frete com diversas opções precisas e ágeis de prazo e preços e evite os constantes abandonos de carrinho."
          banner=""
          content={contentFeaturesTwo}
          rowReverse
        />
        <FeaturesComponent
          titleSection="Reduza os contatos no SAC com Rastreamento"
          text="Ofereça mais visibilidade das etapas e mantenha seus clientes informados sobre o seu tracking com uma tecnologia de rastreamento completa."
          banner=""
          content={contentFeatures}
          rowReverse={false}
        />
        <FeaturesComponent
          titleSection="Agilize a entrega com automatização na Expedição"
          text="Comunicação 100% integrada via API com o transportador para aviso de coleta de pedidos."
          banner=""
          content={contentFeaturesThree}
          rowReverse={true}
        />
        <FeaturesComponent
          titleSection="Pague somente o acordado com os transportadores"
          text="Tenha a certeza de que está pagando o correto pelos fretes do seu negócio,, utilize uma solução de conciliação de frete."
          banner=""
          content={contentFeaturesFour}
          rowReverse={false}
        />
        <Cta
          button
          banner={""}
          title={"Lorem"}
          text={"lorem ispum njkb"}
          corButtonOne="#FFF"
        />
        <FeaturesComponent
          titleSection="Fusion Envios          "
          text="Controle com inteligência de todas as etapas do frete para o seu negócio e sellers. Desde o cálculo de frete , impressão de etiquetas, planejamento de malha, rastreamento e conciliação de fretes, tudo 100% integrado à sua plataforma."
          banner=""
          content={contentFeaturesFive}
          rowReverse={true}
        />
        <FeaturesComponent
          titleSection="Expanda suas opções de frete          "
          text="Cálculo de frete do seu marketplace totalmente integrado aos sellers. Através do gateway de fretes ofereça a mesma possibilidade de um cálculo preciso, resposta rápida e redução de custos através de tabelas parametrizáveis."
          banner=""
          content={contentFeaturesSix}
          rowReverse={false}
        />
        <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}

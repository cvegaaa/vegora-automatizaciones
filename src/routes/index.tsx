import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Hero, TechStackBar } from "@/components/vegora/Hero";
import { CatalogSection } from "@/components/vegora/Catalog";
import { RoiCalculatorSection } from "@/components/vegora/Calculator";
import {
  ClosingSection,
  Footer,
  ScheduleModal,
  SocialProofSection,
  StepsSection,
} from "@/components/vegora/Sections";
import { FAQS, TECH_STACK } from "@/data/vegora";

// Título optimizado (< 60 caracteres) con palabra clave principal al inicio
const title = "Vegora | Automatización de Procesos con IA para Empresas";

// Descripción enfocada en dolor, solución, plazo y llamado a la acción (< 155 caracteres)
const description =
  "Automatiza procesos con Inteligencia Artificial: WhatsApp, ventas, facturas y más. Implementación en 3-10 días en Colombia y LatAm. Cotiza por WhatsApp.";

// URL de producción
const siteUrl = "https://vegora.tech";
// Imagen de marca usada para logo estructurado y previsualizaciones en redes.
// TODO: reemplazar por un banner dedicado de 1200x630px para una previsualización social óptima.
const ogImage = "https://i.ibb.co/ym5dLMn4/Chat-GPT-Image-31-jul-2026-10-43-40-p-m.png";

// Datos estructurados Schema.org para servicios B2B y organización
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Vegora Automatizaciones",
      url: siteUrl,
      logo: ogImage,
      image: ogImage,
      description:
        "Especialistas en automatización de procesos empresariales con IA e integraciones sin código/bajo código.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CO",
      },
      areaServed: ["CO", "Latinoamérica"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Vegora Automatizaciones",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "es-CO",
    },
    {
      "@type": "Service",
      name: "Implementación de Automatizaciones con Inteligencia Artificial",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      serviceType: "Automatización de procesos comerciales, contables y atención por IA",
      areaServed: "Latinoamérica",
      description: description,
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // SEO Básico
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "automatización de procesos con IA, automatización de procesos Colombia, agencia de automatización empresarial, agente de whatsapp con IA, automatización de ventas, automatización de facturas, n8n Colombia, make, openai para negocios, consultoría de automatización, chatbot IA para empresas",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: "Vegora Automatizaciones" },

      // Open Graph (Facebook, LinkedIn, WhatsApp)
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vegora Automatizaciones" },
      { property: "og:locale", content: "es_CO" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: "Vegora - Automatización de Procesos con IA" },

      // Twitter Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      // Canonical URL para prevenir problemas de contenido duplicado
      { rel: "canonical", href: siteUrl },
    ],
    scripts: [
      // Inyección del Schema JSON-LD para Google Rich Snippets
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLdSchema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [schedule, setSchedule] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero onSchedule={() => setSchedule(true)} />
        <TechStackBar items={TECH_STACK} />
        <CatalogSection />
        <RoiCalculatorSection />
        <StepsSection />
        <SocialProofSection />
        <ClosingSection onSchedule={() => setSchedule(true)} />
      </main>
      <Footer />
      <ScheduleModal open={schedule} onClose={() => setSchedule(false)} />
    </div>
  );
}
import BulletpointTitle from "@/components/bulletpoints/BulletpointTitle";
import Accordion from "@/components/accordion/Accordion";
import PurchaseForm from "@/components/forms/PurchaseForm";
import OfferCard from "@/components/cards/OfferCard";
import { GlobeIcon } from "@phosphor-icons/react/dist/ssr";

const offers = {
  "self-hosted": {
    title: "Self-hosted",
    text: "Fuld kontrol på egne servere",
    price: "Fra 12.345 DKK",
    label1: "Licens til Argilla-platformen",
    label2: "Installationsvejledning og onboarding",
    label3: "Adgang til opdateringer og nye versioner",
    label4: "Support via mail og telefon",
  },
  "cloud-saas": {
    title: "Cloud SaaS",
    text: "Argilla driftet og vedligeholdt fra vores eget datacenter. I fokuserer på forretningen, vi tager os af resten.",
    price: "Fra 12.345 DKK",
    label1: "Fuldt driftet og overvåget miljø",
    label2: "Automatiske opdateringer og backup",
    label3: "Skaleres efter jeres behov",
    label4: "Dedikeret support og SLA-aftale",
  },
  "application-management": {
    title: "Application Management",
    text: "Vi installerer, drifter og vedligeholder Argilla direkte på jeres egne private servere. I beholder dataejerskabet, vi tager driftsansvaret.",
    price: "Fra 12.345 DKK",
    label1: "Hosting på kundens egen infrastruktur",
    label2: "Løbende vedligehold og opdateringer",
    label3: "Overvågning og proaktiv fejlhåndtering",
    label4: "Fuld compliance med interne sikkerhedspolitikker",
  },
};

export const dynamic = "force-dynamic";

export default async function Koeb({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const selectedType = resolvedSearchParams?.type;
  const selectedOffer = offers[selectedType] || offers["self-hosted"];

  return (
    <main>
      <h1 className="text-primary mt-20 text-center font-serif text-5xl">
        Køb
      </h1>
      <div className="mx-mobile-inline grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-4">
        <div className="flex justify-center md:sticky md:top-20 md:order-2 md:max-w-md md:self-start md:justify-self-end">
          <OfferCard
            themeVariant="primary"
            initSize="fit"
            iconChild={<GlobeIcon />}
            cardTitle={selectedOffer.title}
            cardText={selectedOffer.text}
            cardPrice={selectedOffer.price}
            cardFeaturesTitle="Hvad er inkluderet:"
            bulletChild={[
              { label: selectedOffer.label1 },
              { label: selectedOffer.label2 },
              { label: selectedOffer.label3 },
              { label: selectedOffer.label4 },
            ]}
          />
        </div>
        <div>
          <h2 className="text-primary mb-4 font-serif text-4xl font-bold">
            Vi guider dig hele vejen
          </h2>
          <p className="text-dark mb-6 max-w-prose font-sans">
            Når du sender din forespørgsel, starter vi en dialog ikke bare en
            bestilling. Vi hjælper dig med at afklare mulighederne og finder
            sammen den løsning, der giver bedst mening for dig.
          </p>
          <p className="text-dark max-w-prose font-sans">
            Alle virksomheder arbejder forskelligt. Derfor starter vi med at
            forstå dine behov, så vi kan sikre, at platformen og opsætningen
            passer til netop din organisation.
          </p>
          <BulletpointTitle
            title="Send forspørgsel"
            bulletNumber="01"
            bulletClass="mt-10"
          >
            Udfyld formularen med en kort beskrivelse af udfordringen, antal
            brugere og eventuelle integrationsønsker. Vi svarer typisk inden for
            2 arbejdsdage med et forslag til opstartsmøde.
          </BulletpointTitle>
          <BulletpointTitle
            title="Opstartsmøde og tilbud"
            bulletNumber="02"
            bulletClass="mt-10"
          >
            På mødet går vi i dybden med jeres behov, demonstrerer relevante
            moduler og udarbejder et skræddersyet tilbud med tidsplan og
            prisoverslag. Her afstemmer vi også succesmål og ansvar.
          </BulletpointTitle>
          <BulletpointTitle
            title="Implementering & onboarding"
            bulletNumber="03"
            bulletClass="mt-10 mb-20"
          >
            Ved accept igangsætter vi projektet efter aftalt plan: opsætning,
            integration, test, træning og go-live. Efter idriftsættelse tilbyder
            vi opfølgningsmøder, dokumentation og support for at sikre stabil
            drift og løbende optimering.
          </BulletpointTitle>
          <Accordion
            title="Politikker & dokumentation"
            description="Her finder du vores vigtigste juridiske dokumenter og politikker. Vi gennemgår og opdaterer dem løbende, så de afspejler gældende lovgivning, relevante sikkerhedsstandarder og udviklingen af vores platform."
            hasCheckboxes={true}
            items={[
              {
                id: 1,
                title: "Brugsvilkår",
                slides: [
                  {
                    content:
                      "Vores brugsvilkår beskriver de grundlæggende regler og betingelser for brugen af vores platform. De dækker alt fra brugerrettigheder og ansvar til begrænsninger og ophavsret, og sikrer en klar forståelse mellem os og vores kunder.",
                  },
                ],
              },
              {
                id: 2,
                title: "Privatlivspolitik",
                slides: [
                  {
                    content:
                      "Vi respekterer vores brugeres privatliv og er forpligtet til at beskytte deres personlige oplysninger. Vores privatlivspolitik beskriver, hvordan vi indsamler, bruger og beskytter jeres data.",
                  },
                ],
              },
              {
                id: 3,
                title: "Databehandleraftale",
                slides: [
                  {
                    content:
                      "Vores databehandleraftale sikrer, at vi håndterer jeres data i overensstemmelse med gældende databeskyttelseslovgivning. Den beskriver vores forpligtelser som databehandler og jeres rettigheder som dataansvarlig.",
                  },
                  {
                    content:
                      "Vi tilbyder fleksible hostingmuligheder, herunder on-premises og cloud-løsninger, så I kan vælge den model der bedst opfylder jeres sikkerheds- og compliance-krav.",
                  },
                ],
              },
              {
                id: 4,
                title: "Sikkerhed & Compliance",
                slides: [
                  {
                    content:
                      "Sikkerhed og compliance er en topprioritet for os. Vores politikker beskriver de sikkerhedsforanstaltninger, vi har implementeret for at beskytte jeres data og sikre overholdelse af gældende regler og standarder.",
                  },
                  {
                    content:
                      "Vi tilbyder også forskellige hostingmuligheder, herunder on-premises og cloud-løsninger, så I kan vælge den model der bedst opfylder jeres sikkerheds- og compliance-krav.",
                  },
                  {
                    content:
                      "Vores platform er designet til at være fleksibel og kan tilpasses jeres specifikke sikkerheds- og compliance-behov, uanset om I har brug for on-premises hosting, cloud-løsninger eller en hybrid tilgang.",
                  },
                ],
              },
              {
                id: 5,
                title: "Cookiepolitik",
                slides: [
                  {
                    content:
                      "Vores privatlivspolitik beskriver, hvilke oplysninger vi indsamler, hvorfor vi gør det, og hvordan vi beskytter dem. Vi behandler persondata ansvarligt, sikkert og i overensstemmelse med gældende databeskyttelseslovgivning.",
                  },
                ],
              },
            ]}
          />
          <div className="mt-20">
            <PurchaseForm />
          </div>
        </div>
      </div>
    </main>
  );
}

import SectionElem from "@/components/section-elem/SectionElem";
import OfferCard from "@/components/cards/OfferCard";
import { GlobeIcon } from "@phosphor-icons/react/dist/ssr";
import ImageAndText from "@/components/blockElements/ImageAndText";
import IconCard from "@/components/cards/IconCard";
import Accordion from "@/components/accordion/Accordion";
import ContactForm from "@/components/forms/ContactForm";

export default function Ydelser() {
  return (
    <main>
      <SectionElem
        sectionHeading="Vores ydelser"
        sectionBodyText="Argilla leveres på den måde der passer bedst til jeres organisation. Uanset om I ønsker fuld kontrol over egen infrastruktur, en driftet cloud-løsning eller noget midt imellem, sp vi har en model der passer."
        centeredVariant={true}
        elemStyle="mt-20"
      />
      <div className="px-mobile-inline grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-40">
        <OfferCard
          themeVariant="primary"
          initSize="full"
          iconChild={<GlobeIcon />}
          cardTitle="Self-hosted"
          cardText="Fuld kontrol på egne servere"
          cardPrice="Fra 12.345 DKK"
          cardFeaturesTitle="Hvad er inkluderet:"
          bulletChild={[
            { label: "Licens til Argilla-platformen" },
            { label: "Installationsvejledning og onboarding" },
            { label: "Adgang til opdateringer og nye versioner" },
            { label: "Support via mail og telefon" },
          ]}
          btnChild={{
            type: "LinkBtn",
            label: "Kom i gang",
            props: {
              btnLink: "/koeb?type=self-hosted",
              initSize: "medium",
            },
          }}
        />
        <OfferCard
          themeVariant="primary"
          initSize="full"
          iconChild={<GlobeIcon />}
          cardTitle="Cloud SaaS"
          cardText="Argilla driftet og vedligeholdt fra vores eget datacenter. I fokuserer på forretningen, vi tager os af resten."
          cardPrice="Fra 12.345 DKK"
          cardFeaturesTitle="Hvad er inkluderet:"
          bulletChild={[
            { label: "Fuldt driftet og overvåget miljø" },
            { label: "Automatiske opdateringer og backup" },
            { label: "Skaleres efter jeres behov" },
            { label: "Dedikeret support og SLA-aftale" },
          ]}
          btnChild={{
            type: "LinkBtn",
            label: "Kom i gang",
            props: {
              btnLink: "/koeb?type=cloud-saas",
              initSize: "medium",
            },
          }}
        />
        <OfferCard
          themeVariant="primary"
          initSize="full"
          iconChild={<GlobeIcon />}
          cardTitle="Application Management"
          cardText="Vi installerer, drifter og vedligeholder Argilla direkte på jeres egne private servere. I beholder dataejerskabet, vi tager driftsansvaret."
          cardPrice="Fra 12.345 DKK"
          cardFeaturesTitle="Hvad er inkluderet:"
          bulletChild={[
            { label: "Hosting på kundens egen infrastruktur" },
            { label: "Løbende vedligehold og opdateringer" },
            { label: "Overvågning og proaktiv fejlhåndtering" },
            { label: "Fuld compliance med interne sikkerhedspolitikker" },
          ]}
          btnChild={{
            type: "LinkBtn",
            label: "Kom i gang",
            props: {
              btnLink: "/koeb?type=application-management",
              initSize: "medium",
            },
          }}
        />
      </div>
      <ImageAndText
        imageSrc="/images/team2.webp"
        alt="Et billede af vores team"
        title="Usikker på hvilken model der passer jer?"
        description="Valget af leveringsmodel afhænger af mange faktorer. Fra interne sikkerhedskrav og infrastruktur til ressourcer og skaleringsplaner. Vi hjælper jer gerne med at finde den løsning der giver mest mening for netop jeres organisation. Kontakt os for en uforpligtende snak, så finder vi ud af det sammen."
        reverseOrder
      />
      <div className="bg-dark px-mobile-inline col-span-full py-20">
        <SectionElem
          sectionHeading="Færdige moduler"
          sectionBodyText="Argilla leveres med en samling færdigbyggede systemmoduler der dækker de mest almindelige forretningsbehov. Brug dem som udgangspunkt og tilpas dem præcis til den måde jeres organisation arbejder på."
          centeredVariant={true}
          themeVariant="tertiary"
        >
          <div className="grid max-w-360 grid-cols-1 gap-20 md:grid-cols-2 md:gap-30 lg:grid-cols-3">
            <IconCard
              themeVariant="secondary"
              initSize="fit"
              iconChild={<GlobeIcon />}
              cardTitle="Lagerstyring"
              cardText="Et komplet modul til håndtering af varebeholdning, lokationer og bevægelser. Konfigurérbart til jeres lagerstruktur og processer."
              tagChild={[{ label: "Produktion" }, { label: "Logistik" }]}
              btnChild={{
                type: "LinkBtn",
                label: "Kontakt os",
                props: {
                  btnLink: "/kontakt",
                  initSize: "medium",
                },
              }}
            />
            <IconCard
              themeVariant="secondary"
              initSize="fit"
              iconChild={<GlobeIcon />}
              cardTitle="Ordrehåndtering"
              cardText="Fra ordremodtagelse til levering i ét samlet flow. Understøtter komplekse prisstrukturer, kundeaftaler og automatiske statusopdateringer."
              tagChild={[{ label: "Handel" }, { label: "Finans" }]}
              btnChild={{
                type: "LinkBtn",
                label: "Kontakt os",
                props: {
                  btnLink: "/kontakt",
                  initSize: "medium",
                },
              }}
            />
            <IconCard
              themeVariant="secondary"
              initSize="fit"
              iconChild={<GlobeIcon />}
              cardTitle="Tilbuds- og kontraktstyring"
              cardText="Styr hele tilbudsprocessen med godkendelsestrin, versionshistorik og automatisk kontraktgenerering tilpasset jeres salgsflow."
              tagChild={[{ label: "Salg" }, { label: "Engineering" }]}
              btnChild={{
                type: "LinkBtn",
                label: "Kontakt os",
                props: {
                  btnLink: "/kontakt",
                  initSize: "medium",
                },
              }}
            />
            <IconCard
              themeVariant="secondary"
              initSize="fit"
              iconChild={<GlobeIcon />}
              cardTitle="HR & medarbejderstyring"
              cardText="Centraliseret overblik over medarbejderdata, onboarding-flows, orlov og kompetencer — med rolleinddelt adgang til følsomme oplysninger."
              tagChild={[{ label: "HR" }, { label: "Offentlig" }]}
              btnChild={{
                type: "LinkBtn",
                label: "Kontakt os",
                props: {
                  btnLink: "/kontakt",
                  initSize: "medium",
                },
              }}
            />
            <IconCard
              themeVariant="secondary"
              initSize="fit"
              iconChild={<GlobeIcon />}
              cardTitle="Servicedesk & opgavestyring"
              cardText="Modtag, prioriter og tildel opgaver på tværs af teams. Inkluderer SLA-overvågning, eskaleringsregler og rapportering."
              tagChild={[{ label: "Service" }, { label: "IT" }]}
              btnChild={{
                type: "LinkBtn",
                label: "Kontakt os",
                props: {
                  btnLink: "/kontakt",
                  initSize: "medium",
                },
              }}
            />
            <IconCard
              themeVariant="secondary"
              initSize="fit"
              iconChild={<GlobeIcon />}
              cardTitle="Compliance & dokumentstyring"
              cardText="Håndter regulatorisk dokumentation med versionsstyring, godkendelsesworkflows og automatisk audit trail, klar til revision."
              tagChild={[{ label: "Life Science" }, { label: "Finans" }]}
              btnChild={{
                type: "LinkBtn",
                label: "Kontakt os",
                props: {
                  btnLink: "/kontakt",
                  initSize: "medium",
                },
              }}
            />
            <IconCard
              themeVariant="secondary"
              initSize="fit"
              iconChild={<GlobeIcon />}
              cardTitle="Projektstyring"
              cardText="Planlæg, følg og rapporter på projekter med milepæle, ressourcetildeling og budgetopfølgning i ét integreret modul."
              tagChild={[
                { label: "Engineering" },
                { label: "Konsulentvirksomhed" },
              ]}
              btnChild={{
                type: "LinkBtn",
                label: "Kontakt os",
                props: {
                  btnLink: "/kontakt",
                  initSize: "medium",
                },
              }}
            />
            <IconCard
              themeVariant="secondary"
              initSize="fit"
              iconChild={<GlobeIcon />}
              cardTitle="Kvalitetsstyring (QA)"
              cardText="Registrer afvigelser, igangsæt korrigerende handlinger og dokumenter kvalitetsprocesser, fuldt konfigurerbart til ISO- og GMP-krav."
              tagChild={[{ label: "Produktion" }, { label: "Life Science" }]}
              btnChild={{
                type: "LinkBtn",
                label: "Kontakt os",
                props: {
                  btnLink: "/kontakt",
                  initSize: "medium",
                },
              }}
            />
            <IconCard
              themeVariant="secondary"
              initSize="fit"
              iconChild={<GlobeIcon />}
              cardTitle="Kundeportal & selvbetjening"
              cardText="Giv jeres kunder adgang til egne data, ordrer og sager via en branded portal, bygget oven på jeres eksisterende Argilla-setup."
              tagChild={[{ label: "SaaS" }, { label: "Handel" }]}
              btnChild={{
                type: "LinkBtn",
                label: "Kontakt os",
                props: {
                  btnLink: "/kontakt",
                  initSize: "medium",
                },
              }}
            />
          </div>
        </SectionElem>
      </div>
      <Accordion
        title="Ofte stillede spørgsmål"
        description="Her finder du svar på de mest almindelige spørgsmål om vores platform, funktioner og samarbejdsproces. Har du brug for yderligere information, er du altid velkommen til at kontakte os."
        items={[
          {
            id: 1,
            title: "Hvad kan platformen bruges til?",
            slides: [
              {
                content:
                  "Argilla er en fleksibel platform designet til at håndtere en bred vifte af forretningsprocesser. Den kan tilpasses til alt fra lagerstyring og ordrehåndtering til HR-processer og kvalitetsstyring, afhængigt af jeres specifikke behov.",
              },
            ],
          },
          {
            id: 2,
            title: "Kræver platformen tekniske kompetencer?",
            slides: [
              {
                content:
                  "Argilla er designet til at være brugervenlig og kræver ingen specifikke tekniske kompetencer. Vores brugervenlige interface gør det enkelt at komme i gang, og vi tilbyder support og træningsressourcer for at sikre en smidig implementering.",
              },
            ],
          },
          {
            id: 3,
            title: "Kan platformen integreres med vores eksisterende systemer?",
            slides: [
              {
                content:
                  "Ja, Argilla kan integreres med de fleste eksisterende systemer via API'er og standardprotokoller. Vores tekniske team kan hjælpe med at sikre en smidig integration og minimere eventuelle disruptioner i jeres daglige drift.",
              },
            ],
          },
          {
            id: 4,
            title: "Hvordan håndteres sikkerhed og data?",
            slides: [
              {
                content:
                  "Sikkerhed og databeskyttelse er en topprioritet for os. Argilla er bygget med robuste sikkerhedsforanstaltninger, herunder kryptering, adgangskontrol og regelmæssige sikkerhedsopdateringer for at beskytte jeres data mod uautoriseret adgang og sikre overholdelse af gældende databeskyttelsesregler.",
              },
              {
                content:
                  "Vi tilbyder også forskellige hostingmuligheder, herunder on-premises og cloud-løsninger, så I kan vælge den model der bedst opfylder jeres sikkerheds- og compliance-krav.",
              },
            ],
          },
          {
            id: 5,
            title: "Hvordan kommer vi i gang?",
            slides: [
              {
                content:
                  "Det starter med en dialog om jeres behov. Herefter hjælper vi med onboarding, opsætning og de første skridt, så I får en tryg og effektiv start.",
              },
              {
                content:
                  "Vores implementeringsproces er designet til at minimere forstyrrelser i jeres daglige drift og sikre en smidig overgang til den nye platform.",
              },
            ],
          },
        ]}
      />
      <ContactForm />
    </main>
  );
}

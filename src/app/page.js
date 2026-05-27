import LineBlock from "@/components/blockElements/LineBlock";
import RevolvingBanner from "@/components/revolvingBanner/RevolvingBanner";
import ImageAndText from "@/components/blockElements/ImageAndText";
import Factbanner from "@/components/factbanner/Factbanner";
import TagElem from "@/components/ui/tag/TagElem";
import Certificates from "@/components/certificates/Certificates";
import HeroBanner from "@/components/hero-banners/HeroBanner";
import SectionElem from "@/components/section-elem/SectionElem";
import ImageCard from "@/components/cards/ImageCard";
import ImageWrapper from "@/components/ui/image-wrapper/ImageWrapper";
import Image from "next/image";
import IconCard from "@/components/cards/IconCard";
import { GlobeIcon } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main>
      <HeroBanner
        themeVariant="tertiary"
        centeredVariant={false}
        heroSubHeading="Er jeres systemer bygget til den forretning I driver i dag?"
        heroHeading="Tag kontrol over dine forretningssystemer"
        heroBodyText="Med Argilla får I et enterprise-system I selv kan konfigurere og udvikle videre. On-prem, i skyen eller som managed løsning."
        backgroundImageConfig={{ imgSrc: "" }}
        foregroundImageConfig={{
          imgSrc: "/images/software4.webp",
          imgWidth: 600,
          imgHeight: 600,
          strokeStyle: "bottom",
          roundingVariant: "medium",
        }}
        buttonLabel="Kom i gang"
        buttonLink="/ydelser"
        buttonConfig={{ initSize: "medium", bpSize: "toLarge" }}
      />

      <LineBlock
        lineTitle="Sådan arbejder vi"
        items={[
          {
            id: 1,
            title: "1. Afdækning",
            body: "Vi starter med at forstå jeres forretning. Sammen kortlægger vi processer, behov og krav så løsningen passer præcis til den måde I arbejder på.",
          },
          {
            id: 2,
            title: "2. Konfiguration",
            body: "Argilla konfigureres til jeres workflows, skærmbilleder og forretningslogik. Ingen unødvendig kode, kun det der skaber værdi for jer.",
          },
          {
            id: 3,
            title: "3. Implementering",
            body: "Systemet rulles ud på den infrastruktur der passer jer, on-prem, i skyen eller som en managed løsning vi vedligeholder for jer.",
          },
          {
            id: 4,
            title: "4. Videreudvikling",
            body: "Forretningen udvikler sig, og det skal systemet også. Med Argilla kan I selv justere og bygge videre uden at være afhængige af eksterne ressourcer.",
          },
        ]}
      />
      <SectionElem
        themeVariant="primary"
        centeredVariant={false}
        breakout={false}
        sectionHeading="Vores Cases"
        sectionBodyText="Vi har hjulpet virksomheder på tværs af brancher med at tage kontrol over deres forretningssystemer. Her er et udvalg af de løsninger vi har bygget sammen med vores kunder."
        btnChild={{
          type: "LinkBtn",
          label: "Se alle cases",
          props: {
            initSize: "medium",
            btnLink: "/cases",
            themeVariant: "secondary",
          },
        }}
        elemStyle="mx-mobile-inline"
      >
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          <ImageCard
            cardTitle="Digitalisering af lagerstyring"
            cardText="En mellemstor produktionsvirksomhed erstattede manuelle Excel-ark med et skræddersyet lagerstyringsmodul bygget i Argilla konfigureret og vedligeholdt af deres eget team."
            imgSrc="/images/blocks.webp"
            btnChild={{
              type: "LinkBtn",
              label: "Læs mere",
              props: {
                initSize: "medium",
                btnLink: "/cases/virksomhed-1",
              },
            }}
          />
          <ImageCard
            cardTitle="Unified kundeportal for nordisk forsikringsselskab"
            cardText="Argilla dannede fundamentet for en samlet kundeportal der integrerede data fra tre separate systemer og gav sagsbehandlere ét overblik."
            imgSrc="/images/laptopondesk.webp"
            btnChild={{
              type: "LinkBtn",
              label: "Læs mere",
              props: {
                initSize: "medium",
                btnLink: "/cases/virksomhed-2",
              },
            }}
          />
          <ImageCard
            cardTitle="Compliance-workflow til reguleret lægemiddelindustri"
            cardText="Med Argilla kunne virksomheden selv opdatere godkendelsesprocesser og dokumentationskrav i takt med lovgivningsændringer uden at involvere eksterne udviklere."
            imgSrc="/images/laptop.webp"
            btnChild={{
              type: "LinkBtn",
              label: "Læs mere",
              props: {
                initSize: "medium",
                btnLink: "/cases/virksomhed-3",
              },
            }}
          />
        </div>
      </SectionElem>
      <div className="col-span-full">
        <Factbanner />
      </div>

      <Image
        src="/images/team.webp"
        alt="Billede af et team i samarbejde"
        width={1200}
        height={800}
        className="h-200 w-full object-cover"
      />
      <SectionElem
        themeVariant="primary"
        centeredVariant={true}
        breakout={false}
        sectionHeading="Teamet bag Argilla"
        sectionBodyText="Bag Argilla sidder et dedikeret team med dyb erfaring i forretningssystemer og softwareudvikling. Vi tror på at de bedste løsninger opstår i tæt samarbejde med vores kunder, og at teknologi skal tjene forretningen, ikke omvendt."
        btnChild={{
          type: "LinkBtn",
          label: "Mød teamet",
          props: {
            initSize: "medium",
            btnLink: "/teamet",
            themeVariant: "secondary",
          },
        }}
      />

      <div className="col-span-full">
        <div className="bg-dark px-mobile-inline flex flex-col gap-12 py-24 md:gap-y-40">
          <ImageAndText
            imageSrc="/images/software2.webp"
            imageAlt="Abstrakt teknologi visualisering"
            title="Bygget til den komplekse virkelighed"
            description="Forretningssystemer er sjældent simple. Processer går på tværs af afdelinger, regler ændrer sig, og behov udvikler sig over tid. Argilla er designet til netop den virkelighed. En platform der er robust nok til enterprise-kompleksitet, men fleksibel nok til at I selv kan forme den, uden at tilkalde en udvikler hver gang noget skal justeres."
            variant="secondary"
          />
          <ImageAndText
            imageSrc="/images/software.webp"
            imageAlt="Abstrakt teknologi visualisering"
            title="Tilpas platformen til jeres infrastruktur"
            description="Ingen virksomheder er ens, og det skal jeres system heller ikke være. Med Argilla vælger I selv hvordan løsningen deployes: direkte på jeres egne servere, i skyen, eller som en managed løsning vi drifter og vedligeholder for jer. Samme platform, samme fleksibilitet uanset hvor I er, og hvordan I arbejder."
            reverseOrder
            variant="secondary"
          />
        </div>
        <RevolvingBanner themeVariant="secondary" />
      </div>

      <SectionElem
        themeVariant="primary"
        centeredVariant={false}
        breakout={false}
        sectionHeading="Hvad vores kunder siger"
        sectionBodyText="Vi måles på den forskel vi gør i hverdagen. Her er hvad nogle af vores kunder har at sige om samarbejdet med Argilla."
        btnChild={{
          type: "LinkBtn",
          label: "Se alle cases",
          props: {
            initSize: "medium",
            btnLink: "/cases",
            themeVariant: "secondary",
          },
        }}
        elemStyle="mx-mobile-inline"
      >
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-30">
          <IconCard
            themeVariant="primary"
            initSize="fit"
            iconChild={<GlobeIcon />}
            cardTitle="Vi kan nu selv tilpasse vores processer uden at vente på en udvikler. Det har ændret måden vi arbejder på"
            cardCitation="- IT-chef, produktionsvirksomhed"
          />
          <IconCard
            themeVariant="primary"
            initSize="fit"
            iconChild={<GlobeIcon />}
            cardTitle="Implementeringen gik hurtigere end forventet, og teamet fra Argilla var med os hele vejen."
            cardCitation="- Operations Manager, logistikvirksomhed"
          />
          <IconCard
            themeVariant="primary"
            initSize="fit"
            iconChild={<GlobeIcon />}
            cardTitle="Endelig et system der passer til vores forretning, ikke omvendt."
            cardCitation="- Administrerende direktør, servicevirksomhed"
          />
        </div>
      </SectionElem>

      <div className="col-span-full">
        <Certificates />
      </div>
      <ImageAndText
        imageSrc="/images/software3.webp"
        imageAlt="Abstrakt teknologi visualisering"
        title="Klar til at tage næste skridt?"
        description="Uanset om I er i gang med at evaluere muligheder eller har et konkret projekt i tankerne, så starter det bedste samarbejde med en god snak. Vi lytter først, og finder sammen ud af om Argilla er den rette løsning for jer."
        reverseOrder
        showButton
        buttonLabel="Book en samtale"
        buttonHref="/kontakt"
        buttonVariant="secondary"
      />
    </main>
  );
}

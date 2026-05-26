import HeroBanner from "@/components/hero-banners/HeroBanner";
import ImageAndText from "@/components/blockElements/ImageAndText";
import Accordion from "@/components/accordion/Accordion";
import ContactForm from "@/components/forms/ContactForm";

export default function Kontakt() {
  return (
    <main>
      <HeroBanner
        themeVariant="quaternary"
        centeredVariant={false}
        heroSubHeading="Kontakt os"
        heroHeading="Vi hjælper dig videre"
        heroBodyText="Har du spørgsmål, behov for demo eller et tilbud? Fortæl os om din situation, så vender vi hurtigt tilbage med konkrete næste skridt. Vi vil bestræbe os for at svare tilbage indenfor 2 arbejdsdage, ved akutte henvendelser ring endelig til os på + 45 420 420"
        backgroundImageConfig={{ imgSrc: "/images/blocks.webp" }}
        foregroundImageConfig={{
          imgSrc: "/images/team2.webp",
          imgWidth: 600,
          imgHeight: 600,
          strokeStyle: "bottom",
          roundingVariant: "medium",
        }}
      />
      <ImageAndText
        imageSrc="/images/working.webp"
        title="Hvordan vi arbejder sammen"
        description="Fra første samtale til drift sikrer vi gennemsigtighed og forudsigelighed. Vi starter med at kortlægge jeres behov og prioriteter, præsenterer en konkret løsningsskitse og aftaler en realistisk implementeringsplan. Undervejs leverer vi dokumentation, træning og support, så I hurtigt opnår værdi og tryg drift."
      />
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

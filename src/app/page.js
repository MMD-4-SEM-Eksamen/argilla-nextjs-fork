import LineBlock from "@/components/blockElements/LineBlock";
import RevolvingBanner from "@/components/revolvingBanner/RevolvingBanner";
import ImageAndText from "@/components/blockElements/ImageAndText";
import Factbanner from "@/components/factbanner/Factbanner";
import TagElem from "@/components/ui/tag/TagElem";

export default function Home() {
  return (
    <main>
      <TagElem label={"test"}/>
      <LineBlock
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
      <div className="col-span-full">
        <RevolvingBanner />
      </div>
      <div className="bg-dark flex flex-col gap-12 py-12 col-span-full">
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
      <div className="col-span-full">
        <Factbanner />
      </div>
      <ImageAndText
        imageSrc="/images/software3.webp"
        imageAlt="Abstrakt teknologi visualisering"
        title="Klar til at tage næste skridt?"
        description="Uanset om I er i gang med at evaluere muligheder eller har et konkret projekt i tankerne, så starter det bedste samarbejde med en god snak. Vi lytter først, og finder sammen ud af om Argilla er den rette løsning for jer."
        reverseOrder
        showButton
        buttonLabel="Book en samtale"
        buttonHref="#"
        buttonVariant="secondary"
      />
    </main>
  );
}

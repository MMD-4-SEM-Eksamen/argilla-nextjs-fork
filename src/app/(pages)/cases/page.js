import ImageCard from "@/components/cards/ImageCard";
import SectionElem from "@/components/section-elem/SectionElem";

import CASES_DATA from "@/api/dummy-data/cases.json";

export default function Cases() {
  const SECTION_DATA = {
    sectionHeading: "Cases",
    sectionText:
      "Vi har hjulpet virksomheder på tværs af brancher med at tage kontrol over deres forretningssystemer. Her er et udvalg af de løsninger vi har bygget sammen med vores kunder.",
  };

  return (
    <main className="mt-20">
      <SectionElem
        centeredVariant={true}
        sectionHeading={SECTION_DATA.sectionHeading}
        sectionBodyText={SECTION_DATA.sectionText}
      >
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-40 gap-y-20">
          {CASES_DATA.map((caseItem) => (
            <ImageCard
              key={caseItem.id}
              imgSrc={caseItem.card.image}
              imgAlt={caseItem.card.altTxt}
              imgWidth={1920}
              imgHeight={1280}
              imgStyle="object-cover"
              cardTitle={caseItem.card.heading}
              cardText={caseItem.card.description}
              tagChild={caseItem.card.tag.map((tag) => ({
                label: tag.label,
              }))}
              btnChild={{
                type: "LinkBtn",
                label: caseItem.card.btn.label,
                props: {
                  btnLink: `/cases/${caseItem.slug}`,
                  initSize: "medium",
                },
              }}
            />
          ))}
        </div>
      </SectionElem>
    </main>
  );
}

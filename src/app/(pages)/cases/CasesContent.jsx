"use client";

import DataFetcher from "@/api/DataFetcher";
import ImageCard from "@/components/cards/ImageCard";
import SectionElem from "@/components/section-elem/SectionElem";
import { useLanguage } from "@/context/lang-context/useLanguage";

export default function CasesContent() {
  const SECTION_DATA = {
    da: {
      sectionHeading: "Cases",
      sectionText:
        "Vi har hjulpet virksomheder på tværs af brancher med at tage kontrol over deres forretningssystemer. Her er et udvalg af de løsninger vi har bygget sammen med vores kunder.",
    },
    en: {
      sectionHeading: "Case Studies",
      sectionText:
        "We have helped businesses across a wide range of industries gain greater control over their business systems and operations. Here is a selection of the solutions we have designed and built in close collaboration with our clients.",
    },
  };

  const { language } = useLanguage();
  const section = SECTION_DATA[language] ?? SECTION_DATA["da"];

  return (
    <main className="mt-20">
      <SectionElem
        centeredVariant={true}
        sectionHeading={section.sectionHeading}
        sectionBodyText={section.sectionText}
      >
        <DataFetcher table="cases_full">
          {(data) => (
            <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-40 gap-y-20">
              {data.map((caseItem) => (
                <ImageCard
                  key={caseItem.id}
                  imgSrc={caseItem.card_image_path}
                  imgAlt={caseItem.card_image_text}
                  imgWidth={1920}
                  imgHeight={1280}
                  imgStyle="object-cover"
                  cardTitle={caseItem.card_heading}
                  cardText={caseItem.card_description}
                  tagChild={caseItem.tags.map((tag) => ({
                    label: tag.label,
                  }))}
                  btnChild={{
                    type: "LinkBtn",
                    label: caseItem.btn_label,
                    props: {
                      btnLink: `/cases/${caseItem.slug}`,
                      initSize: "medium",
                    },
                  }}
                />
              ))}
            </div>
          )}
        </DataFetcher>
      </SectionElem>
    </main>
  );
}

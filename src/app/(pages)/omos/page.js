/*"use client";

import { useEffect, useState } from "react";
*/

import FactsAndText from "@/components/blockElements/FactsAndText";
import SectionElem from "@/components/section-elem/SectionElem";
import ImageWrapper from "@/components/ui/image-wrapper/ImageWrapper";
import LineBlock from "@/components/blockElements/LineBlock";
import PersonCard from "@/components/cards/PersonCard";
import TextAndText from "@/components/blockElements/TextAndText";

import DUMMY_DATA from "@/api/dummy-data/omos.json";
import EMPLOYEES_DATA from "@/api/dummy-data/employees.json";
import OmOsContent from "@/content/OmOsContent";

export default function OmOs() {
  /*
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateViewportState = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateViewportState();
    mediaQuery.addEventListener("change", updateViewportState);

    return () => {
      mediaQuery.removeEventListener("change", updateViewportState);
    };
  }, []);
  */

  return (
    <main>
      {/* {isDesktop ? (
        <ImageWrapper
          imgSrc={DUMMY_DATA.hero.imageSrc}
          imgAlt={DUMMY_DATA.hero.altTxt}
          imgWidth={DUMMY_DATA.hero.width}
          imgHeight={DUMMY_DATA.hero.height}
          imgStyle="col-span-full"
        />
      ) : (
        <ImageWrapper
          imgSrc={DUMMY_DATA.hero.imageSrc}
          imgAlt={DUMMY_DATA.hero.altTxt}
          imgWidth={400}
          imgHeight={300}
          imgStyle="col-span-full"
        />
      )}
      */}
      <ImageWrapper
          imgSrc={DUMMY_DATA.hero.imageSrc}
          imgAlt={DUMMY_DATA.hero.altTxt}
          imgWidth={400}
          imgHeight={300}
          imgStyle="col-span-full"
        />
      <SectionElem
        centeredVariant={true}
        sectionHeading={DUMMY_DATA.introSection.heading}
        sectionBodyText={DUMMY_DATA.introSection.bodyText}
      />
      <TextAndText
        title={DUMMY_DATA.missionSection.title}
        leftTitle={DUMMY_DATA.missionSection.leftHeading}
        leftDescription={DUMMY_DATA.missionSection.leftDescription}
        rightTitle={DUMMY_DATA.missionSection.rightHeading}
        rightDescription={DUMMY_DATA.missionSection.rightDescription}
      />
      <FactsAndText
        reverseOrder={true}
        title={DUMMY_DATA.factsSection.title}
        description={DUMMY_DATA.factsSection.description}
      />
      <LineBlock lineTitle="Hvorfor vælge os?" items={DUMMY_DATA.lineItems} />
      <SectionElem
        sectionHeading={DUMMY_DATA.employeeCardSection.heading}
        sectionBodyText={DUMMY_DATA.employeeCardSection.bodyText}
        btnChild={{
          type: "LinkBtn",
          label: DUMMY_DATA.employeeCardSection.btnChild.label,
          props: {
            btnLink: DUMMY_DATA.employeeCardSection.btnChild.btnLink,
          },
        }}
      >
        <OmOsContent />
      </SectionElem>
    </main>
  );
}

"use client";
import DataFetcher from "@/api/DataFetcher";
import PersonCard from "@/components/cards/PersonCard";
import FactsAndText from "@/components/blockElements/FactsAndText";
import SectionElem from "@/components/section-elem/SectionElem";
import ImageWrapper from "@/components/ui/image-wrapper/ImageWrapper";
import LineBlock from "@/components/blockElements/LineBlock";
import TextAndText from "@/components/blockElements/TextAndText";
import { useLanguage } from "@/context/lang-context/useLanguage";
import omosData from "@/api/dummy-data/omos.json";

/*
import { useEffect, useState } from "react";
*/

export default function OmOsContent() {
  const { language } = useLanguage();

  const jsonData = omosData[language] ?? omosData["da"];

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
        imgSrc={jsonData.hero.imageSrc}
        imgAlt={jsonData.hero.altTxt}
        imgWidth={400}
        imgHeight={300}
        imgStyle="col-span-full"
      />
      <SectionElem
        centeredVariant={true}
        sectionHeading={jsonData.introSection.heading}
        sectionBodyText={jsonData.introSection.bodyText}
      />
      <TextAndText
        title={jsonData.missionSection.title}
        leftTitle={jsonData.missionSection.leftHeading}
        leftDescription={jsonData.missionSection.leftDescription}
        rightTitle={jsonData.missionSection.rightHeading}
        rightDescription={jsonData.missionSection.rightDescription}
      />
      <FactsAndText
        reverseOrder={true}
        title={jsonData.factsSection.title}
        description={jsonData.factsSection.description}
      />
      <LineBlock lineTitle="Hvorfor vælge os?" items={jsonData.lineItems} />
      <SectionElem
        sectionHeading={jsonData.employeeCardSection.heading}
        sectionBodyText={jsonData.employeeCardSection.bodyText}
        btnChild={{
          type: "LinkBtn",
          label: jsonData.employeeCardSection.btnChild.label,
          props: {
            btnLink: jsonData.employeeCardSection.btnChild.btnLink,
          },
        }}
      >
        <DataFetcher table="employees_full">
          {(data) => (
            <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-40 gap-y-20">
              {data.slice(0, 3).map((employee) => (
                <PersonCard
                  key={employee.id}
                  initSize="auto"
                  imgSrc={employee.image_path}
                  imgAlt={employee.image_text}
                  imgWidth={1920}
                  imgHeight={1280}
                  imgStyle="object-cover"
                  cardTitle={employee.name}
                  cardText={employee.about}
                  tagChild={{ label: employee.job_title }}
                  contactIcon={employee.contact.map((contact) => ({
                    type: contact.icon,
                    url: contact.addr,
                  }))}
                  btnChild={{
                    type: "LinkBtn",
                    label: employee.btn_label,
                    props: {
                      btnLink: `/teamet/${employee.slug}`,
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

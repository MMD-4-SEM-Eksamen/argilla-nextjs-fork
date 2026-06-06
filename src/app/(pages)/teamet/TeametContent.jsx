"use client";
import DataFetcher from "@/api/DataFetcher";
import ImageAndText from "@/components/blockElements/ImageAndText";
import PersonCard from "@/components/cards/PersonCard";
import SectionElem from "@/components/section-elem/SectionElem";
import { useLanguage } from "@/context/lang-context/useLanguage";
import omosData from "@/api/dummy-data/teamet.json";

export default function TeametContent() {
    const { language } = useLanguage();
  
    const jsonData = omosData[language] ?? omosData["da"];
  return (
    <main>
      <ImageAndText
        reverseOrder={true}
        imageSrc={jsonData.introSection.imageSrc}
        imageAlt={jsonData.introSection.altTxt}
        title={jsonData.introSection.heading}
        description={jsonData.introSection.bodyText}
        className="mt-20"
      />
      <SectionElem
        centeredVariant={true}
        sectionHeading={jsonData.employeeCardSection.heading}
        sectionBodyText={jsonData.employeeCardSection.bodyText}
      >
        <DataFetcher table="employees_full">
          {(data) => (
            <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-40 gap-y-20">
              {data.map((employee) => (
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

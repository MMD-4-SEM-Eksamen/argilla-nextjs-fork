import FactsAndText from "@/components/blockElements/FactsAndText";
import SectionElem from "@/components/section-elem/SectionElem";
import ImageWrapper from "@/components/ui/image-wrapper/ImageWrapper";
import LineBlock from "@/components/blockElements/LineBlock";
import PersonCard from "@/components/cards/PersonCard";
import TextAndText from "@/components/blockElements/TextAndText";

import DUMMY_DATA from "@/api/dummy-data/omos.json";
import EMPLOYEES_DATA from "@/api/dummy-data/employees.json";

export default function OmOs() {

  return (
    <main>
      <ImageWrapper
        imgSrc={DUMMY_DATA.hero.imageSrc}
        imgAlt={DUMMY_DATA.hero.altTxt}
        imgWidth={DUMMY_DATA.hero.width}
        imgHeight={DUMMY_DATA.hero.height}
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
      <LineBlock items={DUMMY_DATA.lineItems} />
      <SectionElem
        sectionHeading={DUMMY_DATA.employeeCardSection.heading}
        sectionBodyText={DUMMY_DATA.employeeCardSection.bodyText}
        btnChild={{
          type: "LinkBtn",
          label: DUMMY_DATA.employeeCardSection.btnChild.label,
          props: {
            btnLink: DUMMY_DATA.employeeCardSection.btnChild.btnLink
          }
        }}
      >
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-40 gap-y-20">
          {EMPLOYEES_DATA.slice(0, 3).map((employee) => (
            <PersonCard
              key={employee.id}
              initSize="auto"
              imgSrc={employee.image}
              imgAlt={employee.altTxt}
              imgWidth={1920}
              imgHeight={1280}
              imgStyle="object-cover"
              cardTitle={employee.name}
              cardText={employee.about}
              tagChild={{ label: employee.jobTitle }}
              contactIcon={employee.contact.map((contact) => ({
                type: contact.icon,
                url: contact.addr,
              }))}
              btnChild={{
                type: "LinkBtn",
                label: employee.btn.label,
                props: {
                  btnLink: `/teamet/${employee.slug}`,
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

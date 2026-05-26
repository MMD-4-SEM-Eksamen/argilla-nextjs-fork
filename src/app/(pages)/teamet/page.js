import ImageAndText from "@/components/blockElements/ImageAndText";
import PersonCard from "@/components/cards/PersonCard";
import SectionElem from "@/components/section-elem/SectionElem";

import DUMMY_DATA from "@/api/dummy-data/teamet.json";
import EMPLOYEES_DATA from "@/api/dummy-data/employees.json";

export default function Teamet() {
  return (
    <main>
      <ImageAndText
        reverseOrder={true}
        imageSrc={DUMMY_DATA.introSection.imageSrc}
        imageAlt={DUMMY_DATA.introSection.altTxt}
        title={DUMMY_DATA.introSection.heading}
        description={DUMMY_DATA.introSection.bodyText}
        className="mt-20"
      />
      <SectionElem
        centeredVariant={true}
        sectionHeading={DUMMY_DATA.employeeCardSection.heading}
        sectionBodyText={DUMMY_DATA.employeeCardSection.bodyText}
      >
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-40 gap-y-20">
          {EMPLOYEES_DATA.map((employee) => (
            <PersonCard
              key={employee.id}
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

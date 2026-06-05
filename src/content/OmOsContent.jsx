"use client";
import DataFetcher from "@/api/DataFetcher";
import PersonCard from "@/components/cards/PersonCard";

export default function OmOsContent() {
  return (
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
  );
}

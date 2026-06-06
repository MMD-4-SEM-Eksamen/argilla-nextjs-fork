"use client";

import ImageAndText from "@/components/blockElements/ImageAndText";
import TextAndText from "@/components/blockElements/TextAndText";
import DataFetcher from "@/api/DataFetcher";
import { useParams } from "next/navigation";

export default function CaseSlugContent() {
  const { slug } = useParams();
  return (
    <DataFetcher table="cases_full" filters={{slug}}>
      {([data]) => (
        <main className="mt-20">
          <h1 className="text-primary text-center text-5xl md:text-6xl">
            {data.case_title}
          </h1>
          <div className="grid gap-20">
            <ImageAndText
              imageSrc={data.case_image_path_a}
              imageAlt={data.case_image_text_a}
              title={data.case_heading_a}
              description={data.case_description_a}
            />
            <ImageAndText
              reverseOrder={true}
              imageSrc={data.case_image_path_b}
              imageAlt={data.case_image_text_b}
              title={data.case_heading_b}
              description={data.case_description_b}
            />
          </div>
          <TextAndText
            title={data.details_title}
            leftTitle={data.details_heading_a}
            leftDescription={data.details_description_a}
            rightTitle={data.details_heading_b}
            rightDescription={data.details_description_b}
          />
        </main>
      )}
    </DataFetcher>
  );
}

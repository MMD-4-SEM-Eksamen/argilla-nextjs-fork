"use client";

import ImageAndText from "@/components/blockElements/ImageAndText";
import TextAndText from "@/components/blockElements/TextAndText";

export default function CaseContent({ caseItem }) {
  const caseDetails = caseItem.caseContent;
  return (
    <main className="mt-20">
      <h1 className="text-5xl md:text-6xl text-primary text-center">{caseDetails.title}</h1>
      <div className="grid gap-20">
        <ImageAndText
        imageSrc={caseDetails.imgTextSection.first.image}
        imageAlt={caseDetails.imgTextSection.first.altTxt}
        title={caseDetails.imgTextSection.first.heading}
        description={caseDetails.imgTextSection.first.description}
      />
      <ImageAndText
        reverseOrder={true}
        imageSrc={caseDetails.imgTextSection.second.image}
        imageAlt={caseDetails.imgTextSection.second.altTxt}
        title={caseDetails.imgTextSection.second.heading}
        description={caseDetails.imgTextSection.second.description}
      />
      </div>
      <TextAndText
        title={caseDetails.dualTextSection.title}
        leftTitle={caseDetails.dualTextSection.textBlocks.left.heading}
        leftDescription={caseDetails.dualTextSection.textBlocks.left.description}
        rightTitle={caseDetails.dualTextSection.textBlocks.right.heading}
        rightDescription={caseDetails.dualTextSection.textBlocks.right.description}
      />
    </main>
  );
}

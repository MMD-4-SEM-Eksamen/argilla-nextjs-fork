"use client";

import ImageAndText from "@/components/blockElements/ImageAndText";
import BulletsAndText from "@/components/blockElements/BulletsAndText";
import DataFetcher from "@/api/DataFetcher";
import { useLanguage } from "@/context/lang-context/useLanguage";
import { useParams } from "next/navigation";

export default function EmployeeSlugContent() {

  const { slug } = useParams();
  const { language } = useLanguage();
  
  const bulletsData = {
    da: {
      bulletsTitle: "Profil"
    },
    en: {
      bulletsTitle: "Profile"
    }
  }

  const bulletElem = bulletsData[language] ?? bulletsData["da"];

  return (
    <DataFetcher table="employees_full" filters={{ slug }}>
      {([data]) => {
        const contactPhone = data.contact.find((c) => c.icon === "phone")?.addr ?? "";
        const contactEmail = data.contact.find((c) => c.icon === "email")?.addr ?? "";
        return (
          <main className="mt-20">
            <ImageAndText
              imageSrc={data.image_path}
              imageAlt={data.image_text}
              title={data.name}
              description={data.about_long}
              showContactInfo={true}
              contactPhone={contactPhone}
              contactEmail={contactEmail}
              socialLinks={data.contact.map((contact) => ({
                type: contact.icon,
                url: contact.addr,
              }))}
            />
            <BulletsAndText
              title={bulletElem.bulletsTitle}
              reverseOrder={true}
              description={data.cv_description}
              bullets={data.cv_bulletpoints}
            />
          </main>
        );
      }}
    </DataFetcher>
  );
}

"use client";

import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import ImageAndText from "@/components/blockElements/ImageAndText";
import BulletsAndText from "@/components/blockElements/BulletsAndText";

export default function PersonContent({ employee }) {
  // Extract contact information
  // This is done in order to work alongside how ImageAndText.jsx comp currently is.
  // Once a more final DB and way of mapping is complete, and the ImageAndText comp has been reworked,
  // - this won't be necessary then.
  // Alternatively, socialLinks part of ImageAndText can just be altered to use the same pattern as PersonCard.jsx
  const linkedinContact = employee.contact.find((c) => c.icon === "linkedin");
  const phoneContact = employee.contact.find((c) => c.icon === "phone");
  const emailContact = employee.contact.find((c) => c.icon === "email");

  // Used in order to add socials contact from the employees.json to how socialLinks expects data.
  const socialLinks = linkedinContact
    ? [
        {
          href: linkedinContact.addr,
          label: "LinkedIn",
          Icon: LinkedinLogoIcon,
        },
      ]
    : [];

  // Below vars is also not-needed when ImageAndText social links part gets refactored to work similarly to PersonCard.jsx

  // Extract phone number from tel: format
  const phoneNumber = phoneContact?.addr.replace("tel:", "") || "";

  // Extract email from mailto: format
  const email = emailContact?.addr.replace("mailto:", "") || "";

  return (
    <main className="mt-20">
      <ImageAndText
        imageSrc={employee.image}
        imageAlt={employee.altTxt}
        title={employee.name}
        description={employee.about}
        showContactInfo={true}
        contactPhone={phoneNumber}
        contactEmail={email}
        socialLinks={socialLinks}
      />
      <BulletsAndText
        title="Profil"
        reverseOrder={true}
        description={employee.pastExperiences.description}
        bullets={employee.pastExperiences.bulletPoints}
      />
    </main>
  );
}

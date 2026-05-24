"use client";

import IconWrapper from "../ui/icon-wrapper/IconWrapper";
import { CertificateIcon } from "@phosphor-icons/react";

export default function Certificates() {
  return (
    <div className="bg-primary flex w-full items-center justify-center">
      <div className="flex max-w-360 flex-col items-center gap-6 px-4 py-12 md:flex-row md:justify-center md:gap-12">
        <div className="flex flex-col items-center gap-3 md:flex-row">
          <IconWrapper>
            <CertificateIcon />
          </IconWrapper>
          <p className="text-light text-center text-xl md:text-left">
            ISO 27001-certificeret sikkerhed
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 md:flex-row">
          <IconWrapper>
            <CertificateIcon />
          </IconWrapper>
          <p className="text-light text-center text-xl md:text-left">
            GDPR-compliant databehandling
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 md:flex-row">
          <IconWrapper>
            <CertificateIcon />
          </IconWrapper>
          <p className="text-light text-center text-xl md:text-left">
            Flersproget support og implementering
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 md:flex-row">
          <IconWrapper>
            <CertificateIcon />
          </IconWrapper>
          <p className="text-light text-center text-xl md:text-left">
            Kompatibel med alle større ERP-systemer
          </p>
        </div>
      </div>
    </div>
  );
}

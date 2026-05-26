"use client";

/* Use case:
//imageSrc - URL for the image to be displayed.
//imageAlt - Alternative text for the image.
//title - Main heading text.
//description - Paragraph text for the content.
//reverseOrder - Boolean to reverse the order of image and text on large screens.
//showButton - Boolean to determine if the button should be displayed.
//buttonLabel - Text to display on the button.
//buttonHref - URL for the button link.
//buttonOnClick - Function to call when the button is clicked.
//buttonVariant - Variant for the button style.
//showContactInfo - Boolean to determine if contact information should be displayed.
//contactPhone - Phone number to display in contact information.
//contactEmail - Email address to display in contact information.
//socialLinks - Array of social link objects, each containing href, label, and Icon properties.
//className - Additional classes for the main container.
//imagePriority - Boolean to set the priority attribute for the Next.js Image component.
*/

import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  GitlabLogoSimpleIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import LinkBtn from "../ui/buttons/LinkBtn";

const DEFAULT_SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    Icon: LinkedinLogoIcon,
  },
  { href: "https://github.com", label: "GitHub", Icon: GithubLogoIcon },
  {
    href: "https://gitlab.com",
    label: "GitLab",
    Icon: GitlabLogoSimpleIcon,
  },
];

export default function ImageAndText({
  imageSrc,
  imageAlt = "",
  title,
  description,
  reverseOrder = false,
  variant = "primary",
  showButton = false,
  buttonLabel = "Learn more",
  buttonHref = "#",
  buttonOnClick,
  buttonVariant = "primary",
  showContactInfo = false,
  contactPhone = "+45 420691337",
  contactEmail = "lorem@ipsum.com",
  socialLinks = DEFAULT_SOCIAL_LINKS,
  className = "",
  imagePriority = false,
}) {
  const layoutOrder = reverseOrder ? "lg:grid-flow-col-dense" : "";

  return (
    <section
      className={`mx-auto flex max-w-360 flex-col gap-8 rounded-4xl py-4 sm:gap-6 sm:py-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-0 ${layoutOrder} ${className}`}
    >
      <div
        className={`${reverseOrder ? "lg:order-2 lg:col-start-2" : "lg:order-1"}`}
      >
        <div
          className={`${variant === "primary" ? "border-primary/95" : "border-secondary/95"} bg-primary relative aspect-4/3 w-full overflow-hidden rounded-3xl border-b-6 ${reverseOrder ? "border-r-6" : "border-l-6"} shadow-[0_10px_30px_rgba(128,49,37,0.14)]`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt || title || "Image"}
            fill
            priority={imagePriority}
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>

      <div
        className={`${reverseOrder ? "lg:order-1 lg:col-start-1" : "lg:order-2"} space-y-4 sm:space-y-5 lg:max-w-160 lg:pl-4`}
      >
        {showContactInfo && (
          <div className="text-primary flex flex-wrap items-center gap-x-5 gap-y-2">
            <div className="flex items-center gap-2 text-sm">
              {socialLinks?.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-dark inline-flex items-center justify-center rounded-full transition"
                >
                  <Icon size={18} weight="regular" />
                </Link>
              ))}
            </div>

            <div className="text-primary/90 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <a
                href={`tel:${contactPhone.replace(/[^+\d]/g, "")}`}
                className="hover:text-dark inline-flex items-center gap-2 transition"
              >
                <PhoneIcon size={16} />
                <span>{contactPhone}</span>
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="hover:text-dark inline-flex items-center gap-2 transition"
              >
                <EnvelopeSimpleIcon size={16} />
                <span>{contactEmail}</span>
              </a>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <h2
            className={`text-${variant === "primary" ? "primary" : "secondary"} font-serif text-4xl leading-none font-medium sm:text-5xl`}
          >
            {title}
          </h2>
          <p
            className={`text-${variant === "primary" ? "dark" : "light"} max-w-prose text-sm leading-6 sm:text-base`}
          >
            {description}
          </p>
        </div>

        {(showButton || (showContactInfo && socialLinks?.length > 0)) && (
          <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
            {showButton && (
              <LinkBtn
                btnLink={buttonHref}
                handleBtnAction={buttonOnClick}
                initSize="medium"
                themeVariant={buttonVariant}
                // btnClass="gap-2 rounded-full shadow-[0_4px_0_#240700] hover:-translate-y-0.5 hover:bg-[#ffe0c3]"
              >
                <span>{buttonLabel}</span>
              </LinkBtn>
            )}

            {/* social links are rendered next to contact info above */}
          </div>
        )}
      </div>
    </section>
  );
}

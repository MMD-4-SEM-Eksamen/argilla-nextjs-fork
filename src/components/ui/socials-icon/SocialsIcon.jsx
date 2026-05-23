/* Use case:
// (type) - Determines which social icon to render: type = "phone" / "email" / "linkedin" / "github" / "gitlab"
// (contactLink) - The url to link href to: contactLink = "https://linkedin.com/..." or "tel:+1234567890"
// (themeVariant) - Determines theme palette: themeVariant = "primary" / "secondary"
*/

import Link from "next/link";
import { PhoneIcon, EnvelopeSimpleIcon, LinkedinLogoIcon, GithubLogoIcon, GitlabLogoSimpleIcon } from "@phosphor-icons/react/dist/ssr";

export default function SocialsIcon({
  type,
  contactLink,
  themeVariant = "primary",
  iconSize,
  ...props
}) {

  const socialIcons = {
    phone: PhoneIcon,
    email: EnvelopeSimpleIcon,
    linkedin: LinkedinLogoIcon,
    github: GithubLogoIcon,
    gitlab: GitlabLogoSimpleIcon,
  };

  const themeSwatch = {
    primary: "*:fill-primary *:hover:fill-dark",
    secondary: "*:fill-dark *:hover:fill-primary",
  };

  const IconComponent = socialIcons[type];

  if (!IconComponent) return null;

  return (
    <Link href={contactLink} className={`${themeSwatch[themeVariant]} md:cursor-pointer`} {...props}>
        <IconComponent size={iconSize || 24} />
    </Link>
  );
}

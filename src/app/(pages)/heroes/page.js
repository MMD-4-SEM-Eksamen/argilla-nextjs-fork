import HeroBanner from "@/components/hero-banners/HeroBanner";

export default function Heroes() {
  const dummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
  return (
    <main className="my-12">
      <h1 className="text-7xl">Hero Banner test side</h1>
      <HeroBanner
          centeredVariant={true}
          breakout={false}
          heroHeading="Lorem Mc Ipsum Dolor Sit Amet"
          heroBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. "
          backgroundImageConfig={{ imgSrc: "/images/working.webp" }}
          buttonLabel="Se Mere"
          buttonLink="/"
          buttonConfig={{ initSize: "medium", bpSize: "toLarge" }}
        />
        <HeroBanner
          themeVariant="secondary"
          centeredVariant={false}
          heroSubHeading="Lorem"
          heroHeading="Lorem Mc Ipsum Dolor Sit Amet"
          heroBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. "
          backgroundImageConfig={{ imgSrc: "/images/working.webp" }}
          foregroundImageConfig={{
            imgSrc: "/images/software.webp",
            imgWidth: 600,
            imgHeight: 600,
            strokeStyle: "bottom",
            roundingVariant: "medium",
          }}
          buttonLabel="Se Mere"
          buttonLink="/"
          buttonConfig={{ initSize: "medium", bpSize: "toLarge" }}
        />
    </main>
  );
}

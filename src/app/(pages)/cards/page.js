import IconCard from "@/components/cards/IconCard";
import ImageCard from "@/components/cards/ImageCard";
import OfferCard from "@/components/cards/OfferCard";
import PersonCard from "@/components/cards/PersonCard";
import { ShieldIcon } from "@phosphor-icons/react/dist/ssr";

export default function Cards() {
  const dummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
  return (
    <main className="my-12">
      <h1 className="text-7xl">Cards Test Side</h1>
      <div className="grid gap-20">
        <div className="grid gap-8">
          <h2 className="text-4xl">Icon Cards</h2>
          <div className="grid grid-cols-3 gap-4">
            <IconCard
              initSize="fit"
              iconChild={<ShieldIcon />}
              cardTitle="Test 1"
              cardText={dummyText}
            />
            <IconCard
              initSize="fit"
              iconChild={<ShieldIcon />}
              cardTitle="Test 2"
              cardText={dummyText}
              cardCitation="- Børge"
            />
            <IconCard
              initSize="fit"
              iconChild={<ShieldIcon />}
              cardTitle="Test 3"
              cardText={dummyText}
              cardCitation="- Børge"
              btnChild={{
                type: "LinkBtn",
                label: "Se Mere",
                props: {
                  btnLink: "/",
                  initSize: "medium",
                },
              }}
            />
            <IconCard
              initSize="fit"
              iconChild={<ShieldIcon />}
              cardTitle="Test 4"
              cardText={dummyText}
              cardCitation="- Børge"
              tagChild={[{ label: "Cloud" }, { label: "Server" }]}
            />
            <IconCard
              themeVariant="secondary"
              initSize="fit"
              iconChild={<ShieldIcon />}
              cardTitle="Test 4"
              cardText={dummyText}
              cardCitation="- Børge"
              tagChild={[{ label: "Cloud" }, { label: "Server" }]}
              btnChild={{
                type: "ActionBtn",
                label: "Se Mere",
                props: {
                  type: "button",
                  initSize: "medium",
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <h2 className="text-4xl">Image Cards</h2>
        <div className="grid grid-cols-3 gap-4">
          <ImageCard initSize="fit" cardTitle="Test 1" cardText={dummyText} />
          <ImageCard
            initSize="fit"
            cardTitle="Test 2"
            cardText={dummyText}
            cardCitation="- Børge"
          />
          <ImageCard
            initSize="fit"
            cardTitle="Test 3"
            cardText={dummyText}
            cardCitation="- Børge"
            btnChild={{
              type: "LinkBtn",
              label: "Se Mere",
              props: {
                btnLink: "/",
                initSize: "medium",
              },
            }}
          />
          <ImageCard
            initSize="fit"
            cardTitle="Test 4"
            cardText={dummyText}
            cardCitation="- Børge"
            tagChild={[{ label: "Cloud" }, { label: "Server" }]}
          />
          <ImageCard
            themeVariant="secondary"
            initSize="fit"
            cardTitle="Test 4"
            cardText={dummyText}
            cardCitation="- Børge"
            tagChild={[{ label: "Cloud" }, { label: "Server" }]}
            btnChild={{
              type: "ActionBtn",
              label: "Se Mere",
              props: {
                type: "button",
                initSize: "medium",
              },
            }}
          />
        </div>
      </div>
      <div className="grid gap-8">
        <h2 className="text-4xl">Sales Cards</h2>
        <div className="grid grid-cols-3 gap-4">
          <OfferCard
            themeVariant="primary"
            initSize="fit"
            iconChild={<ShieldIcon />}
            cardTitle="Test 4"
            cardText={dummyText}
            cardFeaturesTitle="Features Here:"
            bulletChild={[
              { label: "Lorem Mc Ipsum og Dolor Sit Amet og sådan noget" },
              { label: "Det her er andet type tekst indhold." },
            ]}
            btnChild={{
              type: "LinkBtn",
              label: "Se Mere",
              props: {
                btnLink: "/",
                initSize: "medium",
              },
            }}
          />
          <OfferCard
            themeVariant="secondary"
            initSize="fit"
            iconChild={<ShieldIcon />}
            cardTitle="Test 4"
            cardText={dummyText}
            cardPrice="1337 DKK"
            cardFeaturesTitle="Features Here:"
            bulletChild={[
              { label: "Lorem Mc Ipsum og Dolor Sit Amet og sådan noget" },
              { label: "Det her er andet type tekst indhold." },
            ]}
            btnChild={{
              type: "LinkBtn",
              label: "Se Mere",
              props: {
                btnLink: "/",
                initSize: "medium",
              },
            }}
          />
        </div>
      </div>
      <div className="grid gap-8">
        <h2 className="text-4xl">Person Cards</h2>
        <div className="grid grid-cols-3 gap-4">
          <PersonCard
            initSize="fit"
            imgWidth={400}
            imgHeight={200}
            imgStyle="px-2"
            cardTitle="Test 4"
            cardText="Lorem ipsum dolor sit amet, consecutor Lorem ipsum dolor sit amet, consecutor "
          />
          <PersonCard
            initSize="fit"
            imgWidth={400}
            imgHeight={200}
            imgStyle="px-2"
            cardTitle="Test 4"
            cardText="Lorem ipsum dolor sit amet, consecutor Lorem ipsum dolor sit amet, consecutor "
            tagChild={[{ label: "Cloud" }, { label: "Server" }]}
          />
          <PersonCard
            initSize="fit"
            imgWidth={400}
            imgHeight={200}
            imgStyle="px-2"
            cardTitle="Test 4"
            cardText="Lorem ipsum dolor sit amet, consecutor Lorem ipsum dolor sit amet, consecutor "
            tagChild={[{ label: "Cloud" }, { label: "Server" }]}
            btnChild={{
              type: "LinkBtn",
              label: "Se Mere",
              props: {
                btnLink: "/",
                initSize: "medium",
              },
            }}
          />
          <PersonCard
            initSize="fit"
            imgWidth={400}
            imgHeight={200}
            imgStyle="px-2"
            cardTitle="Test 4"
            cardText="Lorem ipsum dolor sit amet, consecutor Lorem ipsum dolor sit amet, consecutor "
            tagChild={[{ label: "Cloud" }, { label: "Server" }]}
            contactIcon={[
              { type: "phone", url: "tel:+123456789" },
              { type: "email", url: "mailto:lorem@ipsum" },
              { type: "linkedin", url: "https://linkedin.com" },
            ]}
          />
          <PersonCard
            themeVariant="secondary"
            initSize="fit"
            imgWidth={400}
            imgHeight={200}
            imgStyle="px-2"
            cardTitle="Test 4"
            cardText="Lorem ipsum dolor sit amet, consecutor Lorem ipsum dolor sit amet, consecutor "
            tagChild={[{ label: "Cloud" }, { label: "Server" }]}
            contactIcon={[
              { type: "phone", url: "tel:+123456789" },
              { type: "email", url: "mailto:lorem@ipsum" },
              { type: "linkedin", url: "https://linkedin.com" },
            ]}
            btnChild={{
              type: "LinkBtn",
              label: "Se Mere",
              props: {
                btnLink: "/",
                initSize: "medium",
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}

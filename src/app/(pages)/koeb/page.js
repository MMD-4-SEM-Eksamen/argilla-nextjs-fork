import KoebClient from "./KoebClient";

export const dynamic = "force-dynamic";

export default async function Koeb({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const selectedType = resolvedSearchParams?.type;

  return <KoebClient selectedType={selectedType} />;
}

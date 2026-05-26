import CASES_DATA from "@/api/dummy-data/cases.json";
import CaseContent from "./CaseContent";

// Since routes are dynamic, this should fix 404-not-found issue by pre-render the routes.
// Bjørn - Used a similar method like this to fix a previous issue i had in an earlier project
// - that similarly used data from a local .json file.

export async function generateStaticParams() {
  return CASES_DATA.map((caseItem) => ({
    slug: caseItem.slug,
  }));
}

export default async function CaseDetails({ params }) {
  // Await params to get the actual values
  const resolvedParams = await params;
  
  // Find caseItem by slug
  const caseItem = CASES_DATA.find((itm) => itm.slug === resolvedParams.slug);

  // Fallback in case caseItem was not found.
  if (!caseItem) {
    return <div>caseItem not found</div>;
  }

  return <CaseContent caseItem={caseItem} />;
}

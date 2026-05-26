import EMPLOYEES_DATA from "@/api/dummy-data/employees.json";
import PersonContent from "./PersonContent";

// Since routes are dynamic, this should fix 404-not-found issue by pre-render the routes.
// Bjørn - Used a similar method like this to fix a previous issue i had in an earlier project
// - that similarly used data from a local .json file.

export async function generateStaticParams() {
  return EMPLOYEES_DATA.map((employee) => ({
    slug: employee.slug,
  }));
}

export default async function Person({ params }) {
  // Await params to get the actual values
  const resolvedParams = await params;
  
  // Find employee by slug
  const employee = EMPLOYEES_DATA.find((emp) => emp.slug === resolvedParams.slug);

  // Fallback in case employee was not found.
  if (!employee) {
    return <div>Employee not found</div>;
  }

  return <PersonContent employee={employee} />;
}

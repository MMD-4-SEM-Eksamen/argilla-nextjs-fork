import { Suspense } from "react";
import { createClient } from "@supabase/supabase-js";

/* 
// This component is a W.I.P, it will not be used for now, as no Supabase tables has been setup yet.

// It will presumably be used in Iteration v2, but not for now (maybe?)

// Comments in this Component will also need to be updated and changed,
// - in case of changes. So for now, they will remain incomplete.

*/


// Usage:
/*
"use client";
import DataFetcher from "@/api/DataFetcher";
import { useLanguage } from "@/context/lang-context/useLanguage";

function MyComponent({myData}) {
  return (
    <div>
      {myData.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function PageComponent() {
  const { language } = useLanguage();
  
  return (
    <DataFetcher table="content" language={language}>
      {(data) => <MyComponent myData={data}/>}
    </DataFetcher>
  );
}
*/

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Async function to load data from Supabase with language support
async function LoadData({ table, language, children }) {
  let data = null;
  let error = null;

  try {
    // First try to fetch the requested language
    const { data: result, error: supabaseError } = await supabase
      .from(table)
      .select("*")
      .eq("language", language);

    if (supabaseError) throw supabaseError;

    // If no results and not already default language, fallback to default
    if (result.length === 0 && language !== "da") {
      const { data: defaultResult, error: defaultError } = await supabase
        .from(table)
        .select("*")
        .eq("language", "da");
      
      if (defaultError) throw defaultError;
      data = defaultResult;
    } else {
      data = result;
    }
  } catch (err) {
    console.error(`Supabase error fetching from ${table}:`, err);
    error = err;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <>{children(data)}</>;
}

export default function DataFetcher({ table, language = "da", children }) {
  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <LoadData table={table} language={language}>
        {children}
      </LoadData>
    </Suspense>
  );
}

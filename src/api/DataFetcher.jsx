"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLanguage } from "@/context/lang-context/useLanguage";

/* 
// Usage:

import DataFetcher from "@/api/DataFetcher";

function MyComponent({ myData }) {
  return (
    <div>
      {myData.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default function PageComponent() {
  return (
    <DataFetcher table="content">
      {(data) => <MyComponent myData={data} />}
    </DataFetcher>
  )
}

// If used in slug pages:

import DataFetcher from "@/api/DataFetcher";
import { useParams } from "next/navigation";

// MyPageContent.jsx
export default function MyPageContent() {

  const { slug } = useParams();

  return (
    <DataFetcher table="content" filters={{slug}}>
      {([data]) => (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        )}
    </DataFetcher>
)
}

// page.js
export default function PageComponent() {
  return (
    <DataFetcher table="content">
      {(data) => <MyComponent myData={data} filters={slug}/>}
    </DataFetcher>
  );
}

*/

// Necessary from Supabase in order to authenticate connection.
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
);

export default function DataFetcher({ table, filters = {}, children }) {
  const { language } = useLanguage();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
         // Start with the base query ( .select ("*") ) filtered by language ( .eq("language", language) )
         // Then apply any extra filters on top. Filters is an object {slug: "case-6"}, Object.entries() will convert it into an array of [key, value] pairs.
         // In case of filtering, 'let' is required since each .eq() returns a new query obj that is reassigned.
        let query = supabase.from(table).select("*").eq("language", language);
        for (const [col, val] of Object.entries(filters)) {
          query = query.eq(col, val);
        }
        const { data: result, error: supabaseError } = await query;

        if (supabaseError) throw supabaseError;

        console.log("Supabase result:", result);
        console.log("Supabase error:", supabaseError);

        // Same as the above, but with fallback to Danish if no results for requested language are found
        if (result.length === 0 && language !== "da") {
          let fallbackQuery = supabase
            .from(table)
            .select("*")
            .eq("language", "da");
          for (const [col, val] of Object.entries(filters)) {
            fallbackQuery = fallbackQuery.eq(col, val);
          }
          const { data: defaultResult, error: defaultError } =
            await fallbackQuery;

          if (defaultError) throw defaultError;
          setData(defaultResult);
        } else {
          setData(result);
        }
      } catch (err) {
        console.error(`Supabase error fetching from ${table}:`, err);
        setError(err);
      }
    }

    fetchData();
    // In order to fix infinite re-fetch bug, "JSON.stringify(filters)" will be used instead of adding "filters" directly.
    // Due to React comparing objects by reference.
    // Without this, a new { slug } object each render would always trigger a re-fetch even if the value hasn't changed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table, language, JSON.stringify(filters)]);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading data...</div>;

  return <>{children(data)}</>;
}

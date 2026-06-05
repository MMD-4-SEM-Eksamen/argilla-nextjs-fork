"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLanguage } from "@/context/lang-context/useLanguage";

// Usage:
/*
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
  );
}

export default function PageComponent() {
  return (
    <DataFetcher table="content">
      {(data) => <MyComponent myData={data} />}
    </DataFetcher>
  );
}
*/

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
);

export default function DataFetcher({ table, children }) {
  const { language } = useLanguage();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: result, error: supabaseError } = await supabase
          .from(table)
          .select("*")
          .eq("language", language);

        if (supabaseError) throw supabaseError;

        console.log("Supabase result:", result);
        console.log("Supabase error:", supabaseError);

        // Fallback to Danish if no results for requested language
        if (result.length === 0 && language !== "da") {
          const { data: defaultResult, error: defaultError } = await supabase
            .from(table)
            .select("*")
            .eq("language", "da");

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
  }, [table, language]);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading data...</div>;

  return <>{children(data)}</>;
}
import { useEffect } from "react";

interface SchemaOrgProps {
  data: Record<string, any>;
  id?: string;
}

export function SchemaOrg({ data, id = "schema-org-jsonld" }: SchemaOrgProps) {
  useEffect(() => {
    // Generate a specific ID for this schema block if provided
    const elementId = id;
    
    let el = document.getElementById(elementId) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = elementId;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);

    // Cleanup when component unmounts
    return () => {
      const currentEl = document.getElementById(elementId);
      if (currentEl) {
        currentEl.remove();
      }
    };
  }, [data, id]);

  return null;
}

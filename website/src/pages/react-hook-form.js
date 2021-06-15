import React from "react";
import Layout from "../components/layout/layout";
import doc from "../docs/react_hook_form";

export default function ReactHookForm({ pageContext }) {
  const language = pageContext.language || "en";

  return <Layout language={language} doc={doc} />;
}

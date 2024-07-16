import React from "react";
import { Helmet } from "react-helmet-async";

const MetaSeoTags = ({ title, description, keywords, canonicalUrl, ogTitle, ogContent, ogImg }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogContent} />
      <meta property="og:image" content={ogImg} />
    </Helmet>
  );
};

export default MetaSeoTags;

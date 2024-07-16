import React from "react";
import { Helmet } from "react-helmet-async";

const MetaSeoTags = ({ title, description, keywords, canonicalUrl, ogTitle, ogContent, ogImg, slug }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={`https://www.zacharywgibbs.com${slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogContent} />
      <meta property="og:image" content={ogImg} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default MetaSeoTags;

import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "rgybzvnv", // Get this from Sanity dashboard
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

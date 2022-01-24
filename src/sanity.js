import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "c0c4q8d8", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
});
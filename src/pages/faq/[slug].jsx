import data from "@/data/faqs.json";
import { SlugPage } from "@/components/template";

export default function Slug({ article }) {
  return <SlugPage data={article} />;
}

export async function getStaticPaths() {
  const paths = data?.articles?.map((article) => ({
    params: { slug: article.name.toLowerCase().replace(/ /g, "-") },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const article = data?.articles?.find(
    (article) => article.name.toLowerCase().replace(/ /g, "-") === params.slug
  );

  return {
    props: {
      article,
    },
  };
}

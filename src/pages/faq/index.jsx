import { FAQPage } from "@/components/template";

const Faq = ({ articles }) => {
  return <FAQPage data={articles} />;
};

export async function getStaticProps() {
  const articles = require("../../data/faqs.json");

  return {
    props: {
      articles,
    },
  };
}

export default Faq;

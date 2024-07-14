import CommentContainer from "@/components/Item/CommentContainer";
import ProductArticle from "@/components/Item/ProductArticle";

const index = () => {
  return (
    <div className="mx-auto mt-61 flex max-w-[1200px] flex-col gap-24 p-16 md:mt-80 md:gap-32 md:p-24">
      <ProductArticle />
      <CommentContainer />
    </div>
  );
};

export default index;

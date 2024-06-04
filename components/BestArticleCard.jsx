import Image from "next/image";

const BestArticleCard = ({ item }) => {
  const { title, likeCount, createdAt, image } = item;

  return (
    <div>
      <Image
        src="/images/img_best_badge.svg"
        width={102}
        height={30}
        alt="베스트게시글뱃지"
      />
      {title}
      {image ? (
        <Image src={image} width={72} height={72} alt="베스트게시글이미지" />
      ) : (
        ""
      )}
    </div>
  );
};

export default BestArticleCard;

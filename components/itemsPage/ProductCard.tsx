import Product from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  item,
  bestSize,
}: {
  item: Product;
  bestSize?: boolean;
}) => {
  const { images, name, price, favoriteCount } = item;

  return (
    <div className="mb-16 flex flex-col gap-16">
      {images ? (
        <Link
          href={`/items/${item.id}`}
          className={` ${bestSize ? "h-343 md:h-336 xl:h-282 relative aspect-square w-343 rounded-16 md:w-336 xl:w-282" : "md:h-221 relative aspect-square h-168 w-168 rounded-16 md:w-221"}`}
        >
          <Image src={images[0]} fill alt="product" />
        </Link>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-6">
        <div className="text-14 font-medium text-[#1f2937]">{name}</div>
        <div className="text-16 font-bold text-[#1f2937]">{price}원</div>
        <div className="flex items-center gap-4 text-12 font-medium text-[#4b5563]">
          <Image
            src="/images/ic_heart.svg"
            width={16}
            height={16}
            alt="하트아이콘"
          />
          {favoriteCount}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import getProduct from "@/api/products/product";
import Product from "@/types/product";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductArticle = () => {
  const [product, setProduct] = useState<Product>();
  const router = useRouter();
  const { query, isReady } = router;

  useEffect(() => {
    if (isReady) {
      const productId = Number(query.productId);
      const loadProduct = async () => {
        const data = await getProduct(productId);
        setProduct(data);
      };
      if (!isNaN(productId)) {
        loadProduct();
      }
    }
  }, [isReady, query.productId]);

  if (!product) return null;

  return (
    <div className="flex flex-col gap-24 md: md:flex-row md:gap-13 xl:gap-24">
      <div className="md:h-340 md:w-340 xl:h-486 xl:w-486">
        <Image
          layout="responsive"
          className="rounded-12"
          width={343}
          height={343}
          src={product.images[0]}
          alt="상품 이미지"
        />
      </div>
      <div className="flex flex-col flex-1 gap-24">
        <div className="gap-4 pb-12 border-b border-solid border-gray-20">
          <div className="flex justify-between">
            <div className="text-20 font-semibold leading-[32px] text-black-800">
              {product.name}
            </div>
            <Image
              src="/images/ic_kebab.svg"
              width={24}
              height={24}
              alt="케밥아이콘"
            />
          </div>
          <div className="text-32 font-semibold leading-[42px] text-black-800">
            {product.price}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-14 font-medium leading-[24px] text-gray-600">
            상품 소개
          </div>
          <pre className="whitespace-pre-wrap text-16 font-normal leading-[26px] text-black-800">
            {product.description}
          </pre>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-14 font-medium leading-[17px] text-gray-600">
            상품 태그
          </div>
          <div className="flex gap-8 h-max w-max">
            {product.tags.map((tag) => (
              <div
                className="rounded-26 bg-gray-10 px-16 py-6 text-16 font-normal leading-[24px] text-black-800"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center h-40 gap-4 px-12 py-4 border border-solid w-max rounded-35 border-gray-20">
          <div className="relative w-32 h-32">
            <Image src="/images/ic_heart.svg" fill alt="좋아요아이콘" />
          </div>
          <div className="text-16 font-medium leading-[26px] text-gray-500">
            {product.favoriteCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductArticle;

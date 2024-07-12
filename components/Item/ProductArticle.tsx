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
    <div className="md: flex flex-col gap-24 md:flex-row md:gap-13 xl:gap-24">
      <div className="md:h-340 xl:w-486 xl:h-486 rounded-12 md:w-340">
        <Image
          layout="responsive"
          width={343}
          height={343}
          src={product.images[0]}
          alt="상품 이미지"
        />
      </div>
      <div className="flex flex-1 flex-col gap-24">
        <div className="border-gray-20 gap-4 border-b border-solid pb-12">
          <div className="flex justify-between">
            <div className="text-black-800 text-20 font-semibold leading-[32px]">
              {product.name}
            </div>
            <Image
              src="/images/ic_kebab.svg"
              width={24}
              height={24}
              alt="케밥아이콘"
            />
          </div>
          <div className="text-black-800 text-32 font-semibold leading-[42px]">
            {product.price}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-gray-600 text-14 font-medium leading-[24px]">
            상품 소개
          </div>
          <pre className="text-black-800 whitespace-pre-wrap text-16 font-normal leading-[26px]">
            {product.description}
          </pre>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-gray-600 text-14 font-medium leading-[17px]">
            상품 태그
          </div>
          <div className="flex h-max w-max gap-8">
            {product.tags.map((tag) => (
              <div
                className="bg-gray-10 text-black-800 rounded-26 px-16 py-6 text-16 font-normal leading-[24px]"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="border-gray-20 flex h-40 w-max items-center gap-4 rounded-35 border border-solid px-12 py-4">
          <div className="relative h-32 w-32">
            <Image src="/images/ic_heart.svg" fill alt="좋아요아이콘" />
          </div>
          <div className="text-gray-500 text-16 font-medium leading-[26px]">
            {product.favoriteCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductArticle;

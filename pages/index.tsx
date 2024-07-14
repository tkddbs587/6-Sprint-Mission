import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="mt-80">
      <div className="flex h-[540px] flex-col justify-center bg-skyblue bg-[url('/images/img_banner_top.svg')] bg-[length:1000px] bg-80%-bottom bg-no-repeat">
        <div className="mx-auto my-0 flex w-[1200px] flex-col gap-32">
          <h1>
            일상의 모든 물건을
            <br className="hidden md:block" />
            거래해 보세요
          </h1>
          <Link
            href="/items"
            className="h-[60px] w-[370px] rounded-[45.5px] bg-blue px-126 py-16 text-20 font-bold text-white"
          >
            구경하러 가기
          </Link>
        </div>
      </div>
      <div className="mx-auto my-0 max-w-[1200px]">
        <div className="flex gap-64 px-0 py-138">
          <Image
            width={588}
            height={444}
            src="/images/img_article_top.png"
            alt="상단아티클"
          />
          <div className="flex flex-col justify-center gap-12">
            <h6>Hot item</h6>
            <h1>
              인기 상품을
              <br className="hidden" />
              확인해 보세요
            </h1>

            <p>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-64 px-0 text-right py-138">
          <Image
            width={588}
            height={444}
            src="/images/img_article_middle.png"
            alt="중간아티클"
          />
          <div className="flex flex-col justify-center gap-12">
            <h6>Search</h6>
            <h1>
              구매를 원하는
              <br className="hidden" />
              상품을 검색하세요
            </h1>
            <p>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
        <div className="flex gap-64 px-0 py-138">
          <Image
            width={588}
            height={444}
            src="/images/img_article_bottom.png"
            alt="하단아티클"
          />
          <div className="flex flex-col justify-center gap-12">
            <h6>Register</h6>
            <h1>
              판매를 원하는
              <br className="hidden" />
              상품을 등록하세요
            </h1>
            <p>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </div>
      <div className="mt-138 flex h-[540px] flex-col justify-center bg-skyblue bg-[url('/images/img_banner_bottom.svg')] bg-[length:1000px] bg-80%-bottom bg-no-repeat">
        <h1 className="mx-auto flex w-[1200px] flex-col gap-32">
          믿을 수 있는
          <br />
          판다마켓 중고거래
        </h1>
      </div>
      <footer className="h-160 bg-[#111322]">
        <div className="flex justify-between pt-32 px-200 pb-104">
          <h4>©codeit - 2024</h4>

          <div className="flex text-gray-100 gap-30">
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="flex gap-12">
            <a href="https://www.facebook.com/" target="_blank">
              <Image
                src="/images/ic_facebook.svg"
                width={24}
                height={24}
                alt="페이스북"
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <Image
                src="/images/ic_twitter.svg"
                width={24}
                height={24}
                alt="트위터"
              />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <Image
                src="/images/ic_youtube.svg"
                width={24}
                height={24}
                alt="유튜브"
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <Image
                src="/images/ic_instagram.svg"
                width={24}
                height={24}
                alt="인스타그램"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

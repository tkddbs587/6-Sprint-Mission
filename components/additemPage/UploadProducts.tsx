import Header from "./Header";
import FileInput from "./FileInput";

const UploadProducts = () => {
  return (
    <div className="mx-auto my-0 max-w-[1200px]">
      <Header />
      <form>
        <FileInput />
        <div className="mb-170 mt-24 flex flex-col gap-24">
          <label className="flex flex-col gap-12 text-18 font-bold text-[#1f2937]">
            상품명
            <input
              className="h-56 rounded-12 border-none bg-[#f3f4f6] pl-24 text-16 font-normal placeholder:text-16 placeholder:font-normal placeholder:leading-[26px] placeholder:text-[#9ca3af]"
              placeholder="상품명을 입력해주세요"
            />
          </label>

          <label className="flex flex-col gap-12 text-18 font-bold text-[#1f2937]">
            상품 소개
            <textarea
              className="h-200 rounded-12 border-none bg-[#f3f4f6] pl-24 pt-16 text-16 font-normal placeholder:text-16 placeholder:font-normal placeholder:leading-[26px] placeholder:text-[#9ca3af]"
              placeholder="상품 소개를 입력해주세요"
            />
          </label>

          <label className="flex flex-col gap-12 text-18 font-bold text-[#1f2937]">
            판매가격
            <input
              className="h-56 rounded-12 border-none bg-[#f3f4f6] pl-24 text-16 font-normal placeholder:text-16 placeholder:font-normal placeholder:leading-[26px] placeholder:text-[#9ca3af]"
              placeholder="판매가격을 입력해주세요"
            />
          </label>

          <label className="flex flex-col gap-12 text-18 font-bold text-[#1f2937]">
            태그
            <input
              className="h-56 rounded-12 border-none bg-[#f3f4f6] pl-24 text-16 font-normal placeholder:text-16 placeholder:font-normal placeholder:leading-[26px] placeholder:text-[#9ca3af]"
              placeholder="태그를 입력해주세요"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default UploadProducts;

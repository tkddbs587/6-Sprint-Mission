import { postProductComment } from "@/api/products/productComments";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const CommentForm = ({
  setIsChangeComment,
  productId,
}: {
  setIsChangeComment: Dispatch<SetStateAction<boolean>>;
  productId: number;
}) => {
  const [inputValue, setInputValue] = useState("");

  const validation = inputValue.trim() === "" ? true : false;

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    await postProductComment({ productId, inputValue });
    setIsChangeComment((prev) => !prev);
    setInputValue("");
  };

  return (
    <div className="border-gray-20 flex flex-col gap-16 border-t border-solid pt-16">
      <div className="text-black-900 text-16 font-semibold leading-[19px] md:leading-[26px]">
        문의하기
      </div>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        className="bg-gray-10 placeholder:text-gray-400 h-104 w-full resize-none rounded-12 px-24 py-16 placeholder:text-14 placeholder:font-normal placeholder:leading-[24px] md:placeholder:leading-[26px]"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <button
        disabled={validation}
        onClick={handleSubmit}
        className={`${validation ? "bg-gray-400" : "bg-blue"} text-gray-50 ml-auto flex h-42 w-74 cursor-pointer items-center rounded-8 px-23 py-12 text-16 font-semibold leading-[26px]`}
      >
        등록
      </button>
    </div>
  );
};

export default CommentForm;

import { Comment } from "@/types";
import formatTimeAgo from "@/utils/formatTimeAgo";
import Image from "next/image";

const CommentList = ({ comment }: { comment: Comment }) => {
  return (
    <>
      <div className="border-gray-20 flex flex-col gap-16 border-b border-solid pb-16 md:gap-24">
        <div className="flex justify-between">
          <div className="text-black-800 text-14 font-normal leading-[24px]">
            {comment.content}
          </div>
          <Image
            src="/images/ic_kebab.svg"
            width={24}
            height={24}
            alt="케밥아이콘"
          />
        </div>
        <div className="flex items-center gap-8">
          <div className="relative h-32 w-32">
            <Image fill src={comment.writer.image} alt="작성자 이미지" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-gray-600 text-12 font-normal leading-[18px]">
              {comment.writer.nickname}
            </div>
            <div className="text-gray-400 text-12 font-normal leading-[18px]">
              {formatTimeAgo(comment.createdAt)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentList;

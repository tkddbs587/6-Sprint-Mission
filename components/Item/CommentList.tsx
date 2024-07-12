import { Comment } from "@/types";
import formatTimeAgo from "@/utils/formatTimeAgo";
import Image from "next/image";

const CommentList = ({ comment }: { comment: Comment }) => {
  return (
    <>
      {comment ? (
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
            {comment.writer.image ? (
              <div className="relative h-32 w-32">
                <Image fill src={comment.writer.image} alt="작성자 이미지" />
              </div>
            ) : (
              <div className="bg-violet-20 flex-center h-32 w-32 rounded-full text-12 font-semibold leading-[15px] text-white">
                {comment.writer.nickname.charAt(0).toUpperCase()}
              </div>
            )}

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
      ) : (
        // <div className="h-140 w-140">
        //   <Image
        //     src="/images/ic_panda_no_comment.svg"
        //     fill
        //     alt="댓글 없음 판다이미지"
        //   />
        // </div>
        ""
      )}
    </>
  );
};

export default CommentList;

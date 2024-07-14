import { patchProductComment } from "@/api/products/productComments";
import { Comment } from "@/types";
import formatTimeAgo from "@/utils/formatTimeAgo";
import axios from "@/lib/axios";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const CommentList = ({
  comment,
  setIsChangeComment,
}: {
  comment: Comment;
  setIsChangeComment: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isEditInput, setIsEditInput] = useState(false);
  const [newValue, setNewValue] = useState(comment.content);

  const handleNewValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewValue(e.target.value);
  };

  const handleButtonVisible = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleEditComment = () => {
    setIsEditInput(!isEditInput);
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handlePatchComment = async () => {
    await patchProductComment({ commentId: comment.id, newValue });
    setIsChangeComment((prev) => !prev);
    setIsEditInput(!isEditInput);
  };

  const handleDeleteComment = async () => {
    await axios.delete(`/comments/${comment.id}`);
    setIsChangeComment((prev) => !prev);
    setIsEditInput(!isEditInput);
  };

  return (
    <>
      {comment ? (
        <div className="border-gray-20 flex flex-col gap-16 border-b border-solid pb-16 md:gap-24">
          <div className="relative flex items-start justify-between">
            {isEditInput ? (
              <div className="relative flex w-full flex-col">
                <textarea
                  value={newValue}
                  onChange={handleNewValueChange}
                  className="bg-gray-10 h-60 resize-none rounded-12 px-16 py-8 text-12 font-normal leading-[24px]"
                />
                <button
                  onClick={handlePatchComment}
                  className="text-gray-50 absolute bottom-[-36px] right-0 h-30 w-50 cursor-pointer items-center rounded-8 bg-blue px-12 py-6 text-12 font-semibold leading-[12px]"
                >
                  등록
                </button>
              </div>
            ) : (
              <div className="text-black-800 text-14 font-normal leading-[24px]">
                {comment.content}
              </div>
            )}
            <Image
              onClick={handleButtonVisible}
              className="cursor-pointer"
              src="/images/ic_kebab.svg"
              width={24}
              height={24}
              alt="케밥아이콘"
            />
            {isOpenDropdown ? (
              <div className="border-1px-solid-gray-30 flex-center absolute right-8 top-24 h-64 w-72 flex-col rounded-6 bg-white py-6 text-12 md:h-74 md:w-86 md:text-14">
                <div
                  onClick={handleEditComment}
                  className="text-black-900 flex-center cursor-pointer px-8 py-4 hover:rounded-4 hover:bg-skyblue md:px-12"
                >
                  수정하기
                </div>
                <div
                  onClick={handleDeleteComment}
                  className="text-black-900 flex-center cursor-pointer px-8 py-4 hover:rounded-4 hover:bg-skyblue md:px-12"
                >
                  삭제하기
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex items-center gap-8">
            {comment.writer.image ? (
              <div className="relative h-32 w-32">
                <Image fill src={comment.writer.image} alt="작성자 이미지" />
              </div>
            ) : (
              <div className="flex-center h-32 w-32 rounded-full bg-skyblue text-12 font-semibold leading-[15px] text-white">
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

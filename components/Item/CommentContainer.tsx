import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

import getProductComments from "@/api/products/productComments";
import { useRouter } from "next/router";
import { Comment } from "@/types";
import Image from "next/image";

const CommentContainer = () => {
  const [comments, setComments] = useState<Comment[]>();
  const router = useRouter();
  const { query, isReady } = router;

  useEffect(() => {
    if (isReady) {
      const productId = Number(query.productId);

      const loadComments = async () => {
        const data = await getProductComments(productId);
        setComments(data.list);
      };
      if (!isNaN(productId)) {
        loadComments();
      }
    }
  }, [isReady, query.productId]);

  if (!comments) return null;

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <CommentForm />
      {comments.map((comment: Comment) => (
        <CommentList key={comment.id} comment={comment} />
      ))}
      <button className="mx-auto mt-82 flex h-max w-max items-center gap-8 rounded-40 bg-blue px-64 py-12 text-18 font-semibold leading-[26px] text-white md:mt-79">
        목록으로 돌아가기{" "}
        <Image
          src="/images/ic_return.svg"
          width={24}
          height={24}
          alt="뒤로 가기 아이콘"
        />
      </button>
    </div>
  );
};

export default CommentContainer;
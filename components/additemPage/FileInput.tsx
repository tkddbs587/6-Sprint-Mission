const FileInput = () => {
  return (
    <>
      <div className="mb-12 text-18 font-bold text-[#1f2937]">상품 이미지</div>
      <label
        className="h-282 flex w-282 flex-col items-center justify-center rounded-12 bg-[#f3f4f6] text-[#9ca3af]"
        htmlFor="FileInput"
      >
        <div className="text-56 font-extralight">+</div>
        <div className="text-16">이미지 등록</div>
      </label>
      <input
        id="FileInput"
        className="hidden"
        type="file"
        placeholder="이미지 등록"
      />
    </>
  );
};

export default FileInput;

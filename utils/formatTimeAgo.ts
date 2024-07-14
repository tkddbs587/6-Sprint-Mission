// utils/formatTimeAgo.js
const formatTimeAgo = (dateString: string) => {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const units = [
    { label: "년", value: 60 * 60 * 24 * 365 },
    { label: "개월", value: 60 * 60 * 24 * 30 },
    { label: "일", value: 60 * 60 * 24 },
    { label: "시간", value: 60 * 60 },
    { label: "분", value: 60 },
    { label: "초", value: 1 },
  ];

  for (const unit of units) {
    const count = Math.floor(diffInSeconds / unit.value);
    if (count > 0) {
      return `${count}${unit.label} 전`;
    }
  }
  return "방금 전";
};

export default formatTimeAgo;

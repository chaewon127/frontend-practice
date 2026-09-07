export default function Card({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
    </div>
  );
}

// 두 개의 컴포넌트가 동시에 변경되었고, 하나만 업데이트 하려면
// npx jest src/components/Card/index.test.tsx --updateSnapshot

import Input from "@/components/Input";
import Badge from "@/components/Badge";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      {/* Input 컴포넌트 */}
      <div className="space-y-2 p-4 h-screen">
        {/* 기본 스타일 */}
        <Input type="text" placeholder="안녕하세요" />
        {/* className 추가 시 오버라이딩 */}
        <Input type="text" className="w-64 border-red-400" />
      </div>

      {/* Badge 컴포넌트 */}
      <div className="space-x-2 p-4 h-screen">
        <Badge>default</Badge>
        <Badge variant="secondary">secondary</Badge>
        <Badge variant="destructive">destructive</Badge>
        <Badge variant="outline">outline</Badge>
        <Badge className="bg-blue-500 text-white">custom</Badge>
      </div>

      {/* Card 컴포넌트 */}
      <div className="space-y-2 p-4 h-screen">
        {/* 기본 사용 */}
        <Card>
          <h2 className="mb-4 text-xl font-bold">제목</h2>
          <p className="text-gray-600">내용</p>
        </Card>
        {/* 옵션 지정 */}
        <Card variant="outlined" padding="lg" radius="lg">
          <h2 className="mb-4 text-xl font-bold">제목</h2>
          <p className="text-gray-600">내용</p>
        </Card>
        {/* 외부 className 추가 (tailwind-merge 덕분에 충돌 없이 적용) */}
        <Card variant="elevated" className="max-w-lg bg-red-100">
          <h2 className="mb-4 text-xl font-bold">제목</h2>
          <p className="text-gray-600">내용</p>
        </Card>
      </div>
    </div>
  );
}

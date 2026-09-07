export default function SnapshotButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return <button className="bg-red-500">{children}</button>;
}

// UI 변경이 의도된 것이라면 npx jest --updateSnapshot

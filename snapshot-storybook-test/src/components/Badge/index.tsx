export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block rounded-full bg-gray-100 text-gray-800 text-base px-3 py-2">
      {children}
    </div>
  );
}

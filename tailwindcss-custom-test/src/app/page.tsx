export default function Home() {
  return (
    <div className="flex flex-col gap-3 p-8">
      <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 hover:opacity-90">
        Default
      </button>

      <button className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 hover:opacity-90">
        Secondary
      </button>

      <button className="bg-destructive text-destructive-foreground rounded-md px-4 py-2 hover:opacity-90">
        Destructive
      </button>

      <button className="border-border hover:bg-muted rounded-md border px-4 py-2 border">
        Outline
      </button>

      <button className="hover:bg-muted rounded-md px-4 py-2">Ghost</button>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="p-6 w-full bg-sidebar flex flex-col items-center text-center text-sm space-y-2">
      <div className="flex items-center gap-1 text-sm">
        <span>Dedicated to</span>
        <span className="font-extrabold text-base">MYSELF</span>
      </div>
      <p className="font-semibold tracking-wide text-muted-foreground">
        Made by <span className="font-bold">Roby Tanama</span>
      </p>
    </footer>
  );
}

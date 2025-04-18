import { ChantTabs } from "@/components/chant-tabs";

export default function Home() {
  return (
    <div className="p-4 h-full flex flex-grow items-center justify-center flex-col gap-4">
      <p className="text-lg font-semibold tracking-widest">HOME SCREEN</p>
      <ChantTabs />
    </div>
  );
}

import { ChantTabs } from "@/components/chant-tabs";

export default function Home() {
  return (
    <div className="p-4 h-full flex flex-grow items-center justify-center flex-col gap-8">
      <p className="text-2xl font-bold">KBI Chant</p>
      <div className="flex flex-col gap-2 text-center">
        <p className="text-lg font-semibold text-primary">
          Select a chant to begin your practice
        </p>
        <p className="text-sm">
          Additionally, you can select the type of chant from the sidebar.
        </p>
      </div>
      <ChantTabs />
    </div>
  );
}

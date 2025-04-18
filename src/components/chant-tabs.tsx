"use client";

import ChineseNavCard from "./chinese-nav-card";

export function ChantTabs() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <ChineseNavCard
        hanzi={["甘", "露", "施", "食", "儀", "軌"]}
        pinyin={["gān", "lù", "shī", "shí", "yí", "guǐ"]}
        href="/kan-lu"
        description="Opening for offering and presentation"
      />
    </div>
  );
}

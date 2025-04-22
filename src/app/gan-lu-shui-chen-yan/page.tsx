import BackLink from "@/components/back-link";
import { HanziPinyin } from "@/components/hanzi-pinyin";
import { Separator } from "@/components/ui/separator";

export default function GanLuShuiChenYanPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-6 items-center">
      <div className="flex justify-start w-full">
        <BackLink href="/" />
      </div>
      <HanziPinyin
        size="lg"
        hanzi={["甘", "露", "水", "真", "言"]}
        pinyin={["kan", "lu", "suei", "cen", "yen"]}
      />
      <Separator />

      <div className="flex flex-col gap-3 items-center justify-center">
        <HanziPinyin
          hanzi={["南", "無", "蘇", "嚧", "婆", "耶", "。"]}
          pinyin={["na", "mo", "su", "lu", "po", "ye", ""]}
        />
        <HanziPinyin
          hanzi={["怛", "他", "耶", "多", "耶", "。"]}
          pinyin={["ta", "tha", "ye", "tuo", "ye", ""]}
        />
        <HanziPinyin
          hanzi={["怛", "姪", "他", "。"]}
          pinyin={["ta", "ce", "tha", ""]}
        />
        <HanziPinyin
          hanzi={["唵", "。", "蘇", "嚧", "蘇", "嚧"]}
          pinyin={["om", "", "su", "lu", "su", "lu"]}
        />
        <HanziPinyin
          hanzi={["鉢", "囉", "蘇", "嚧", "。"]}
          pinyin={["po", "la", "su", "lu", ""]}
        />
        <HanziPinyin
          hanzi={["鉢", "囉", "蘇", "嚧", "。"]}
          pinyin={["po", "la", "su", "lu", ""]}
        />
        <HanziPinyin
          hanzi={["娑", "婆", "訶", "。"]}
          pinyin={["suo", "pho", "he", ""]}
        />
        <p className="text-sm text-muted-foreground">（七遍 7×）</p>
      </div>
    </div>
  );
}

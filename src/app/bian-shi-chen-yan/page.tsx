import BackLink from "@/components/back-link";
import { HanziPinyin } from "@/components/hanzi-pinyin";
import { Separator } from "@/components/ui/separator";

export default function BianShiChenYanPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-6 items-center">
      <div className="flex justify-start w-full">
        <BackLink href="/" />
      </div>
      <HanziPinyin
        size="lg"
        hanzi={["變", "食", "真", "言"]}
        pinyin={["pien", "she", "cen", "yen"]}
      />
      <Separator />

      <div className="flex flex-col gap-3 items-center justify-center">
        <HanziPinyin
          hanzi={["南", "無", "薩", "囉", "怛", "他", "誐", "哆", "。"]}
          pinyin={["na", "mo", "sa", "wa", "ta", "tha", "ye", "tuo", ""]}
        />
        <HanziPinyin
          hanzi={["嚩", "嚕", "枳", "帝", "。"]}
          pinyin={["wa", "lu", "ce", "ti", ""]}
        />
        <HanziPinyin
          hanzi={["唵", "。", "三", "跋", "囉", "。"]}
          pinyin={["ōm", "", "san", "pa", "la", ""]}
        />
        <HanziPinyin
          hanzi={["三", "跋", "囉", "吽", "。"]}
          pinyin={["san", "pa", "la", "hōng", ""]}
        />
        <p className="text-sm text-muted-foreground">（七遍 7×）</p>
      </div>
    </div>
  );
}

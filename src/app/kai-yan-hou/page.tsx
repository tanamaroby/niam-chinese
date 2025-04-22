import BackLink from "@/components/back-link";
import { HanziPinyin } from "@/components/hanzi-pinyin";
import { Separator } from "@/components/ui/separator";

export default function KaiYanHouPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-6 items-center">
      <div className="flex justify-start w-full">
        <BackLink href="/" />
      </div>
      <HanziPinyin
        size="lg"
        hanzi={["開", "咽", "喉", "真", "言"]}
        pinyin={["khai", "yen", "hou", "cen", "yen"]}
      />
      <Separator />

      <div className="flex flex-col gap-3 items-center justify-center">
        <HanziPinyin
          hanzi={["唵", "。", "步", "步", "底", "哩", "伽", "哆", "哩", "。"]}
          pinyin={["om", "", "pu", "pu", "ti", "li", "chie", "tuo", "li", ""]}
        />
        <HanziPinyin
          hanzi={["怛", "哆", "誐", "哆", "耶", "。"]}
          pinyin={["ta", "tha", "ye", "tuo", "ye", ""]}
        />
        <p className="text-sm text-muted-foreground">（七遍 7×）</p>
      </div>
    </div>
  );
}

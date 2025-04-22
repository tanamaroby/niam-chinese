import BackLink from "@/components/back-link";
import { HanziPinyin } from "@/components/hanzi-pinyin";
import { Separator } from "@/components/ui/separator";

export default function PuCauChingPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-6 items-center">
      <div className="flex justify-start w-full">
        <BackLink href="/" />
      </div>
      <HanziPinyin
        size="lg"
        hanzi={["普", "召", "請", "真", "言"]}
        pinyin={["phu", "cau", "ching", "cen", "yen"]}
      />
      <Separator />

      <div className="flex flex-col gap-3 items-center justify-center">
        <HanziPinyin
          hanzi={["南", "無", "部", "部", "帝", "唎", "。"]}
          pinyin={["na", "mo", "pu", "pu", "ti", "li", ""]}
        />
        <HanziPinyin
          hanzi={["伽", "哩", "哆", "哩"]}
          pinyin={["chie", "li", "tuo", "li"]}
        />
        <HanziPinyin
          hanzi={["怛", "他", "誐", "哆", "耶", "。"]}
          pinyin={["ta", "tha", "ye", "tuo", "ye", ""]}
        />
        <p className="text-sm text-muted-foreground">（七遍 7×）</p>
      </div>
    </div>
  );
}

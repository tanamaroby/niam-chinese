import BackLink from "@/components/back-link";
import { HanziPinyin } from "@/components/hanzi-pinyin";
import { Separator } from "@/components/ui/separator";

export default function PuGongYangChenYanPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-6 items-center">
      <div className="flex justify-start w-full">
        <BackLink href="/" />
      </div>
      <HanziPinyin
        size="lg"
        hanzi={["普", "供", "養", "真", "言"]}
        pinyin={["phu", "kung", "yang", "cen", "yen"]}
      />
      <Separator />

      <div className="flex flex-col gap-3 items-center justify-center">
        <HanziPinyin
          hanzi={["唵", "。", "誐", "誐", "囊", "。"]}
          pinyin={["om", "", "ye", "ye", "nang", ""]}
        />
        <HanziPinyin
          hanzi={["三", "婆", "嚩", "。"]}
          pinyin={["san", "pho", "wa", ""]}
        />
        <HanziPinyin
          hanzi={["伐", "日", "囉", "斛", "。"]}
          pinyin={["fa", "je", "la", "hung", ""]}
        />
        <p className="text-sm text-muted-foreground">（三遍 3×）</p>
      </div>
    </div>
  );
}

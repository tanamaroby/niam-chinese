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
        pinyin={["biàn", "shí", "zhēn", "yán"]}
      />
      <Separator />

      <div className="flex flex-col gap-3 items-center justify-center">
        <HanziPinyin
          hanzi={["南", "無", "薩", "囉", "怛", "他", "誐", "哆", "唵", "。"]}
          pinyin={[
            "nán",
            "wú",
            "sà",
            "luó",
            "tà",
            "thā",
            "yē",
            "tuō",
            "ōm",
            "",
          ]}
        />
        <HanziPinyin
          hanzi={["嚩", "嚕", "枳", "帝", "。"]}
          pinyin={["wǎ", "lū", "zhǐ", "dì", ""]}
        />
        <HanziPinyin
          hanzi={["唵", "。", "三", "跋", "囉", "吽", "。"]}
          pinyin={["ōm", "", "sān", "bá", "luó", "hōng", ""]}
        />
        <p className="text-sm text-muted-foreground">（七遍 7×）</p>
      </div>
    </div>
  );
}

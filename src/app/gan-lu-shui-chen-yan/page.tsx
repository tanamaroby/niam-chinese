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
        pinyin={["gān", "lù", "shuǐ", "zhēn", "yán"]}
      />
      <Separator />

      <div className="flex flex-col gap-3 items-center justify-center">
        <HanziPinyin
          hanzi={["南", "無", "蘇", "嚧", "婆", "耶", "。"]}
          pinyin={["nán", "wú", "sū", "lú", "pó", "yé", ""]}
        />
        <HanziPinyin
          hanzi={["耶", "。", "怛", "侄", "他", "。"]}
          pinyin={["yé", "", "tà", "chí", "thā", ""]}
        />
        <HanziPinyin
          hanzi={["唵", "。", "蘇", "嚧", "蘇", "嚧"]}
          pinyin={["ōm", "", "sū", "lú", "sū", "lú"]}
        />
        <HanziPinyin
          hanzi={["鉢", "囉", "蘇", "嚧", "。"]}
          pinyin={["bō", "luó", "sū", "lú", ""]}
        />
        <HanziPinyin
          hanzi={["婆", "婆", "訶", "。"]}
          pinyin={["pó", "pó", "hē", ""]}
        />
        <p className="text-sm text-muted-foreground">（七遍 7×）</p>
      </div>
    </div>
  );
}

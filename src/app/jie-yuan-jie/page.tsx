import BackLink from "@/components/back-link";
import { HanziPinyin } from "@/components/hanzi-pinyin";
import { Separator } from "@/components/ui/separator";

export default function JieYuanJiePage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-6 items-center">
      <div className="flex justify-start w-full">
        <BackLink href="/" />
      </div>
      <HanziPinyin
        size="lg"
        hanzi={["解", "怨", "結", "真", "言"]}
        pinyin={["cie", "yüen", "cie", "cen", "yen"]}
        meaning="Mantra untuk melepaskan ikatan kebencian dan dendam."
      />
      <Separator />

      <div className="flex flex-col gap-3 items-center justify-center">
        <HanziPinyin
          hanzi={["唵", "。", "三", "陀", "羅"]}
          pinyin={["om", "", "san", "thuo", "la"]}
          meaning="Om. Tiga kekuatan penyelaras."
        />
        <HanziPinyin
          hanzi={["伽", "陀", "娑", "婆", "訶"]}
          pinyin={["chie", "tuo", "suo", "pho", "he"]}
          meaning="Segala ikatan dibebaskan, semoga damai tercapai."
        />
        <p className="text-sm text-muted-foreground">（七遍 7×）</p>
      </div>
    </div>
  );
}

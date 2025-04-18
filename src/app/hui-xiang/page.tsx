import BackLink from "@/components/back-link";
import { HanziPinyin } from "@/components/hanzi-pinyin";
import { Separator } from "@/components/ui/separator";

export default function HuiXiangPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-6 items-center">
      <div className="flex justify-start w-full">
        <BackLink href="/" />
      </div>

      <HanziPinyin
        size="lg"
        hanzi={["迴", "向", "偈"]}
        pinyin={["huí", "xiàng", "jì"]}
      />
      <Separator />

      <div className="flex flex-col gap-3 items-center justify-center">
        <HanziPinyin
          hanzi={["願", "生", "西", "方", "淨", "土", "中"]}
          pinyin={["yuàn", "shēng", "xī", "fāng", "jìng", "tǔ", "zhōng"]}
        />
        <HanziPinyin
          hanzi={["九", "品", "蓮", "花", "為", "父", "母"]}
          pinyin={["jiǔ", "pǐn", "lián", "huā", "wèi", "fù", "mǔ"]}
        />
        <HanziPinyin
          hanzi={["花", "開", "見", "佛", "悟", "無", "生"]}
          pinyin={["huā", "kāi", "jiàn", "fó", "wù", "wú", "shēng"]}
        />
        <HanziPinyin
          hanzi={["不", "退", "菩", "薩", "為", "伴", "侶"]}
          pinyin={["bù", "tuì", "pú", "sà", "wèi", "bàn", "lǚ"]}
        />
      </div>
    </div>
  );
}

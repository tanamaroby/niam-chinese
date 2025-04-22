import BackLink from "@/components/back-link";
import { HanziPinyin } from "@/components/hanzi-pinyin";
import { Separator } from "@/components/ui/separator";

export default function SheWuCeSheChenYanPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-8 items-center">
      <div className="flex justify-start w-full">
        <BackLink href="/" />
      </div>

      <HanziPinyin
        size="lg"
        hanzi={["施", "無", "遮", "食", "真", "言"]}
        pinyin={["she", "wu", "ce", "she", "cen", "yen"]}
      />
      <Separator />

      {/* PAGI */}
      <div className="w-full max-w-xl flex flex-col gap-3">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Morning</p>
          <p className="text-xs text-muted-foreground italic">
            Chant anytime before offering incense or food in the morning.
          </p>
        </div>
        <HanziPinyin
          hanzi={["法", "力", "不", "思", "議", "慈", "悲", "無", "障", "礙"]}
          pinyin={[
            "fa",
            "li",
            "pu",
            "she",
            "yi",
            "che",
            "pei",
            "wu",
            "cang",
            "ai",
          ]}
        />
        <HanziPinyin
          hanzi={["七", "粒", "偏", "十", "方", "普", "施", "周", "沙", "界"]}
          pinyin={[
            "chi",
            "li",
            "phien",
            "she",
            "fang",
            "phu",
            "she",
            "cou",
            "sa",
            "cie",
          ]}
        />
        <HanziPinyin
          hanzi={["唵", "度", "利", "益", "莎", "訶"]}
          pinyin={["om", "tu", "li", "yi", "suo", "he"]}
        />
        <p className="text-sm text-muted-foreground text-center">7x</p>
      </div>

      {/* SIANG */}
      <div className="w-full max-w-xl flex flex-col gap-3">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Midday</p>
          <p className="text-xs text-muted-foreground italic">
            Recite before lunch or afternoon offerings.
          </p>
        </div>
        <HanziPinyin
          hanzi={["大", "鵬", "金", "翅", "鳥", "曠", "野", "鬼", "神", "眾"]}
          pinyin={[
            "ta",
            "pheng",
            "cin",
            "che",
            "niau",
            "khuang",
            "ye",
            "kuei",
            "sen",
            "cung",
          ]}
        />
        <HanziPinyin
          hanzi={["羅", "刹", "鬼", "子", "母", "甘", "露", "悉", "充", "滿"]}
          pinyin={[
            "luo",
            "cha",
            "kuei",
            "ce",
            "mu",
            "kan",
            "lu",
            "si",
            "chung",
            "man",
          ]}
        />
        <HanziPinyin
          hanzi={["唵", "穆", "帝", "莎", "訶"]}
          pinyin={["om", "mu", "ti", "suo", "he"]}
        />
        <p className="text-sm text-muted-foreground text-center">7x</p>
      </div>

      {/* MALAM */}
      <div className="w-full max-w-xl flex flex-col gap-3">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Evening</p>
          <p className="text-xs text-muted-foreground italic">
            Recite before evening offerings or before bed.
          </p>
        </div>
        <HanziPinyin
          hanzi={["沒", "等", "鬼", "神", "眾", "我", "今", "施", "沒", "供"]}
          pinyin={[
            "ju",
            "teng",
            "kuei",
            "sen",
            "cung",
            "wo",
            "cin",
            "she",
            "ju",
            "kung",
          ]}
        />
        <HanziPinyin
          hanzi={["此", "食", "偏", "十", "方", "一", "切", "鬼", "神", "共"]}
          pinyin={[
            "che",
            "she",
            "phien",
            "she",
            "fang",
            "yi",
            "chie",
            "kuei",
            "sen",
            "kung",
          ]}
        />
        <HanziPinyin
          hanzi={["唵", "穆", "利", "陸", "莎", "訶"]}
          pinyin={["om", "mu", "li", "ling", "suo", "he"]}
        />
        <p className="text-sm text-muted-foreground text-center">7x</p>
      </div>
    </div>
  );
}

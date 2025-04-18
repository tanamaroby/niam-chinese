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
        pinyin={["shī", "wú", "zhē", "shí", "zhēn", "yán"]}
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
            "fǎ",
            "lì",
            "bù",
            "sī",
            "yì",
            "cí",
            "bēi",
            "wú",
            "zhàng",
            "ài",
          ]}
        />
        <HanziPinyin
          hanzi={["七", "粒", "偏", "十", "方", "普", "施", "周", "沙", "界"]}
          pinyin={[
            "qī",
            "lì",
            "piān",
            "shí",
            "fāng",
            "pǔ",
            "shī",
            "zhōu",
            "shā",
            "jiè",
          ]}
        />
        <HanziPinyin
          hanzi={["唵", "度", "利", "益", "莎", "訶"]}
          pinyin={["ǒm", "dù", "lì", "yì", "suō", "hē"]}
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
            "dà",
            "péng",
            "jīn",
            "chì",
            "niǎo",
            "kuàng",
            "yě",
            "guǐ",
            "shén",
            "zhòng",
          ]}
        />
        <HanziPinyin
          hanzi={["羅", "刹", "鬼", "子", "母", "甘", "露", "悉", "充", "滿"]}
          pinyin={[
            "luó",
            "chà",
            "guǐ",
            "zǐ",
            "mǔ",
            "gān",
            "lù",
            "xī",
            "chōng",
            "mǎn",
          ]}
        />
        <HanziPinyin
          hanzi={["唵", "穆", "帝", "莎", "訶"]}
          pinyin={["ǒm", "mù", "dì", "suō", "hē"]}
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
            "mò",
            "děng",
            "guǐ",
            "shén",
            "zhòng",
            "wǒ",
            "jīn",
            "shī",
            "mò",
            "gòng",
          ]}
        />
        <HanziPinyin
          hanzi={["此", "食", "偏", "十", "方", "一", "切", "鬼", "神", "共"]}
          pinyin={[
            "cǐ",
            "shí",
            "piān",
            "shí",
            "fāng",
            "yī",
            "qiè",
            "guǐ",
            "shén",
            "gòng",
          ]}
        />
        <HanziPinyin
          hanzi={["唵", "穆", "利", "陸", "莎", "訶"]}
          pinyin={["ǒm", "mù", "lì", "lù", "suō", "hē"]}
        />
        <p className="text-sm text-muted-foreground text-center">7x</p>
      </div>
    </div>
  );
}

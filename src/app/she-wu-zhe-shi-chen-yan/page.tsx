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
        meaning="Mantra untuk mempersembahkan makanan tanpa batasan kepada semua makhluk di sepuluh penjuru."
      />
      <Separator />

      {/* PAGI */}
      <div className="w-full max-w-xl flex flex-col gap-3">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Pagi</p>
          <p className="text-xs text-muted-foreground italic">
            Dibaca sebelum persembahan dupa atau makanan di pagi hari.
          </p>
        </div>
        <HanziPinyin
          hanzi={["法", "力", "不", "思", "議"]}
          pinyin={["fa", "li", "pu", "she", "yi"]}
          meaning="Kekuatan Dharma tidak dapat dibayangkan."
        />
        <HanziPinyin
          hanzi={["慈", "悲", "無", "障", "礙"]}
          pinyin={["che", "pei", "wu", "cang", "ai"]}
          meaning="Welas asih tanpa rintangan."
        />
        <HanziPinyin
          hanzi={["七", "粒", "偏", "十", "方"]}
          pinyin={["chi", "li", "phien", "she", "fang"]}
          meaning="Tujuh butir tersebar ke sepuluh penjuru."
        />
        <HanziPinyin
          hanzi={["普", "施", "周", "沙", "界"]}
          pinyin={["phu", "she", "cou", "sa", "cie"]}
          meaning="Merata memberikan ke seluruh dunia seperti butiran pasir."
        />
        <HanziPinyin
          hanzi={["唵", "度", "利", "益", "莎", "訶"]}
          pinyin={["om", "tu", "li", "yi", "suo", "he"]}
          meaning="Om. Memberikan manfaat dan kesejahteraan."
        />
        <p className="text-sm text-muted-foreground text-center">7x</p>
      </div>

      {/* SIANG */}
      <div className="w-full max-w-xl flex flex-col gap-3">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Siang</p>
          <p className="text-xs text-muted-foreground italic">
            Dibaca sebelum makan siang atau persembahan sore.
          </p>
        </div>
        <HanziPinyin
          hanzi={["大", "鵬", "金", "翅", "鳥"]}
          pinyin={["ta", "pheng", "cin", "che", "niau"]}
          meaning="Garuda besar bersayap emas."
        />
        <HanziPinyin
          hanzi={["曠", "野", "鬼", "神", "眾"]}
          pinyin={["khuang", "ye", "kuei", "sen", "cung"]}
          meaning="Makhluk halus dan dewa di alam terbuka."
        />
        <HanziPinyin
          hanzi={["羅", "刹", "鬼", "子", "母"]}
          pinyin={["luo", "cha", "kuei", "ce", "mu"]}
          meaning="Ibu dan anak dari ras makhluk halus."
        />
        <HanziPinyin
          hanzi={["甘", "露", "悉", "充", "滿"]}
          pinyin={["kan", "lu", "si", "chung", "man"]}
          meaning="Diberkahi sepenuhnya dengan nektar suci."
        />
        <HanziPinyin
          hanzi={["唵", "穆", "帝", "莎", "訶"]}
          pinyin={["om", "mu", "ti", "suo", "he"]}
          meaning="Om. Mantra damai dan pengayoman."
        />
        <p className="text-sm text-muted-foreground text-center">7x</p>
      </div>

      {/* MALAM */}
      <div className="w-full max-w-xl flex flex-col gap-3">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Malam</p>
          <p className="text-xs text-muted-foreground italic">
            Dibaca sebelum persembahan malam atau sebelum tidur.
          </p>
        </div>
        <HanziPinyin
          hanzi={["沒", "等", "鬼", "神", "眾"]}
          pinyin={["ju", "teng", "kuei", "sen", "cung"]}
          meaning="Makhluk halus malam yang tak terhitung jumlahnya."
        />
        <HanziPinyin
          hanzi={["我", "今", "施", "沒", "供"]}
          pinyin={["wo", "cin", "she", "ju", "kung"]}
          meaning="Aku sekarang memberikan persembahan malam."
        />
        <HanziPinyin
          hanzi={["此", "食", "偏", "十", "方"]}
          pinyin={["che", "she", "phien", "she", "fang"]}
          meaning="Makanan ini tersebar ke sepuluh penjuru."
        />
        <HanziPinyin
          hanzi={["一", "切", "鬼", "神", "共"]}
          pinyin={["yi", "chie", "kuei", "sen", "kung"]}
          meaning="Semua makhluk halus bersama-sama menikmati."
        />
        <HanziPinyin
          hanzi={["唵", "穆", "利", "陸", "莎", "訶"]}
          pinyin={["om", "mu", "li", "ling", "suo", "he"]}
          meaning="Om. Semoga manfaat tersebar luas dan abadi."
        />
        <p className="text-sm text-muted-foreground text-center">7x</p>
      </div>
    </div>
  );
}

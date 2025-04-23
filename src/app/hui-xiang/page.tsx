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
        pinyin={["huei", "siang", "ci"]}
        meaning="Gatha pelimpahan jasa setelah melakukan kebajikan."
      />
      <Separator />

      <div className="flex flex-col gap-3 items-center justify-center">
        <HanziPinyin
          hanzi={["願", "生", "西", "方", "淨", "土", "中"]}
          pinyin={["yüen", "seng", "si", "fang", "cing", "thu", "cung"]}
          meaning="Semoga terlahir di Tanah Suci Barat."
        />
        <HanziPinyin
          hanzi={["九", "品", "蓮", "花", "為", "父", "母"]}
          pinyin={["ciou", "phin", "lien", "hua", "wei", "fu", "mu"]}
          meaning="Terlahir dalam bunga teratai dari sembilan tingkatan untuk ayah dan ibu."
        />
        <HanziPinyin
          hanzi={["花", "開", "見", "佛", "悟", "無", "生"]}
          pinyin={["hua", "khai", "cien", "fo", "wu", "wu", "seng"]}
          meaning="Saat bunga mekar melihat Buddha dan menyadari ketanpaan kelahiran."
        />
        <HanziPinyin
          hanzi={["不", "退", "菩", "薩", "為", "伴", "侶"]}
          pinyin={["pu", "thuei", "phu", "sa", "wei", "pan", "lü"]}
          meaning="Didampingi oleh para Bodhisattva yang tidak mundur."
        />
      </div>
    </div>
  );
}

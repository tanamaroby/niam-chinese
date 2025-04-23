import BackLink from "@/components/back-link";
import { HanziPinyin } from "@/components/hanzi-pinyin";
import { Separator } from "@/components/ui/separator";

export default function HuiXiangCiExtendedPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-6 items-center">
      <div className="flex justify-start w-full">
        <BackLink href="/" />
      </div>

      <HanziPinyin
        size="lg"
        hanzi={["迴", "向", "偈"]}
        pinyin={["huei", "siang", "ci"]}
        meaning="Gatha pelimpahan jasa yang diperluas setelah membaca sutra atau mantra."
      />

      <Separator />

      <div className="flex flex-col gap-5 items-center justify-center">
        <HanziPinyin
          hanzi={["願", "以", "持", "咒", "念", "佛", "功", "德"]}
          pinyin={["yüen", "yi", "che", "cou", "nien", "fo", "kung", "te"]}
          meaning="Semoga jasa kebajikan dari pelafalan mantra dan Buddha,"
        />
        <HanziPinyin
          hanzi={["迴", "向", "此", "地"]}
          pinyin={["huei", "siang", "che", "ti"]}
          meaning="Kami limpahkan kepada tempat ini,"
        />
        <HanziPinyin
          hanzi={["附", "近", "所", "有", "護", "法", "神"]}
          pinyin={["fu", "jin", "suo", "you", "hu", "fa", "sen"]}
          meaning="Para makhluk pelindung Dhamma,"
        />
        <HanziPinyin
          hanzi={["鬼", "神", "眾", "地", "基", "主"]}
          pinyin={["kuei", "sen", "cung", "ti", "ji", "cu"]}
          meaning="Para makhluk alam rendah, Dewa Bumi,"
        />
        <HanziPinyin
          hanzi={["無", "主", "孤", "魂", "孤", "魂", "野", "鬼"]}
          pinyin={["wu", "chu", "ku", "hun", "ye", "kuei"]}
          meaning="Para makhluk alam semesta bebas yang terlihat maupun tidak terlihat,"
        />
        <HanziPinyin
          hanzi={["各", "人", "累", "劫", "冤", "親", "債", "主"]}
          pinyin={["ke", "jen", "lei", "cie", "yüan", "chien", "zhai", "cu"]}
          meaning="Para makhluk yang ada ikatan karma kita di masa lampau,"
        />
        <HanziPinyin
          hanzi={["各", "姓", "名", "宗", "歷", "代", "祖", "先"]}
          pinyin={["ke", "sing", "ming", "cung", "li", "tai", "cu", "sien"]}
          meaning="Kepada para leluhur,"
        />
        <HanziPinyin
          hanzi={["所", "有", "被", "墮", "胎", "嬰", "兒"]}
          pinyin={["suo", "you", "pei", "tuo", "thai", "ying", "er"]}
          meaning="Kepada para bayi yang keguguran baik yang disengaja maupun tidak disengaja,"
        />
        <HanziPinyin
          hanzi={["十", "方", "法", "界"]}
          pinyin={["she", "fang", "fa", "cie"]}
          meaning="Makhluk di sepuluh penjuru,"
        />
        <HanziPinyin
          hanzi={["六", "道", "群", "靈"]}
          pinyin={["liu", "tau", "chin", "ling"]}
          meaning="Makhluk di enam alam kehidupan,"
        />
        <HanziPinyin
          hanzi={["發", "願", "往", "生", "西", "方", "極", "樂", "世", "界"]}
          pinyin={[
            "fa",
            "yüen",
            "wang",
            "seng",
            "si",
            "fang",
            "ci",
            "le",
            "she",
            "cie",
          ]}
          meaning="Bertekad terlahir di tanah suci Sukhavati."
        />
        <HanziPinyin
          hanzi={["消", "災", "一", "切", "眾", "生"]}
          pinyin={["siau", "cai", "yi", "chie", "cung", "seng"]}
          meaning="Mengikis penderitaan semua makhluk,"
        />
        <HanziPinyin
          hanzi={["所", "有", "病", "苦", "者"]}
          pinyin={["suo", "you", "ping", "khu", "ce"]}
          meaning="termasuk mereka yang sedang sakit,"
        />
        <HanziPinyin
          hanzi={["布", "施", "者"]}
          pinyin={["pu", "she", "ce"]}
          meaning="para dermawan,"
        />
        <HanziPinyin
          hanzi={["誦", "經", "者"]}
          pinyin={["sung", "ching", "ce"]}
          meaning="dan umat yang melafalkan sutra ini."
        />
        <HanziPinyin
          hanzi={["業", "障", "消", "除"]}
          pinyin={["ye", "cang", "siau", "chu"]}
          meaning="Menghapus segala karma buruk."
        />
        <HanziPinyin
          hanzi={["法", "體", "安", "康"]}
          pinyin={["fa", "ti", "an", "khang"]}
          meaning="Semoga tubuh Dhamma tenteram."
        />
        <HanziPinyin
          hanzi={["莊", "嚴", "佛", "淨", "土"]}
          pinyin={["chuang", "yen", "fo", "ching", "thu"]}
          meaning="Memperindah tanah suci para Buddha."
        />
        <HanziPinyin
          hanzi={["上", "報", "四", "重", "恩"]}
          pinyin={["sang", "pau", "she", "chung", "en"]}
          meaning="Membalas empat budi besar."
        />
        <HanziPinyin
          hanzi={["下", "濟", "三", "途", "苦"]}
          pinyin={["sia", "ci", "san", "thu", "khu"]}
          meaning="Menolong makhluk di tiga alam penderitaan."
        />
        <HanziPinyin
          hanzi={["若", "有", "見", "聞", "者"]}
          pinyin={["juo", "you", "cien", "wen", "ce"]}
          meaning="Bila ada yang melihat dan mendengar,"
        />
        <HanziPinyin
          hanzi={["悉", "發", "菩", "提", "心"]}
          pinyin={["si", "fa", "phu", "thi", "sin"]}
          meaning="Bangkitlah Bodhicitta (tekad pencerahan)."
        />
        <HanziPinyin
          hanzi={["盡", "此", "一", "報", "身"]}
          pinyin={["cin", "che", "yi", "pau", "shen"]}
          meaning="Sampai di akhir kehidupan ini,"
        />
        <HanziPinyin
          hanzi={["同", "生", "極", "樂", "國"]}
          pinyin={["thung", "seng", "ji", "le", "kuo"]}
          meaning="Bersama-sama terlahir di tanah suci Sukhavati."
        />
      </div>
    </div>
  );
}

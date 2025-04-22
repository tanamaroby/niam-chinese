import BackLink from "@/components/back-link";
import { HanziPinyin } from "@/components/hanzi-pinyin";
import { Separator } from "@/components/ui/separator";

export default function KanLuPage() {
  return (
    <div className="p-4 pt-0 flex flex-col gap-6 items-center">
      <div className="flex justify-start w-full">
        <BackLink href="/" />
      </div>
      <HanziPinyin
        size="lg"
        hanzi={["甘", "露", "施", "食", "儀", "軌"]}
        pinyin={["kan", "lu", "she", "she", "yi", "kuei"]}
      />
      <Separator />

      <div className="flex flex-col gap-3 items-center justify-center">
        <HanziPinyin
          hanzi={["南", "無", "佛", "陀", "耶", "。"]}
          pinyin={["na", "mo", "fo", "thuo", "ye", ""]}
        />
        <HanziPinyin
          hanzi={["南", "無", "達", "摩", "耶", "。"]}
          pinyin={["na", "mo", "ta", "mo", "ye", ""]}
        />
        <HanziPinyin
          hanzi={["南", "無", "僧", "伽", "耶", "。"]}
          pinyin={["na", "mo", "seng", "chie", "ye", ""]}
        />
        <HanziPinyin
          hanzi={[
            "南",
            "無",
            "本",
            "尊",
            "釋",
            "迦",
            "牟",
            "尼",
            "如",
            "來",
            "。",
          ]}
          pinyin={[
            "na",
            "mo",
            "pen",
            "cun",
            "she",
            "cia",
            "mou",
            "ni",
            "ju",
            "lai",
            "",
          ]}
        />
        <HanziPinyin
          hanzi={["南", "無", "安", "住", "大", "地", "菩", "薩", "眾", "。"]}
          pinyin={["na", "mo", "an", "cu", "ta", "ti", "phu", "sa", "cung", ""]}
        />
        <HanziPinyin
          hanzi={["南", "無", "一", "切", "龍", "天", "善", "神", "。"]}
          pinyin={["na", "mo", "yi", "chie", "lung", "thien", "san", "sen", ""]}
        />
        <HanziPinyin
          hanzi={["願", "以", "威", "神", "加", "哀", "護", "助", "。"]}
          pinyin={["yüen", "yi", "wei", "sen", "cia", "ai", "hu", "cu", ""]}
        />

        {/* Page 2 begins here */}
        <HanziPinyin
          hanzi={["我", "今", "召", "請", "十", "方", "剎", "土", "。"]}
          pinyin={[
            "wo",
            "cin",
            "cau",
            "ching",
            "she",
            "fang",
            "cha",
            "thu",
            "",
          ]}
        />
        <HanziPinyin
          hanzi={["盡", "虛", "空", "界", "。", "一", "切", "六", "趣", "。"]}
          pinyin={[
            "cin",
            "sü",
            "khung",
            "cie",
            "",
            "yi",
            "chie",
            "liou",
            "chü",
            "",
          ]}
        />
        <HanziPinyin
          hanzi={["餓", "鬼", "有", "情", "類", "。", "以", "三", "寶", "威"]}
          pinyin={[
            "e",
            "kuei",
            "you",
            "ching",
            "lei",
            "",
            "yi",
            "san",
            "pau",
            "wei",
          ]}
        />
        <HanziPinyin
          hanzi={["神", "力", "故", "。", "悉", "至", "我", "所", "。"]}
          pinyin={["sen", "li", "ku", "", "si", "ce", "wo", "suo", ""]}
        />
      </div>
    </div>
  );
}

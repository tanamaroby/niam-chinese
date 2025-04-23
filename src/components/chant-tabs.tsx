"use client";

import { ChantSection } from "./chant-section";
import ChineseNavCard from "./chinese-nav-card";

export function ChantTabs() {
  return (
    <ChantSection
      title="甘露施食法會"
      description="Mantra dan tata ritual persembahan kepada makhluk kelaparan dan semua makhluk di sepuluh penjuru alam."
    >
      <ChineseNavCard
        hanzi={["甘", "露", "施", "食", "儀", "軌"]}
        href="/kan-lu"
        pinyin={["kan", "lu", "she", "she", "yi", "kuei"]}
        description="Teks ritual Buddhis untuk memberikan makanan kepada makhluk kelaparan dan memohon berkah dari nektar suci."
      />
      <ChineseNavCard
        hanzi={["普", "召", "請", "真", "言"]}
        pinyin={["phu", "cau", "ching", "cen", "yen"]}
        href="/pu-cau-ching-chen-yan"
        description="Mantra pemanggilan universal yang dibaca tujuh kali untuk mengundang semua makhluk menghadiri persembahan Dharma."
      />
      <ChineseNavCard
        hanzi={["解", "怨", "結", "真", "言"]}
        pinyin={["cie", "yüen", "cie", "cen", "yen"]}
        href="/jie-yuan-jie"
        description="Mantra untuk melepaskan dendam dan ikatan kebencian, dibaca tujuh kali dengan niat penuh."
      />
      <ChineseNavCard
        hanzi={["開", "咽", "喉", "真", "言"]}
        pinyin={["khai", "yen", "hou", "cen", "yen"]}
        href="/kai-yan-hou"
        description="Mantra untuk membuka tenggorokan makhluk agar dapat menerima makanan persembahan tanpa halangan. Dibaca tujuh kali."
      />
      <ChineseNavCard
        hanzi={["變", "食", "真", "言"]}
        pinyin={["pien", "she", "cen", "yen"]}
        href="/bian-shi-chen-yan"
        description="Mantra untuk mentransformasi makanan menjadi berkah suci. Umumnya dibaca sebelum mempersembahkan makanan. Dibaca tujuh kali."
      />
      <ChineseNavCard
        hanzi={["甘", "露", "水", "真", "言"]}
        pinyin={["kan", "lu", "suei", "cen", "yen"]}
        href="/gan-lu-shui-chen-yan"
        description="Mantra untuk menyucikan dan memberkahi air suci yang akan digunakan dalam persembahan. Dibaca tujuh kali."
      />
      <ChineseNavCard
        hanzi={["普", "供", "養", "真", "言"]}
        pinyin={["phu", "kung", "yang", "cen", "yen"]}
        href="/pu-gong-yang-chen-yan"
        description="Mantra persembahan universal untuk mempersembahkan jasa dan berkah kepada semua makhluk. Dibaca tiga kali."
      />
      <ChineseNavCard
        hanzi={["施", "無", "遮", "食", "真", "言"]}
        pinyin={["she", "wu", "ce", "she", "cen", "yen"]}
        href="/she-wu-zhe-shi-chen-yan"
        description="Dibaca pagi, siang, dan malam sebagai persembahan makanan tanpa batasan kepada semua makhluk di seluruh alam."
      />
      <ChineseNavCard
        hanzi={["迴", "向", "偈"]}
        pinyin={["huei", "siang", "ci"]}
        href="/hui-xiang"
        description="Gatha pelimpahan jasa setelah selesai membaca mantra, untuk mendoakan orang tua dan semua makhluk."
      />
      <ChineseNavCard
        hanzi={["迴", "向", "偈", ""]}
        pinyin={["huei", "siang", "ci", "(Extended)"]}
        href="/hui-xiang-extended"
        description="Gatha pelimpahan jasa yang diperluas setelah membaca sutra atau mantra. Ini versi yang lebih panjang."
      />
    </ChantSection>
  );
}

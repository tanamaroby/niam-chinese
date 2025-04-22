"use client";

import { ChantSection } from "./chant-section";
import ChineseNavCard from "./chinese-nav-card";

export function ChantTabs() {
  return (
    <ChantSection
      title="甘露施食法會"
      description="Mantras and rituals used for offerings to hungry ghosts and sentient beings."
    >
      <ChineseNavCard
        hanzi={["甘", "露", "施", "食", "儀", "軌"]}
        href="/kan-lu"
        pinyin={["kan", "lu", "she", "she", "yi", "kuei"]}
        description="A Buddhist ritual text for offering food to hungry ghosts and invoking the blessings of divine nectar."
      />
      <ChineseNavCard
        hanzi={["普", "召", "請", "真", "言"]}
        pinyin={["phu", "cau", "ching", "cen", "yen"]}
        href="/pu-cau-ching-chen-yan"
        description="Universal invocation mantra chanted seven times to call forth all beings for the Dharma offering."
      />
      <ChineseNavCard
        hanzi={["解", "怨", "結", "真", "言"]}
        pinyin={["jiě", "yuàn", "jié", "zhēn", "yán"]}
        href="/jie-yuan-jie"
        description="Mantra for releasing resentment and dissolving karmic entanglements, chanted seven times with intention."
      />
      <ChineseNavCard
        hanzi={["開", "咽", "喉", "真", "言"]}
        pinyin={["kāi", "yàn", "hóu", "zhēn", "yán"]}
        href="/kai-yan-hou"
        description="Chant used to open the throats of beings so they may receive offerings without obstruction. Repeated seven times."
      />
      <ChineseNavCard
        hanzi={["變", "食", "真", "言"]}
        pinyin={["biàn", "shí", "zhēn", "yán"]}
        href="/bian-shi-chen-yan"
        description="Mantra to transform offerings into pure nourishment for all beings. Often chanted before food offering rituals. Repeat seven times."
      />
      <ChineseNavCard
        hanzi={["甘", "露", "水", "真", "言"]}
        pinyin={["gān", "lù", "shuǐ", "zhēn", "yán"]}
        href="/gan-lu-shui-chen-yan"
        description="Mantra for purifying and empowering blessed water used in offerings. Often recited seven times before sprinkling."
      />
      <ChineseNavCard
        hanzi={["普", "供", "養", "真", "言"]}
        pinyin={["pǔ", "gòng", "yǎng", "zhēn", "yán"]}
        href="/pu-gong-yang-chen-yan"
        description="Universal offering mantra to dedicate offerings and merit to all sentient beings across realms. Recite three times."
      />
      <ChineseNavCard
        hanzi={["施", "無", "遮", "食", "真", "言"]}
        pinyin={["shī", "wú", "zhē", "shí", "zhēn", "yán"]}
        href="/she-wu-zhe-shi-chen-yan"
        description="Chanted three times daily — morning, midday, and evening — to offer food and merit to all sentient beings across realms."
      />
      <ChineseNavCard
        hanzi={["迴", "向", "偈"]}
        pinyin={["huí", "xiàng", "jì"]}
        href="/hui-xiang"
        description="Dedication verse for transferring merit to all beings and honoring parents. Often recited after completion of chanting."
      />
    </ChantSection>
  );
}

"use client";

import { Play } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { HanziPinyin } from "./hanzi-pinyin";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader } from "./ui/card";

interface ChineseNavCardProps {
  hanzi: string[];
  pinyin: string[];
  href: string;
  description?: string;
}

const ChineseNavCard: FC<ChineseNavCardProps> = ({
  hanzi,
  pinyin,
  href,
  description,
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <HanziPinyin hanzi={hanzi} pinyin={pinyin} />
            {description && (
              <CardDescription className="text-muted-foreground text-sm">
                {description}
              </CardDescription>
            )}
          </div>
          <Link href={href}>
            <Button size="icon" className="rounded-full">
              <Play fill="white" />
            </Button>
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ChineseNavCard;

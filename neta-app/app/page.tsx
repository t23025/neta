"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./components/button";
import { AvailabilitySelector } from "./components/AvailabilitySelector";
import { Card, CardContent } from "./components/card";
import { Input } from "./components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/select";

export const MacbookPro = (): JSX.Element => {
  const router = useRouter();

  const years = ["none", "2021", "2022", "2023", "2024", "2025"];
  const months = [
    "none", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
  ];
  const performanceTypes = ["none", "瀬戸内海のカロ貝屋", "瀬戸内海のカロカロ貝屋"];

  const [keyword, setKeyword] = useState<string>("");
  const [startYear, setStartYear] = useState<string>("none");
  const [startMonth, setStartMonth] = useState<string>("none");
  const [endYear, setEndYear] = useState<string>("none");
  const [endMonth, setEndMonth] = useState<string>("none");
  const [durationMax, setDurationMax] = useState<string>("");
  const [durationMin, setDurationMin] = useState<string>("");
  const [dialect, setDialect] = useState<string | null>(null);
  const [kaga, setKaga] = useState<string | null>(null);
  const [kaya, setKagaya] = useState<string | null>(null);
  const [performanceType, setPerformanceType] = useState<string>("none");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (keyword) params.append("query1", keyword);
    if (performanceType !== "none") params.append("query2", performanceType);
    if (startYear !== "none") params.append("startYear", startYear);
    if (startMonth !== "none") params.append("startMonth", startMonth);
    if (endYear !== "none") params.append("endYear", endYear);
    if (endMonth !== "none") params.append("endMonth", endMonth);
    if (durationMin) params.append("durationMin", durationMin);
    if (durationMax) params.append("durationMax", durationMax);
    if (dialect) params.append("dialect", dialect);
    if (kaga) params.append("kaga", kaga);
    if (kaya) params.append("kaya", kaya);

    router.push(`/api?${params.toString()}`);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f4eddd]">
      <div className="max-w-[1512px] w-full mx-auto px-4">
        <div className="relative min-h-screen">
          <h1 className="w-full pt-[47px] text-black text-[64px] text-center font-normal font-inter">
            かが屋文庫 ネタ検索
          </h1>

          <main className="mx-auto w-full mt-[30px] px-4">
            <div className="text-center text-[#707070] text-xl mb-12 font-inter font-normal">
              ※これは非公式サイトです※<br />
              かが屋のオフィシャルコントchかが屋文庫(YouTube)に<br />
              掲載されているもののみ、まとめています。
            </div>

            <div className="mb-8 relative">
              <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="h-[69px] rounded-[10px] border border-solid border-black bg-[#faf6ee] pl-4 text-3xl font-inter font-normal"
                placeholder="キーワードを入力"
              />
              <Button
                className="absolute right-0 top-0 h-[69px] w-[97px] rounded-r-[10px] bg-black border border-solid border-black border-l-0 flex items-center justify-center"
                aria-label="検索"
                onClick={handleSearch}
              >
                <span className="text-4xl">🔍</span>
              </Button>
            </div>

            <Card className="border-none bg-transparent shadow-none">
              <CardContent className="p-0">
                <h2 className="text-[25px] mb-6 font-inter font-normal">
                  詳細検索
                </h2>

                <form className="text-[32px] font-inter font-normal">
                  {/* 投稿日時 */}
                  <div className="flex items-center mb-8">
                    <label className="flex-shrink-0">〇投稿年月</label>
                    <div className="flex items-center gap-2 ml-8">
                      <Select value={startYear} onValueChange={setStartYear}>
                        <SelectTrigger className="w-[139px] h-[66px] bg-[#faf6ee] rounded-[10px] border border-solid border-black text-[32px]">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year === "none" ? "未選択" : year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span>年</span>

                      <Select value={startMonth} onValueChange={setStartMonth}>
                        <SelectTrigger className="w-[115px] h-[66px] bg-[#faf6ee] rounded-[10px] border border-solid border-black text-[32px]">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {months.map((month) => (
                            <SelectItem key={month} value={month}>
                              {month === "none" ? "未選択" : month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span>月から</span>

                      <Select value={endYear} onValueChange={setEndYear}>
                        <SelectTrigger className="w-[139px] h-[66px] bg-[#faf6ee] rounded-[10px] border border-solid border-black text-[32px]">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year === "none" ? "未選択" : year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span>年</span>

                      <Select value={endMonth} onValueChange={setEndMonth}>
                        <SelectTrigger className="w-[115px] h-[66px] bg-[#faf6ee] rounded-[10px] border border-solid border-black text-[32px]">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {months.map((month) => (
                            <SelectItem key={month} value={month}>
                              {month === "none" ? "未選択" : month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span>月まで</span>
                    </div>
                  </div>

                  {/* ネタ時間 */}
                  <div className="flex items-center mb-8">
                    <label className="flex-shrink-0">〇ネタ時間</label>
                    <div className="flex items-center gap-2 ml-8">
                      <Input
                        type="number"
                        value={durationMax}
                        onChange={(e) => setDurationMax(e.target.value)}
                        min={1}
                        max={120}
                        className="w-[115px] h-[66px] bg-[#faf6ee] rounded-[10px] border border-solid border-black text-[32px]"
                      />
                      <span>分以下</span>
                      <Input
                        type="number"
                        value={durationMin}
                        onChange={(e) => setDurationMin(e.target.value)}
                        min={0}
                        max={120}
                        className="w-[115px] h-[66px] bg-[#faf6ee] rounded-[10px] border border-solid border-black text-[32px]"
                      />
                      <span>分以上</span>
                    </div>
                  </div>

                  {/* 方言 */}
                  <div className="flex items-center mb-8">
                    <label className="flex-shrink-0">〇方言</label>
                    <div className="flex items-center gap-4 ml-8">
                      <AvailabilitySelector
                        options={["あり", "なし"]}
                        selected={dialect}
                        onChange={setDialect}
                      />
                    </div>
                  </div>

                  {/* 加賀 */}
                  <div className="flex items-center mb-8">
                    <label className="flex-shrink-0">〇加賀</label>
                    <div className="flex items-center gap-4 ml-8">
                      <AvailabilitySelector
                        options={["男役", "女役"]}
                        selected={kaga}
                        onChange={setKaga}
                      />
                    </div>
                  </div>

                  {/* 賀屋 */}
                  <div className="flex items-center mb-8">
                    <label className="flex-shrink-0">〇賀屋</label>
                    <div className="flex items-center gap-4 ml-8">
                      <AvailabilitySelector
                        options={["男役", "女役"]}
                        selected={kaya}
                        onChange={setKagaya}
                      />
                    </div>
                  </div>

                  {/* 公演単独 */}
                  <div className="flex items-center">
                    <label className="flex-shrink-0">〇公演単独</label>
                    <div className="flex items-center gap-2 ml-8">
                      <Select value={performanceType} onValueChange={setPerformanceType}>
                        <SelectTrigger className="w-[422px] h-[66px] bg-[#faf6ee] rounded-[10px] border border-solid border-black text-[32px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {performanceTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type === "none" ? "未選択" : type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      className="ml-auto w-[97px] h-[79px] bg-black rounded-[10px] flex items-center justify-center"
                      aria-label="詳細検索"
                      onClick={handleSearch}
                    >
                      <span className="text-4xl">🔍</span>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MacbookPro;

"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from 'react';


export default function kensaku(){
const [query1, setQuery1] = useState("");
const [query2, setQuery2] = useState("");
const router = useRouter();

const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // リロードを防ぐ
router.push(`/kensaku2?query1=${encodeURIComponent(query1)}&query2=${encodeURIComponent(query2)}`);
};


return (
<form className="max-w-sm mx-auto">
<div className="mb-5">
<h1>検索フォーム</h1>
<h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">企業名</h2>
<input type="text" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
onChange={(e) => setQuery1(e.target.value)}
placeholder = "入力してください"
></input>
 <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick = {handleSearch}>検索</button>
<h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">商品名</h2>
<input type="text" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
onChange={(e) => setQuery2(e.target.value)}
placeholder = "入力してください"
></input>
<button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick = {handleSearch}>検索</button>
</div>
</form>
);
}


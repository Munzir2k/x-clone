/** @format */
"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";

interface Article {
    author: string;
    description: string;
    publishedAt: string;
    content: string;
    url: string;
    title: string;
    source: {
        name: string;
    };
    urlToImage: string;
}

const News = () => {
    const [news, setNews] = useState([]);
    const [articleNum, setArticleNum] = useState(3);

    useEffect(() => {
        fetch(
            "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
        )
            .then((res) => res.json())
            .then((data) => setNews(data.articles));
    }, []);

    return (
        <div className="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-xl p-2 space-y-3">
            <h1 className="text-2xl font-bold px-4">Whats happening</h1>
            {news.slice(0, articleNum).map((article: Article) => {
                return (
                    <div key={article.url}>
                        <a href={article.url} target="_blank">
                            <div className="flex items-center justify-between transition duration-200">
                                <div className="space-y-0.5">
                                    <h4 className="font-bold text-sm hover:text-blue-500">
                                        {article.title}
                                    </h4>
                                    <p className="text-sm font-medium text-muted-foreground">
                                        {article.source.name}
                                    </p>
                                </div>
                                <img
                                    className="hover:scale-110 transition duration-200 rounded-md"
                                    src={article.urlToImage}
                                    width={100}
                                    alt={article.urlToImage}
                                />
                            </div>
                            <Separator className="my-2 bg-white" />
                        </a>
                    </div>
                );
            })}
            <Button
                onClick={() => setArticleNum(articleNum + 3)}
                className="bg-blue-500 hover:bg-blue-600 w-full transition duration-1000"
            >
                Load More...
            </Button>
        </div>
    );
};

export default News;

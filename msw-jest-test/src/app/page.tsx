"use client";

import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/posts");

      if (!response.ok) {
        throw new Error("에러 발생");
      }

      const posts = await response.json();
      setData(posts);
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>MSW 기본 세팅 연습</h1>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>
              {item.id}: {item.title}
            </h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

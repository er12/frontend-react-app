"use client";

import Post from "../components/Post";
import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { PostProps } from "../components/Post/Post";
import Loading from "../components/Loading";

async function getPosts() {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return null;
}

export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getPosts();
      setPosts(data);
    })();
  }, []);

  return (
    <div>
      <div className="min-h-screen from-stone-400 via-stone-700 to-stone-900 bg-gradient-to-br ">
        <h1 className="text-xl font-semibold leading-6 font-sans flex justify-center">Django-React Demo</h1>
        <div className="flex items-center justify-center m-4">
          <div className="grid grid-cols gap-4">
            {posts ? (
              posts.map((post, index) => <Post key={index} {...post} />)
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

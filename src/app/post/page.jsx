"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";
import fetchPosts from "@/api/fetchPosts";

export default function page() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts.getAllPosts().then((posts) => {
      setPosts(posts.data);
      setLoading(false);
    });
  }, []);
  return (
    <MainLayout>
      <div className="pt-16 gap-2">
        {isLoading && (<h2 className="text-center text-2xl mr-3">Loading...</h2>)}
        {posts.map((post) => (
          <div
            key={post.id}
            className="border-2 border-white m-3 p-3 border-r-4 rounded-lg"
          >
            <h3>
              {post.id}. {post.title}
            </h3>
            <p>{post.body}</p>
            <Link href={`/post/${post.id}`}>
              <button
                className="btn-primary"
                onClick={(e) => {
                  console.log(e);
                }}
              >
                Open
              </button>
            </Link>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

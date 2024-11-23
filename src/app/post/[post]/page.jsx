"use client";
import React from "react";
import { useParams } from "next/navigation";
import MainLayout from "@/components/MainLayout";
import fetchPosts from "@/api/fetchPosts";

export default function page() {
  const [postData, setPostData] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true)
  const { post } = useParams();

  React.useEffect(() => {
    fetchPosts.getPostById(...post).then((data) => {
      setPostData(data.data);
      setLoading(false);
    });
    fetchPosts.getComments(...post).then((data) => {
      setComments(data.data);
      setLoading(false);
    })
  }, []);
  return (
    <MainLayout>
      <div className="pt-16 p-4">
      {isLoading && (<h2 className="text-center text-2xl mr-3">Loading...</h2>)}
        <div className="p-2 border-2 border-white rounded-lg">
          <h1>
            {postData.id}.  {postData.title}
          </h1>
          <h3>{postData.body}</h3>
        </div>
        <div className="mt-3 ">
          <h1>Comments:</h1>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id} className="mt-2 border-2 border-white rounded-lg min-h-8">
                <h3>{comment.name}  - {comment.email}</h3>
                <br /><br />
                <h5>{comment.body}</h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}

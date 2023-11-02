"use client";

import React from "react";
import Link from "next/link";

import {
  sliceStartAtom,
  sliceEndAtom,
  currentPageAtom,
} from "../storage/atoms";
import { useAtom } from "jotai";

const BlogPostList = ({ posts }) => {
  // using the global state from Jotai for setting slice values
  const [currentSliceStart, setCurrentSliceStart] = useAtom(sliceStartAtom);
  const [currentSliceEnd, setCurrentSliceEnd] = useAtom(sliceEndAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  // the number that is added to the states specifies how many posts are displayed per page
  const nextPage = () => {
    setCurrentSliceStart(currentSliceStart + 20);
    setCurrentSliceEnd(currentSliceEnd + 20);
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentSliceStart(currentSliceStart - 20);
    setCurrentSliceEnd(currentSliceEnd - 20);
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="posts__wrapper">
        {posts.slice(currentSliceStart, currentSliceEnd).map((post) => {
          return (
            <div key={post.id} className="post__wrapper">
              <Link href={`/posts/${post.id}`}>
                <h4>{post.title}</h4>
                {/* {JSON.stringify(post)} */}
              </Link>
              <div className="post__body">
                {post.body.length > 80
                  ? `${post.body.substring(0, 80)}...`
                  : post.body}
              </div>
            </div>
          );
        })}
      </div>
      {/* button loads 20 more posts on load posts and disappears if no more posts can be loaded */}
      <div className="button__wrapper">
        {currentSliceStart >= 20 && (
          <button onClick={previousPage}>previous</button>
        )}

        {currentSliceEnd < posts.length && (
          <button onClick={nextPage}>next</button>
        )}
      </div>
      <div className="pagination__wrapper">
        <span>Page {currentPage}</span>
      </div>
    </>
  );
};

export default BlogPostList;

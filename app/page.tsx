import { getData } from "@/lib/getdata";
import BlogPostList from "../components/BlogPostList";

export default async function Home() {
  const posts = await getData();

  // console.log("[HomePage] rendering");

  return (
    <>
      <BlogPostList posts={posts} />;
    </>
  );
}

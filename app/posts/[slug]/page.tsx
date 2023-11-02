import { getData } from "@/lib/getdata";
import PostComments from "@/components/PostComments";
import Form from "@/components/Form/CommentsForm";

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const posts = await getData();

  return (
    <div className="single-post__wrapper">
      <div className="single-post__title">
        <h1 className="post__title">{posts[slug - 1].title}</h1>
      </div>
      <div className="single-post__user">User: {posts[slug - 1].userId}</div>
      <br />
      <div className="single-post__content">
        <p>{posts[slug - 1].body}</p>
      </div>
      <PostComments postId={slug} />
      <Form />
    </div>
  );
};

export default PostPage;

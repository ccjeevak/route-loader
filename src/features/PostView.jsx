import { useLoaderData } from "react-router-dom";

const PostView = () => {
  const postDetails = useLoaderData();
  const { id, title, body } = postDetails;
  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Post Details</h1>
      <h4 style={{ marginBottom: "10px" }}>
        #{id} - {title}
      </h4>
      <p>{body}</p>
    </>
  );
};
export default PostView;

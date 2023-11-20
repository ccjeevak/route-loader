import { Link, useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData();

  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Contact list</h1>
      {posts.map(({ id, title }, index) => (
        <div
          key={id}
          style={{ display: "flex", gap: "10px", margin: "10px 10px" }}
        >
          <b>{index + 1}</b>
          <h4>
            <Link to={`posts/${id}`}>{title}</Link>
          </h4>
        </div>
      ))}
    </>
  );
};
export default PostList;

import { getPostDetailsById } from "../api/posts";

const postViewLoader = async ({ params }) => {
  const { postId } = params;
  const response = await getPostDetailsById(postId);
  return response;
};

export default postViewLoader;

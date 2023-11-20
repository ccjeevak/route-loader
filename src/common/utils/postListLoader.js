import { getAllPosts } from "../api/posts";

const postListLoader = async () => {
    const response = await getAllPosts();
    return response;
};
export default postListLoader;
const getAllPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const getPostDetailsById = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export {getAllPosts, getPostDetailsById};

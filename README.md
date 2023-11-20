# React Router V6: Avoid Using useEffect for API Calls

As the user navigates around the app, the loaders for the next matching branch of routes will be called in parallel and their data made available to components through useLoaderData.

import { useQuery } from 'react-query';

// Define a fetch function that can be used to fetch data from an API
const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, error, isLoading, isError, fetchPosts } = useQuery('fetchData', fetchData, {
      staleTime: 60000, // Cache the data for 1 minute before refetching
      cacheTime: 300000, // Keep the data in cache for 5 minutes
      refetchOnWindowFocus: 60000,
      keepPreviousData: 300000
    });
    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
   if (isError) {
    return <p>Error: {error.message}</p>;
  }

    // Render the fetched data
    return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>

       {/* Button to manually refetch the data */}
      <button onClick={fetchPosts}>Refetch Posts</button>
    </div>
    );
};

export default PostsComponent;

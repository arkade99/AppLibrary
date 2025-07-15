import { useEffect, useState } from "react";

export const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // ✅ Track if more data exists
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const ApiData = await response.json();
      setData((prev) => [...prev, ...ApiData]);
      if (ApiData.length < 10) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasMore) {
      fetchData();
      console.log("Fetching....");
    }
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (!loading && scrollTop + clientHeight >= scrollHeight - 5) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore]);

  return (
    <>
      <h2>Infinite Scroll Posts</h2>
      {data && data.map((item, index) => <p key={index}>{item.title}</p>)}
      {loading && <p>loading....</p>}
      {!hasMore && <p>✅ No more posts to load.</p>}
    </>
  );
};

import { useState, useEffect } from 'react';

export const useFetchPosts = () => {
  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('http://rest.toewsweb.net/home-content.php/getall')
      .then(res => res.json())
      .then(res => {
        setLoading(false);
        if (res.data) {
          setPosts(res.data);
        } else {
          setPosts([]);
        }
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return { posts, loading, error };
}


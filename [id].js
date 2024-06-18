import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();
        setPost(data);
      };
      fetchPost();
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
const [loading, setLoading] = useState(true);

useEffect(() => {
  if (id) {
    const fetchPost = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }
}, [id]);

if (loading) return <div>Loading...</div>;
const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || body.trim() === '') {
      alert('Title and body are required');
      return;
    }
    setSuccess(true);
    setTitle('');
    setBody('');
  };
  
import { useEffect, useState } from "react";

interface Post {
  id: string;
  media_url: string;
  caption?: string;
}

const Testing = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => setPosts(data.data || []));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4">
          <img
            src={post.media_url}
            alt={post.caption || "Instagram Post"}
            className="rounded-lg"
          />
          {post.caption && <p className="mt-2 text-sm">{post.caption}</p>}
        </div>
      ))}
    </div>
  );
};

export default Testing;

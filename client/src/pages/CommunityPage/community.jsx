import { useEffect, useState } from "react";
import "./community.css";
import CommunityPost from "../../components/CommunityPost/communityPost";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/userSlice.js";
export default function Community() {
  const [formData,setFormData]=useState({})
  const [posts, setPosts] = useState([]);
  const { currentUser } = useSelector(userSelector);

  const getListing = async () => {
    const res = await fetch("/api/post/getpost");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    getListing();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          user: currentUser._id,
        })
      });
      const data=await res.json()
      if(data.success==false){
        console.log(data.message)
        return
      }
      await getListing()
      console.log('Post created Succesfully')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="community_page">
      <h1>Community page</h1>
      <div className="post-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="content"
            onChange={handleChange}
            placeholder="Whats in your mind?...."
          />
          <button>Post</button>
        </form>
      </div>
      {posts.map((post, index) => (
        <CommunityPost post={post} getListing={getListing} key={index}  />
      ))}
    </div>
  );
}

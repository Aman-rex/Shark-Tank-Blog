import React from "react";
import "./communityPost.css";
export default function CommunityPost() {
  return (
    <div className="post_container">
      <div className="post_userinfo">
        <span>Aman Pratap Singh</span>
        <span className="btn">delete</span>
      </div>
      <div className="post_content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et tempora
        eaque nesciunt eligendi voluptas, quis, cum ea voluptates provident
        animi corporis quae facere. Non praesentium possimus ea iure eveniet!
      </div>
      <div className="">
        <p><span>0</span>Like</p>
        <p><span>0</span>Comments</p>
        <form>
            <input type="text" placeholder="Add Comments"/>
            <button>Add Comments</button>
        </form>
      </div>
      <div className="">
        <p><span>Aman</span> <span>Its an Nice Post</span></p>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./communityPost.css";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/userSlice.js";
export default function CommunityPost({ post,getListing }) {
  const [commentData, setCommentData] = useState({});
  const [postData,setPostData] = useState(post)
  const { currentUser } = useSelector(userSelector);


  const fetchPostData=async(postId)=>{
    try{
        const res = await fetch(`/api/post/singlepost/${postData._id}`)
        const data= await res.json()
        if(data.success==false){
            console.log(data.message)
            return
        }
        setPostData(data)
    }catch(error){

    }
  }
 fetchPostData()
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/post/comment/${postData._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });
      const data=await res.json()
      if(data.success==false){
        console.log(data.message)
        return
      }
      await fetchPostData()
      console.log("Comment added succefully")

    } catch (error) {}
  };

  const handleChange = (e) => {
    setCommentData({
      ...commentData,
      [e.target.id]: e.target.value,
    });
  };

  const handleDelete=async(id)=>{

    try{

        const  res = await fetch(`/api/post/comment/delete/${id}`,{
            method:'Delete'
        })
        const data= await res.json()
        if(data.success==false){
            console.log(data.message)
            return
        }
        await fetchPostData()
        console.log('Comment deleted Successfully')

    }catch(error){
        console.log(error)
    }
  }

  const handleLike=async(postId)=>{

    try{

        const res = await fetch(`/api/post/likes/${postId}`,{
            method:'POST'
        })

        const data = await res.json()
        console.log(data)
        if(data.success==false){
            console.log(data.message)
            return
        }
        await fetchPostData()
        console.log('Request Successful')


    }catch(error){
        console.log(error)
    }

  }

  const handlePostDelete=async(postId)=>{
    try{
       const res = await fetch(`/api/post/delete/${postId}`,{
        method:'DELETE'
       })
       const data= await res.json()
       if(data.success==false){
        console.log(data.message)
        return
       }
       await getListing()
       console.log('Post deleted Sucessfully')

    }catch(error){
        console.log(eroror)
    }
  }


  return (
    <>
      <div className="post_container">
        <div className="post_userinfo">
          <span>{postData.user.name}</span>
          {currentUser && currentUser._id === postData.user._id && (
            <span className="btn" onClick={()=>handlePostDelete(postData._id)}>delete</span>
          )}
        </div>
        <div className="post_content">{postData.content}</div>
        <div className="">
          <p>
            <span>{postData.likes.length}</span><button onClick={()=>handleLike(postData._id)}>Like</button>
          </p>
          <p>
            <span>{postData.comment.length}</span>Comments
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add Comments"
              id="comment"
              onChange={handleChange}
            />
            <button>Add Comments</button>
          </form>
        </div>
        <div className="">
          {postData.comment.map((com,index) => (
            <p key={index}>{com.comment}  {currentUser&&currentUser._id==com.user&&<button onClick={()=>handleDelete(com._id)}>delete</button>}</p>
          ))}
        </div>
      </div>
    </>
  );
}

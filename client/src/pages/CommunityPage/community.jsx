import React from 'react'
import './community.css'
import CommunityPost from '../../components/CommunityPost/communityPost'
export default function Community() {
  return (
    <div className='community_page'>
        <h1>Community page</h1>
        <div className="post-form-container">
            <form>
                <input type="text" placeholder='Whats in your mind?....'/>
                <button>Post</button>
            </form>
        </div>
        <CommunityPost/>
    </div>
  )
}

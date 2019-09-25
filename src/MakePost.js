import React, { useState } from 'react';
import { useFetchPosts } from './posts-hook';

function MakePost(props) {
  const [ postType, setPostType ] = useState('');
  const [ post, setPost ] = useState({ id: 0, title: '', category: '', content: ''})
  let title, content;

  const handleSelectPost = e => {
    let el = e.target;
    let id = el.value;
    let _post = posts.find(p => p.id === id);
    setPost(_post);
  }

  const changeTitle = e => {
    post.title = e.target.value;
    setPost(JSON.parse(JSON.stringify(post)));
  }

  const changeContent = e => {
    post.content = e.target.value;
    setPost(JSON.parse(JSON.stringify(post)));
  }

  const handleChange = e => {
    let el = e.target;
    setPostType(el.value);
  }

  const { posts, loading, error } = useFetchPosts();

  if (!posts) return null;
  else {
    return (
    <div>
      <h1>Create Post</h1>
      <form>
        <select id="select-post" onChange={handleSelectPost}>
          <option value="">Select post</option>
        {posts.map(p => {
          return <option key={p.id} value={p.id}>{p.title}</option>
        })}
        </select>
        <select onChange={handleChange} id="post-type">
          <option value="">Select type</option>
          <option value="logophile">Logophile</option>
          <option value="arithmophile">Arithmophile</option>
          <option value="professional">Professional</option>
        </select>

        <div style={{ display: postType !== 'logophile' ? 'block' : 'none' }} className="generic">
          <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={post.title} onChange={changeTitle}/>
          </div>

          <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" value={post.content} onChange={changeContent}></textarea>
          </div>
        </div>

        <div style={{ display: postType === 'logophile' ? 'block' : 'none' }} className="logophile-fields">
          <div>
          <label htmlFor="word">Word</label>
          <input type="text" id="word" />
          </div>

          <div>
          <label htmlFor="definition">Definition</label>
          <textarea id="definition"></textarea>
          </div>

          <div>
          <label htmlFor="etymology">Etymology</label>
          <textarea id="etymology"></textarea>
          </div>

          <div>
          <label htmlFor="usage">Usage</label>
          <textarea id="usage"></textarea>
          </div>
        </div>

      </form>

    </div>
    );
  }
}

export default MakePost;

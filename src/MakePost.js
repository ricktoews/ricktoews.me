import React, { useState } from 'react';
import { useFetchPosts } from './posts-hook';
import './MakePost.css';

const savePostUrl = 'http://rest.toewsweb.net/home-content.php/setPost';
var saveTimeout;

function MakePost(props) {
  const blankItem = { id: 0, title: '', category: '', content: '' };
  const [ postType, setPostType ] = useState('');
  const [ post, setPost ] = useState(blankItem)

  let title, content;

  const savePost = post => {
    console.log('save post', post);
    let options = {
      method: 'POST',
      body: JSON.stringify(post)
    }
    fetch(savePostUrl, options)
      .then(res => res.json())
      .then(res => {
        console.log('after setPost', res);
        setPost(res.data);
      });
  }

  const initSavePost = post => {
    if (saveTimeout) {
            console.log('clearing timemout');
      clearTimeout(saveTimeout);
    }
    saveTimeout = setTimeout(() => { savePost(post); }, 2000);
  }


  const changePost = e => {
    let id = e.target.value;
    let _post = posts.find(p => p.id === id);
    setPost(_post);
  }

  const newItem = e => {
    e.preventDefault();
    setPost(blankItem);
  }

  const changeTitle = e => {
    post.title = e.target.value;
    setPost(JSON.parse(JSON.stringify(post)));
    initSavePost(post);
  }

  const changeContent = e => {
    post.content = e.target.value;
    setPost(JSON.parse(JSON.stringify(post)));
    initSavePost(post);
  }

  const changeCategory = e => {
    post.category = e.target.value;
    setPost(JSON.parse(JSON.stringify(post)));
    initSavePost(post);
  }

  const { posts, loading, error } = useFetchPosts();

  if (!posts) return null;
  else {
    return (
    <div className="post-entry">
      <h1>Create Post</h1>
      <form>
        <div>
        <select id="post-id" value={post.id} onChange={changePost}>
          <option value="">Select post</option>
        {posts.map(p => {
          return <option key={p.id} value={p.id}>{p.title}</option>
        })}
        </select>
        <button onClick={newItem}>New</button>
        </div>
        <fieldset>
          <div><label htmlFor="definition">Category</label></div>
          <div>
            <select value={post.category} onChange={changeCategory} id="post-type">
              <option value="">Select type</option>
              <option value="logophile">Logophile</option>
              <option value="arithmophile">Arithmophile</option>
              <option value="professional">Professional</option>
            </select>
          </div>
        </fieldset>

        <fieldset style={{ display: postType !== 'logophile' ? 'block' : 'none' }} className="generic">
          <div><label htmlFor="title">Title</label></div>
          <div><input type="text" id="title" value={post.title} onChange={changeTitle}/></div>
        </fieldset>

        <fieldset>
          <div><label htmlFor="content">Content</label></div>
          <div><textarea id="content" value={post.content} onChange={changeContent}></textarea></div>
        </fieldset>

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

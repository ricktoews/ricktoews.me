import React, { useState } from 'react';
import { useFetchPosts } from './posts-hook';
import { initApi, savePost, delPost } from './posts-api';
import './MakePost.css';

var saveTimeout;

function MakePost(props) {
  const blankItem = { id: 0, title: '', category: '', content: '' };
  const [ postType, setPostType ] = useState('');
  const [ post, setPost ] = useState(blankItem)

  initApi(savePost, blankItem);

  let title, content;

  const initSavePost = post => {
    if (saveTimeout) {
      clearTimeout(saveTimeout);
    }
    saveTimeout = setTimeout(() => { 
      savePost(posts, post)
    }, 5000);
  }


  // clonePost in order to create a separate copy of the post to pass to the hook. This is so the page will be rerendered.
  const clonePost = post => {
    if (post) {
      try {
        return JSON.parse(JSON.stringify(post));
      } catch (e) {
        console.log('Problem cloning post', post, e);
      }
    } else {
      return blankItem;
    }
  }

  const newItem = e => {
    e.preventDefault();
    setPost(blankItem);
  }

  const deleteItem = e => {
    e.preventDefault();
    if (window.confirm('Are you sure?')) {
      console.log('Will delete post ID', post.id);
      // Need API call for delete.
      delPost(posts, post.id);
    }
  }

  /*
    Handlers for changing form field.
    changePost selects the post with which to populate the form. The posts were previously loaded and are in a local array.
    The other handlers (Title, Content, Category) call initSavePost, which sets up an autosave function.
  */
  const changePost = e => {
    let id = e.target.value;
    let _post = posts.find(p => p.id === id);
    setPost(_post);
  }

  const changeTitle = e => {
    post.title = e.target.value;
    setPost(clonePost(post));
    initSavePost(post);
  }

  const changeContent = e => {
    post.content = e.target.value;
    setPost(clonePost(post));
    initSavePost(post);
    initSavePost(post);
  }

  const changeCategory = e => {
    post.category = e.target.value;
    setPost(clonePost(post));
    initSavePost(post);
  }

  var { posts, loading, error } = useFetchPosts();

  const formTitle = post.id ? 'Edit Post' : 'Create Post';

  if (!posts) return null;
  else {
    return (
    <div className="post-entry">
      <h1>{formTitle}</h1>
      <form>
        <div>
        <select id="post-id" value={post.id} onChange={changePost}>
          <option value="">Select post</option>
        {posts.map(p => {
          return <option key={p.id} value={p.id}>{p.title}</option>
        })}
        </select>
        <button onClick={newItem}>New</button>
        <button onClick={deleteItem}>Delete</button>
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

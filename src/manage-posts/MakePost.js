import React, { useState, useEffect } from 'react';
import { useFetchPosts } from './posts-hook';
import { initApi, savePost, delPost } from './posts-api';
import './MakePost.css';

var saveTimeout;

function MakePost(props) {
console.log('MakePost props', props);
  const blankItem = { id: 0, title: '', category: '', content: {} };
  const [ post, setPost ] = useState(blankItem)
  initApi(setPost, blankItem);

  const initSavePost = post => {
    if (saveTimeout) {
      clearTimeout(saveTimeout);
    }
    saveTimeout = setTimeout(() => { 
      savePost(posts, post)
    }, 2000);
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

  const saveItem = e => {
    e.preventDefault();
    console.log('saveItem', post);
    savePost(posts, post);
  }

  const saveContent = e => {
    e.preventDefault();
    var { id, value } = e.currentTarget;
    if (id === 'title' || id === 'category') {
      post[id] = value;
    } else {
      post.content[id] = value;
    }
    console.log('saveContent post', post);
    initSavePost(post);
    setPost(JSON.parse(JSON.stringify(post)));
  }

  /*
    Handlers for changing form field.
    changePost selects the post with which to populate the form. The posts were previously loaded and are in a local array.
    The other handlers (Title, Content, Category) call initSavePost, which sets up an autosave function.
  */
  const changePost = e => {
    let id = e.target.value;
    let _post = posts.find(p => p.id === id);
    console.log('changePost', JSON.parse(JSON.stringify(_post.content)));
    setPost(_post);
  }

  var { posts } = useFetchPosts();
  var title, category, content;
  var definition, etymology, citations;
  var text;

  const formTitle = post.id ? 'Edit Post' : 'Create Post';

  if (!posts) { console.log('posts is empty; rendering null'); return null; }
  else {
    category = post.category;
    title = post.title;
    content = post.content;
    if (category === 'logophile') {
      definition = content.definition || '';
      etymology = content.etymology || '';
      citations = content.citations || '';
      console.log('definition', definition);
    } else {
      text = content.text || '';
    }

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
        <button onClick={saveItem}>Save</button>
        </div>
        <fieldset>
          <div><label htmlFor="definition">Category</label></div>
          <div>
            <select value={category} onChange={saveContent} id="category">
              <option value="">Select type</option>
              <option value="logophile">Logophile</option>
              <option value="arithmophile">Arithmophile</option>
              <option value="professional">Professional</option>
              <option value="thoughts">Thoughts</option>
            </select>
          </div>
        </fieldset>

        <div style={{ display: category !== 'logophile' ? 'block' : 'none' }} className="generic">
          <fieldset>
            <div><label htmlFor="title">Title</label></div>
            <div><input type="text" id="title" value={title} onChange={saveContent}/></div>
          </fieldset>

          <fieldset>
            <div><label htmlFor="text">Text</label></div>
            <div><textarea id="text" value={text} onChange={saveContent}></textarea></div>
          </fieldset>
        </div>

        <div style={{ display: category === 'logophile' ? 'block' : 'none' }} className="logophile-fields">
          <fieldset>
          <label htmlFor="title">Word</label>
          <input type="text" id="title" value={title} onChange={saveContent} />
          </fieldset>

          <fieldset>
          <label htmlFor="definition">Definition</label>
          <textarea id="definition" value={definition} onChange={saveContent}></textarea>
          </fieldset>

          <fieldset>
          <label htmlFor="etymology">Etymology</label>
          <textarea id="etymology" value={etymology} onChange={saveContent}></textarea>
          </fieldset>

          <fieldset>
          <label htmlFor="citations">Citations</label>
          <textarea id="citations" values={citations} onChange={saveContent}></textarea>
          </fieldset>
        </div>

      </form>

    </div>
    );
  }
}

export default MakePost;

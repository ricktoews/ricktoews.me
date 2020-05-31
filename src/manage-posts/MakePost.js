import React, { useState, useEffect } from 'react';
import { useFetchPosts } from './posts-hook';
import { initApi, savePost, delPost } from './posts-api';
import { extractOEDWord, extractOEDDefinitions, extractOEDEtymology } from './oed';
import './MakePost.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles((theme) => {
    return ({
    button: {
      margin: theme.spacing(1)
    }
    });
});


var saveTimeout;

function MakePost(props) {
  const classes = useStyles(props);
  const blankItem = { id: 0, date: '', title: '', category: '', content: {} };
  const [ state, setState ] = useState(blankItem)
console.log('MakePost state', state);

  initApi(setState, blankItem);
  const initSavePost = post => {
    if (saveTimeout) {
      clearTimeout(saveTimeout);
    }
    saveTimeout = setTimeout(() => { 
      savePost(posts, post)
    }, 2000);
  }


  const newItem = e => {
    e.preventDefault();
    setState(blankItem);
  }

  const deleteItem = e => {
    e.preventDefault();
    if (window.confirm('Are you sure?')) {
      console.log('Will delete post ID', state.id);
      // Need API call for delete.
      delPost(posts, state.id);
    }
  }

  const saveItem = e => {
    e.preventDefault();
    console.log('saveItem', state);
    savePost(posts, state);
  }

  const handleChange = e => {
    e.preventDefault();
    var { id, value } = e.currentTarget;
    if (id === 'title' || id === 'category' || id === 'date') {
      state[id] = value;
    } else {
      state.content[id] = value;
    }
    console.log('handleChange post', state);
    initSavePost(state);
    setState(JSON.parse(JSON.stringify(state)));
  }

  /*
    Handlers for changing form field.
    handleSelectPost selects the post with which to populate the form. The posts were previously loaded and are in a local array.
    The other handlers (Title, Content, Category) call initSavePost, which sets up an autosave function.
  */
  const handleSelectPost = e => {
    let id = e.target.value;
    let _post = posts.find(p => p.id === id);
    console.log('handleSelectPost', JSON.parse(JSON.stringify(_post.content)));
    setState(_post);
  }

  const extractOEDEntry = e => {
    let code = e.target.value;
    let domparser = new DOMParser();
    let doc = domparser.parseFromString(code, 'text/html');
    let mainContent = doc.querySelector('#mainContent');

    let oed_word = extractOEDWord(mainContent);
    let oed_etymology = extractOEDEtymology(mainContent);
    let oed_definitions = extractOEDDefinitions(mainContent);

    var oed = {
      word: oed_word.word,
      definitions: oed_definitions,
      etymology: oed_etymology,
    };
    let oed_definition = oed_definitions.map(def => def.innerHTML).join("<hr/>");
    var oed_post = {
      category: 'logophile',
      title: oed_word.word,
      date: new Date(),
      content: {
        definition: oed_definition,
        etymology: oed_etymology,
        source: 'Extracted from online OED'
      }
    };
    setState(oed_post);
  }

  var { posts } = useFetchPosts();
  var title, category, content;
  var definition, source, etymology, citations;
  var text;

  const formTitle = 'Manage Post'

  if (!posts) { console.log('posts is empty; rendering null'); return null; }
  else {
    category = state.category;
    title = state.title;
    content = state.content;
    if (category === 'logophile') {
      definition = content.definition || '';
      source = content.source || '';
      etymology = content.etymology || '';
      citations = content.citations || '';
    } else {
      text = content.text || '';
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = e => {
    let id = e.currentTarget.value;
console.log('handleClose', id);
    if (id) {
      let _post = posts.find(p => p.id == id);
      setState(_post);
      setAnchorEl(null);
    }
  };


    return (
    <div className="post-entry">
      <h1>{formTitle}</h1>
      <form>
        <div>
{/*
        <select id="post-id" value={state.id} onChange={handleSelectPost}>
          <option value="">Select post</option>
        {posts.map(p => {
          return <option key={p.id} value={p.id}>{p.title}</option>
        })}
        </select>
        <Button className={classes.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Select Post</Button>
*/}
        <Button color="primary" variant="contained" className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Select Post</Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
      >
        {posts.map((p, key) => {
          return <MenuItem key={key} value={p.id} onClick={handleClose}>{p.title}</MenuItem>
        })}
        </Menu>

        <Button color="primary" variant="contained" className={classes.button} onClick={newItem}>New</Button>
        <Button color="primary" variant="contained" className={classes.button} onClick={deleteItem}>Delete</Button>
        <Button color="primary" variant="contained" className={classes.button} onClick={saveItem}>Save</Button>
        </div>
        <fieldset>
          <div><label htmlFor="definition">Category</label></div>
          <div>
            <select value={category} onChange={handleChange} id="category">
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
            <div><input type="text" id="title" value={state.title} onChange={handleChange}/></div>
          </fieldset>

          <fieldset>
            <div><label htmlFor="title">Snapshot</label></div>
            <div><input type="file" accept="image/*" id="snapshot" capture="camera"/></div>
          </fieldset>

          <fieldset>
            <div><label htmlFor="text">Text</label></div>
            <div><textarea id="text" value={text} onChange={handleChange}></textarea></div>
          </fieldset>
        </div>

        <div style={{ display: category === 'logophile' ? 'block' : 'none' }} className="logophile-fields">
          <fieldset>
{/*
          Word: {state.oed.word}<br/>
          <div dangerouslySetInnerHTML={{__html: state.oed.etymology }} />
          {state.oed.definitions && state.oed.definitions.map((item, key) => {
            let corner = item.querySelector('.corner');
            corner.parentNode.removeChild(corner);
            return <div style={{borderBottom: '1px solid gray' }} key={key} dangerouslySetInnerHTML={{__html: item.innerHTML }} />
          })}
*/}

          <label htmlFor="title">OED Code</label>
          <textarea id="oed-code" onChange={extractOEDEntry}></textarea>

          </fieldset>

          <fieldset>
          <label htmlFor="title">Date</label>
          <input type="text" id="date" value={state.date} onChange={handleChange} />
          </fieldset>

          <fieldset>
          <label htmlFor="title">Word</label>
          <input type="text" id="title" value={state.title} onChange={handleChange} />
          </fieldset>

          <fieldset>
          <label htmlFor="definition">Definition</label>
          <textarea id="definition" value={state.content.definition} onChange={handleChange}></textarea>
          </fieldset>

          <fieldset>
          <label htmlFor="source">Source</label>
          <textarea id="source" value={source} onChange={handleChange}></textarea>
          </fieldset>

          <fieldset>
          <label htmlFor="etymology">Etymology</label>
          <textarea id="etymology" value={state.content.etymology} onChange={handleChange}></textarea>
          </fieldset>
{/*
          <fieldset>
          <label htmlFor="citations">Citations</label>
          <textarea id="citations" values={citations} onChange={handleChange}></textarea>
          </fieldset>
*/}
        </div>

      </form>

    </div>
    );
  }
}

export default MakePost;

const savePostUrl = 'https://rest.toewsweb.net/home-content.php/setPost';
const delPostUrl = 'https://rest.toewsweb.net/home-content.php/delPost';

var setPost;
var blankItem;

const initApi = (hook, blank) => {
  setPost = hook;
  blankItem = blank;
}

const savePost = (posts, post) => {
  console.log('savePost', post);
  let options = {
    method: 'POST',
    body: JSON.stringify(post)
  }
  if (options.body && post.title) {
  return fetch(savePostUrl, options)
    .then(res => res.json())
    .then(res => {
      let ndx = posts.findIndex(p => p.id === res.data.id);
      if (ndx > -1) { posts.splice(ndx, 1); }
      posts.push(res.data);
      setPost(res.data);
    });
  }
}

const delPost = (posts, id) => {
  let reqPayload = { id };
  let options = {
    method: 'POST',
    body: JSON.stringify(reqPayload)
  };
  if (options.body) {
  return fetch(delPostUrl, options)
    .then(res => res.json())
    .then(res => {
      // delete post from local array.
      let ndx = posts.findIndex(p => p.id === id);
      if (ndx > -1) { posts.splice(ndx, 1); }
      setPost(blankItem);
    });
  }
}

export { initApi, savePost, delPost };

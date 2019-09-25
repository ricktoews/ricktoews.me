const savePostUrl = 'http://rest.toewsweb.net/home-content.php/setPost';
const delPostUrl = 'http://rest.toewsweb.net/home-content.php/delPost';

var setPost;
var blankItem;

const initApi = hook => {
  setPost = hook;
}

  const savePost = (posts, post) => {
    let options = {
      method: 'POST',
      body: JSON.stringify(post)
    }
    return fetch(savePostUrl, options)
      .then(res => res.json())
      .then(res => {
        let ndx = posts.findIndex(p => p.id === res.data.id);
        if (ndx > -1) { posts.splice(ndx, 1); }
        posts.push(res.data);
        setPost(res.data);
      });
  }

  const delPost = (posts, id) => {
    let reqPayload = { id };
    let options = {
      method: 'POST',
      body: JSON.stringify(reqPayload)
    };
    return fetch(delPostUrl, options)
      .then(res => res.json())
      .then(res => {
        let ndx = posts.findIndex(p => p.id === id);
        if (ndx > -1) { posts.splice(ndx, 1); }
        setPost(blankItem);
      });
  }


export { initApi, savePost, delPost };

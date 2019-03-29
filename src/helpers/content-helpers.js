export function detectPost(loc, content) {
    var path = loc.pathname;
    var post = content.filter(p => path === '/' + p.topic + '/' + p.title);
    console.log('detectPath, post', post)
    return post;
}


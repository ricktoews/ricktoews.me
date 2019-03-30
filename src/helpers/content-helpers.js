export function detectPost(loc, content) {
    var path = loc.pathname;
    var categories = Object.keys(content);
    var post = [];
    categories.forEach(category => {
        if (post.length === 0) {
            post = content[category].filter(p => path === '/article/' + p.title);
        }
    });

    return post;
}


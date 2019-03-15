/*
<Logophile />

date: "2019-03-09",
seq: "0",
topic: "logophile",
content: "_title_ Invultuation

_oed_ invultuation, <i>n</i>.

_etym_ <b>Etymology</b>: noun of action < medieval Latin <i>invultuāre</>, <i>invultāre</i> (in Old French <i>envouter</i>, 13th cent. in Hatzfeld & Darmesteter), to make a likeness, < <i>in-</i> + <i>vultus</i> countenance, visage, likeness.

_def_ The making of a likeness, esp. the waxen effigy of a person for purposes of witchcraft.

_ex_ 1856   S. R. Maitland False Worship xiii. 150   Words which belong to the subject of invultation and facillation.

_ex_ 1856   S. R. Maitland False Worship Note G. 295   All this does not appear to me to contain a full explanation of invultuation.

_ex_ 1897   Notes & Queries 8th ser. XI. 236, 314, 395, (heading)    Invultation.
"
*/
import React, { Component } from 'react';
import './helpers/format-helpers';

var re = {
  title: /^_title_ (.*)/,
  image: /^_img_ (.*)/,
  imageFloat: /^_img-float_ (.*)/,
  oed: /^_oed_ (.*)/,
  etym: /^_etym_ (.*)/,
  def: /^_def_ (.*)/,
  ex: /^_ex_ (.*)/,
};

function formatContent(content) {
  var lines = content.split("\n\n");
  var item = {};
  var contentRows = [];
  lines.forEach(l => {
    var hasTitle = l.match(re.title);
    var hasImage = l.match(re.image);
    var hasImageFloat = l.match(re.imageFloat);
    var hasOED = l.match(re.oed);
    var hasEtym = l.match(re.etym);
    var hasDef = l.match(re.def);
    var hasEx = l.match(re.ex);

    if (hasTitle) {
      item.title = hasTitle[1];
    } else if (hasImage) {
      item.image = { __html: hasImage[1] };
    } else if (hasImageFloat) {
      item.imageFloat = hasImageFloat[1];
    } else if (hasOED) {
      item.oed = { __html: hasOED[1] };
    } else if (hasEtym) {
      item.etym = { __html: hasEtym[1] };
    } else if (hasDef) {
      item.def = hasDef[1];
    } else if (hasEx) {
	  if (!item.ex) item.ex = [];
      item.ex.push(hasEx[1]);
    } else {
      contentRows.push(l);
    }
  });
  item.text = contentRows;
  return item;
}


function preparePost(post) {
    var date = post.date ? formatDate(post.date) : 'Today';
    var items = formatcontent(post.content || '');
    return { date, items };
}

class Logophile extends Component {
  constructor(props) {
    super(props);
    this.post = preparePost(props.post);
  }

  render() {
  }
}

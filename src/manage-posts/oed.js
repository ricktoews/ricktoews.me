  const extractOEDWord = doc => {
    let hwSect = doc.querySelector('.hwSect');
    let word = hwSect.querySelector('.hw').innerHTML;
    let partOfSpeech = hwSect.querySelector('.ps');
    return { word, partOfSpeech };
  }

  // Replace OED "a" tags with spans.
  const replaceATags = doc => {
    let a_tags = Array.from(doc.querySelectorAll('a'));
    a_tags.forEach(item => {
      let el = document.createElement('span');
      el.classList.add('oed-a-tag');
      el.innerHTML = item.innerHTML;
      if (el.innerHTML === '(Show Less)') {
        item.parentNode.removeChild(item);
      } else if (el.innerHTML === '(Hide quotations)') {
        item.parentNode.removeChild(item);
      } else {
        item.parentNode.replaceChild(el, item);
      }
    });
    return doc;
  }

  const extractOEDEtymology = doc => {
    let etymologyDoc = doc.querySelector('.etymology');
    etymologyDoc = replaceATags(etymologyDoc);
    return etymologyDoc.innerHTML;
  }

  const extractOEDDefinitions = doc => {
    let senseGroup = Array.from(doc.querySelectorAll('.senseGroup'));
    let definitions = [];
    senseGroup.forEach(item => {
      let corner = item.querySelector('.corner');
      corner.parentNode.removeChild(corner);
      definitions.push(replaceATags(item))
    });
    
    return definitions;
  }

export { extractOEDWord, extractOEDEtymology, extractOEDDefinitions };

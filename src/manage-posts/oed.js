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

const extractOEDCitations = doc => {
    var citationsBlock = doc.querySelector('.quotationsBlock');
	var citationsCode = citationsBlock.querySelectorAll('.quotation');
	var citations = [];
	citationsCode.forEach(item => {
		console.log('citations', item.innerHTML);
		let citation = item.innerHTML.replaceAll("\n", ' ');
		citations.push(citation);
	});
	citations = citations.join("\n");
    return citations;
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
		var definition = item.querySelector('.entry-header');
		let corner = item.querySelector('.corner');
		corner.parentNode.removeChild(corner);
		definition = replaceATags(definition);
		definitions.push(replaceATags(definition))
	});
    
	return definitions;
}

export { extractOEDWord, extractOEDEtymology, extractOEDDefinitions, extractOEDCitations };

import { useEffect, useRef } from "react";


function formatText(text) {
    const paras = text.split(/\n\n/);
    console.log(paras);
    return paras;
}

export default function FormatArticle({ text }) {
    const formatted = formatText(text);
    return (
        <>
        { formatted.map((para, ndx) => {
            return <div style={{margin: '10px 0'}} className="article-paragraph" key={ndx}>{para}</div>
        })}
        </>
    )
}
function cssStringToArray(stringCSS) {
    const cssArrayTemp = stringCSS.split(';');
    cssArrayTemp.pop();
    const cssArray = cssArrayTemp.map((elem) => {
        let [tagName, value] = elem.split(':');
        tagName = tagName.replace(/\s/g, '');
        return { tagName, value };
    });
    return cssArray;
}

export default cssStringToArray
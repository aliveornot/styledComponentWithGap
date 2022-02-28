function checkGapStatements(cssArray) {
    // Check if there is row-gap or column-gap statement
    let isColumnGap = false;
    let isRowGap = false;
    let gapSize;

    const newCssArray = [];
    for (let css of cssArray) {
        if (css.tagName === 'column-gap') {
            isColumnGap = true;
            gapSize = css.value;
            continue;
        } else if (css.tagName === 'row-gap') {
            isRowGap = true;
            gapSize = css.value;
        continue;
        } else if (css.tagName === 'gap') {
            throw new Error('StyledViewWithGap ERROR: Do not use gap. Use column-gap or row-gap explicitly.');
        }
        newCssArray.push(css);
    }
    if (isColumnGap && isRowGap) {
        throw new Error('StyledViewWithGap ERROR: cannot use column-gap and row-gap simultaneously.');
    }
    return { isRowGap, isColumnGap, gapSize, newCssArray };
}

export default checkGapStatements;

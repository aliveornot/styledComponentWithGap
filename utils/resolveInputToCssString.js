function resolveInputToCssString(props, template, ...values) {
    let stringCSS;
    if (values && values.length > 0) {
        stringCSS = values.reduce((acc, value, index) => {
            const resolvedValue = typeof value === 'function' ? value(props) : value;
            return `${acc}${resolvedValue}${template[index + 1]}`;
        }, template[0]);
    } else {
        stringCSS = template[0];
    }

    return stringCSS;
}

export default resolveInputToCssString;

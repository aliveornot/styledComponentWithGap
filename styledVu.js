import React from 'react';
import styled from 'styled-components/native';
import addGapToChildren from './utils/addGapToChildren';
import checkGapStatements from './utils/checkGapStatements';
import cssStringToArray from './utils/cssStringToArray';
import deleteChildrenFromProps from './utils/deleteChilderenFromProps';
import resolveInputToCssString from './utils/resolveInputToCssString';

const VuWithGap = (template, ...values) => {
    const ViewWithGap = React.forwardRef((props, ref) => {
        const cssString = resolveInputToCssString(props, template, ...values); // resolve all functions inside css expression.
        const cssArray = cssStringToArray(cssString);
        const { isRowGap, isColumnGap, gapSize, cssArrayWithoutGap } = checkGapStatements(cssArray);

        const childrenWithGap = addGapToChildren(props.children, isRowGap, isColumnGap, gapSize);

        const cssStringWithoutGap = cssArrayWithoutGap.reduce((accumulation, elem, index) => accumulation + `${elem.tagName}:${elem.value};\n`, '');
        const ContainerComponent = styled.View`
            ${cssStringWithoutGap}
        `;
        const propsExceptChildren = deleteChildrenFromProps(props);

        return (
            <ContainerComponent {...propsExceptChildren} ref={ref}>
                {childrenWithGap}
            </ContainerComponent>
        );
    });

    return ViewWithGap;
};

export default VuWithGap;

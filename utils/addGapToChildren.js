import { nanoid } from 'nanoid/non-secure';

function addGapToChildren(children, isRowGap, isColumnGap, gapSize) {
    // children이 둘 이상일때만 gap 처리. 하나면 그냥 기존거를 리턴.
    if ((isRowGap || isColumnGap) && children && children.length && children.length > 1) {
        const GapComponent = styled.View`
            height: ${isRowGap ? gapSize : '100%'};
            width: ${isColumnGap ? gapSize : '100%'};
        `;
        const keyPrefix = `gap_child_${nanoid()}`;

        const childrenWithGap = [];
        for (let index = 0; index < children.length - 1; index++) {
            childrenWithGap.push(children[index]);
            childrenWithGap.push(<GapComponent key={`${keyPrefix}_${index}`} />);
        }

        childrenWithGap.push(children[children.length - 1]); // no gap after the last component.

        return childrenWithGap;
    }

    // return old children
    return children;
}
export default addGapToChildren;

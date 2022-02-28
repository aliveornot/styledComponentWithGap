function deleteChildrenFromProps(props) {
    const newProps = { ...props };
    delete newProps.children;
    return newProps;
}

export default deleteChildrenFromProps;

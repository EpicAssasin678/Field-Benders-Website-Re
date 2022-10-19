export default (posts=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return payload.posts;
        case 'CREATE':
            return posts;
        default:
            break;
    }
}
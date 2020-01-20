/**
 * Remove an element from a collection
 * @param collection
 * @param target
 * @returns {*}
 */
const removeFromArray = (collection, target) => {
    const index = collection.indexOf(target);
    if ( index > -1 ){
        collection.splice(index, 1);
    }
    return collection;
};

export { removeFromArray };
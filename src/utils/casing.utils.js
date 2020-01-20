/**
 * Get the camelCased version of a string
 * @param string
 * @returns {string}
 */
const camelCase = string => string.charAt(0).toLowerCase() + string.slice(1);

export { camelCase };
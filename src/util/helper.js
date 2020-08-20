import he from "he";

/**
 * @param {object} content encoded html entities from expression engine's backend
 */
export function createMarkup(content) {
  let data = he.decode(content);
  return { __html: data };
}

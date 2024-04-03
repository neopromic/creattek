/*
 * Redirect function used globally in the application.
 * @params url String
 */

const toRedirect = (url: String) => {
  return (window.location.href = url);
};

export { toRedirect };

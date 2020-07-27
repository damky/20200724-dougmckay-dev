/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

let prevScrollpos = window.pageYOffset
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset
  if (currentScrollPos > 0) {
    document.querySelector("header").classList.add("down")
    document.querySelector("header").classList.remove("up")
  } else {
    document.querySelector("header").classList.add("up")
    document.querySelector("header").classList.remove("down")
  }
}

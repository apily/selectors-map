/**
 * selectors-map
 * Element selector manager
 *
 * Copyright 2013 Enrico Marino and Federico Spini
 * MIT License
 */ 

/**
 * Expose `selectors_map`
 */

module.exports = selectors_map;

/**
 * @function selector_map
 * @descriptiorn
 *    create an object of query selected elements
 *
 * @example
 *   //<div id="container">
 *   //  <h1>hello</h1>
 *   //  <div id="text">bla bla bla</div>
 *   // </div>
 *   var el = document.getElementById(container);
 *   var selectors = {
 *     "title": "h1" 
 *     "text": "#text"
 *   };
 *   var map = selectors_map(el, selectors);
 *   // {
 *   //   "title": <h1>hello</h1>, 
 *   //   "text": <div id="text">bla bla bla</div>
 *   // } 
 * 
 * @param {Element} el element
 * @param {Object} selectors selectors
 * @param {Object} [result] selectors map
 * @return {Object} the selectors map
 */

function selectors_map (el, selectors, result) {
  var result = result || {};
  var selector;
  var name;

  for (name in selectors) {
    selector = selectors[name];
    result[name] = el.querySelector(selector);
  }

  return result;
}

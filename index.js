
/**
 * selector-manager
 * Element selector manager
 *
 * Copyright 2013 Enrico Marino and Federico Spini
 * MIT License
 */ 

/**
 * Expose `Manager`
 */

module.exports = SelectorManager;

/**
 * Utilities
 */

var object = {};
var toString = object.toString;

/**
 * SelectorManager
 * Create a selector manager.
 *
 * @param {Element} `el` element
 * @param {Object} `obj` object
 * @return {Manager} the event manager
 */

function SelectorManager(el, obj) {
  if (!(this instanceof SelectorManager)) {
    return new SelectorManager(el, obj);
  }

  this.el = el;
  this.obj = obj;
}

/**
 * bind
 * Bind `name` to the element that match `selector`.
 *
 * @example
 *    selectors.bind('login', 'input[name=login]')
 *
 * @param {String} name name
 * @param {String} selector selector
 * @return {SelectorManager} this for chaining
 * @api public
 */

SelectorManager.prototype.bind = function(name, selector) {
  if (toString.call(name) === '[object Object]') {
    return this.bind_all(name);
  }
  
  this.obj[name] = this.el.querySelector(selector);

  return this;
};

/**
 * bind_all
 * Bind `name` to the element that match `selector`
 * for each pair `name`/`selector` in `obj`.
 *
 * @param {Object} obj pairs `name`/`selector` to bind
 * @return {SelectorManager} this for chaining
 * @api public
 */

SelectorManager.prototype.bind_all = function(obj) {
  Object.keys(obj).forEach(function(key) {
    this.bind(key, obj[key]);
  }, this);
  return this;
};

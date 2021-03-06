import $ from '../core';

$.prototype.setAttr = function(name, value) {
  for(let i = 0; i < this.length; i++) {
    this[i].setAttribute(name, value);
  }
  return this;
};

$.prototype.getAttr = function(name) {
  for(let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(name)) {
      continue;
    }
    return this[i].getAttribute(name);
  }
  return this;
};

$.prototype.removeAttr = function(name) {
  for(let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(name)) {
      continue;
    }
    this[i].removeAttribute(name);
  }
  return this;
};
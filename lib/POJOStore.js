function POJOStore(name) {
  this._data = {};
}

POJOStore.prototype.has = function(key) {
  return this._data[key] !== undefined;
};

POJOStore.prototype.get = function(key) {
  return this._data[key];
};

POJOStore.prototype.set = function(key, value) {
  this._data[key] = value;
};

POJOStore.prototype.keys = function(key, value) {
  return Object.keys(this._data);
};

POJOStore.prototype.del = function(key, value) {
  delete this._data[key];
};

POJOStore.prototype.inc = function(key) {
  if (this.has(key)) {
    return ++this._data[key];
  } else {
    this.set(key, 1);
    return 1;
  }
};

POJOStore.prototype.dec = function(key, value) {
  if (this.has(key)) {
    return --this._data[key];
  } else {
    this.set(key, 0);
    return 0;
  }
};


module.exports = POJOStore;

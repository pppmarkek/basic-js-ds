const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = this._addRec(this._root, data);
  }

  _addRec(node, data) {
    if (node === null) {
      return new Node(data);
    }
    if (data === node.data) {
      return node;
    }
    if (data < node.data) {
      node.left = this._addRec(node.left, data);
    } else {
      node.right = this._addRec(node.right, data);
    }
    return node;
  }

  has(data) {
    return this._hasRec(this._root, data);
  }

  _hasRec(node, data) {
    if (node === null) {
      return false;
    }
    if (data === node.data) {
      return true;
    }
    return data < node.data 
      ? this._hasRec(node.left, data)
      : this._hasRec(node.right, data);
  }

  find(data) {
    return this._findRec(this._root, data);
  }

  _findRec(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      return node;
    }
    return data < node.data 
      ? this._findRec(node.left, data)
      : this._findRec(node.right, data);
  }

  remove(data) {
    this._root = this._removeRec(this._root, data);
  }

  _removeRec(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      node.left = this._removeRec(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeRec(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      let minRight = node.right;
      while (minRight.left !== null) {
        minRight = minRight.left;
      }

      node.data = minRight.data;
      node.right = this._removeRec(node.right, minRight.data);
      return node;
    }
  }

  min() {
    if (this._root === null) {
      return null;
    }
    let current = this._root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this._root === null) {
      return null;
    }
    let current = this._root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
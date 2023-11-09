"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (val < this.val) {
      return this.left === null ? undefined : this.left.findRecursively(val);
    } else if (val > this.val) {
      return this.right === null ? undefined : this.right.findRecursively(val);
    }

    return this;
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    if (val > this.val) {
      if (this.right === null) {
        this.right = new Node(val);
        return this;
      } else {
        return this.right.insertRecursively(val);
      }
    } else {
      if (this.left === null) {
        this.left = new Node(val);
        return this;
      } else {
        return this.left.insertRecursively(val);
      }
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    let nodes = [this.val];

    if (this.left) {
      nodes = [...nodes, ...this.left.dfsPreOrder()];
    }

    if (this.right) {
      nodes = [...nodes, ...this.right.dfsPreOrder()];
    }

    return nodes;
  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    let nodes = [];

    if (this.left) {
      nodes = this.left.dfsInOrder();
    }

    nodes.push(this.val);

    if (this.right) {
      nodes = [...nodes, ...this.right.dfsInOrder()];
    }

    return nodes;
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    let nodes = [];

    if (this.left) {
      nodes = this.left.dfsPostOrder();
    }

    if (this.right) {
      nodes = [...nodes, ...this.right.dfsPostOrder()];
    }

    nodes.push(this.val);

    return nodes;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    if (this.root === null) return (this.root = new Node(val));

    let current = this.root;
    let newNode = new Node(val);

    while (current) {
      if (newNode.val > current.val) {
        if (current.right === null) {
          return (current.right = newNode);
        } else {
          current = current.right;
        }
      } else {
        if (current.left === null) {
          return (current.left = newNode);
        } else {
          current = current.left;
        }
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    this.root.insertRecursively(val);
    return this;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) return current;
      current = val < current.val ? current.left : current.right;
    }

    return undefined;
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    return this.root === null ? undefined : this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (this.root === null) return [];

    return this.root.dfsPreOrder();
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (this.root === null) return [];

    return this.root.dfsInOrder();
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    if (this.root === null) return [];

    return this.root.dfsPostOrder();
  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {
    //50, 25, 75, 10, 40, 100, 15

    if (this.root === null) return [];

    const nodes = [];
    const queue = [this.root];
    let current = this.root;

    while (queue.length) {
      current = queue.shift();
      nodes.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return nodes;
  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}
}

module.exports = {
  BinarySearchTree,
  Node,
};

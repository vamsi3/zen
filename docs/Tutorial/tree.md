# Tree

::: tip NOTE
Whenever we say a Tree ADT, we usually refer to the "rooted, directed, acyclic" one. [Ref: Wikipedia]
:::

## Binary Tree

A tree in which each node has atmost 2 children, ordered and designated as left and right child.

- **Height**: Number of <u>edges</u> in longest path from root to leaf.
- **Full**: Every node has either 0 or 2 children.
- **Perfect**: All interior nodes have 2 children and all leaves are at same level. 
- **Complete**: Tree is perfect until last-but-one level and all leaf nodes on the last level are pushed to left.

## Tree Traversals

Pre-order, in-order, post-order, level-order

- Note: A traversal means to  visit every single node whereas a search means searching for a particular node and hence searches need not visit every tree.

## Binary Search Tree (BST)

- All nodes in left subtree are < root node, all nodes in right subtree > root node. This order property applies to every subtree in the Binary Search Tree.

- Primarily helpful for implementing Dictionary ADT
  - Find, Insert, Remove, Empty
  - Nodes in BST essentialy denote keys of the dictionary. Values can be thought of being linked to nodes.

``` cpp
template<typename K, typename D>
const D& Dictionary<K, D>::find(const K &key) {
  Node* &node = _find(key, _head);
  if (node == nullptr) { throw runtime_error("Key not found"); }
  return node->data;
}

template<typename K, typename D>
typename Dictionary<K, D>::Node*& Dictionary<K, D>::_find(const K &key, Node *& cur) {
  if (cur == nullptr) { return cur; }
  if (key == cur->key) { return cur; }
  auto next = (key < cur->key) ? cur->left : cur->right;
  _find(key, next);
}

template<typename K, typename D>
void Dictionary<K, D>::insert(const K &key, const D &data) {
  auto node = _find(key, head_);
  node = new Node(key, data);
}

// remove can be implemented as a case by case basis based on how many children the removed node has.
```

- **Height Balance Factor** (denoted by `b`) of a node in BST is the difference in height between its to subtrees.

- **Balanced BST**: Every node in BST has balance factor of 0 or 1.
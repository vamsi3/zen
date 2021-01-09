# Forward List *a.k.a.* Singly Linked List

- Sentinel node at head initially.
- `_tail` variable maintained, to enable the function `push_back` to be implemented. This helps to realize the **Queue ADT**. Note that the **Stack ADT** doesn't need this `push_back` since `push_front` and `pop_front` are sufficient for it.

## Code

::: details Test Link
Tested at https://leetcode.com/problems/design-linked-list/
:::

``` cpp
/**
 * INFO: Singly Linked List with Tail
 *    ->  Maintaining a `_tail` pointer helps to realize`push_back()`, thus
 *        enabling to implement Queue ADT
 *    -> One single sentinel node is used for head.
 *
 * CONSTRAINTS:
 *    ->  _tail->next == nullptr
 *    ->  _head always points to it's sentinel node.
 */
template<typename T>
class ForwardListWithTail {
private:
  class Node {
  public:
    Node* _next = nullptr;
    T _value;
    Node() {}
    explicit Node(const T& __val): _value(__val) {}
    explicit Node(T&& __val): _value(__val) {}
  };

  Node* _head = nullptr;
  Node* _tail = nullptr;
  size_t _size = 0;

public:
  ForwardListWithTail() { _head = _tail = new Node; }
  ~ForwardListWithTail() {
    while (_head) {
      auto next = _head->_next;
      delete _head;
      _head = next;
    }
  }

  bool empty() const noexcept { return _head->_next == nullptr; }
  size_t size() const noexcept { return _size; }
  T& front() { return _head->_next->_value; }

  Node* before_begin() noexcept { return _head; }
  Node* begin() noexcept { return _head->_next; }
  Node* before_end() noexcept { return _tail; }
  Node* end() noexcept { return nullptr; }

  void push_front(const T& __val) { insert_after(before_begin(), __val); }
  void push_front(T&& __val) { push_front(std::move(__val)); }
  void push_back(const T& __val) { insert_after(before_end(), __val); }
  void push_back(T&& __val) { push_back(std::move(__val)); }
  void pop_front() { erase_after(before_begin()); }

  Node* insert_after(Node* __pos, const T& __val) {
    ++_size;
    auto new_node = new Node(__val);
    new_node->_next = __pos->_next;
    if (_tail == __pos) _tail = new_node;
    return __pos->_next = new_node;
  }

  Node* insert_after(Node* __pos, T&& __val) {
    insert_after(__pos, std::move(__val));
  }

  Node* erase_after(Node* __pos) {
    --_size;
    auto curr = __pos->_next;
    __pos->_next = curr->_next;
    if (_tail == curr) _tail = __pos;
    delete curr;
    return __pos->_next;
  }

  /** VERIFY: Pending verification */
  // Node* erase_after(Node* __pos, Node* __last) {
  //   auto __curr = __pos->_next;
  //   while (__curr != __last) {
  //     auto __temp = __curr;
  //     __curr = __curr->next;
  //     delete __temp;
  //     --_size;
  //   }
  //   return __pos->_next = __last;
  // }

  Node* at(int __index) {
    auto node = _head;
    for (++__index; __index > 0; --__index) node = node->_next;
    return node;
  }
};
```


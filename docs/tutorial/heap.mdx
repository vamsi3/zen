---
title: Priority Queue / Heap
sidebar_label: Priority Queue
---

:::note QUESTION

**What is the run-time algorithmic complexity of calling `heapifyDown` on every non-leaf node in a complete tree of n nodes?**

The run-time of calling `heapifyDown` on a node is proportional to the height of the node. About half of the nodes are leaf nodes, about a quarter have height 1, about an eighth have height 2, about a sixteenth have height 3, and so on. This summation of heights converges to n, the number of nodes in the tree. Hence running `heapifyDown` on every non-leaf node has a run-time complexity of $O(n)$.
:::

## Code

``` cpp
template<typename T, typename _Compare = less<T>>
class PriorityQueue {
  using _Sequence = vector<T>;

protected:
  _Sequence c;
  _Compare comp;

private:

  /**
   *  Similar to the textbook `heapifyDown` operation.
   */
  void _adjust_heap(const size_t first, size_t hole_index, const size_t len, const T value) {
    size_t second_child = hole_index;

    // This while loop goes down through nodes with two children
    while (second_child < (len - 1) / 2) {
      second_child = 2 * (second_child + 1);
      if (comp(c[first + second_child], c[first + second_child - 1])) --second_child;
      if (comp(c[first + second_child], value)) goto done;
      c[first + hole_index] = c[first + second_child];
      hole_index = second_child;
    }

    // This case checks if we ended up on a node with only one (left) child
    // and that can happen only if there are even number of nodes.
    if ((len & 1) == 0 && second_child == (len - 2) / 2) {
      second_child = 2 * second_child + 1;
      if (comp(c[first + second_child], value)) goto done;
      c[first + hole_index] = c[first + second_child];
      hole_index = second_child;
    }

    done:
    c[first + hole_index] = value;
  }

  /**
   *  @brief: Similar to std::make_heap
   *  @param: Can add a `comp` parameter of type `_Compare` to pass the comparator.
   *          This might make the function more similar to `std::make_heap`
   */
  void _make_heap(size_t first, size_t last) {
    size_t len = last - first;
    if (len < 2) return;

    /** Note that approx. last half of nodes in heap are leaf nodes.
     *  The following parent value denotes the index of highest non-leaf node
     *  in (random-access) container `c`.
     */
    auto parent = (len / 2) - 1;

    while (true) {
      auto value = c[first + parent];
      _adjust_heap(first, parent, len, value);
      if (parent == 0) break;
      --parent;
    }
  }

  /**
   *  @brief: Sometimes referred to as `heapifyUp`
   *          This is similar to `std::push_heap`
   *  @param: Can add a `comp` parameter of type `_Compare` to pass the comparator.
   *          This might make the function more similar to `std::push_heap`
   */
  void _push_heap(size_t first, size_t last) {
    auto value = c[last - 1];
    size_t len = last - first;
    size_t hole_index = len - 1;
    size_t parent = (hole_index - 1) / 2;
    while (hole_index > 0 && comp(c[first + parent], value)) {
      c[first + hole_index] = c[first + parent];
      hole_index = parent;
      parent = (hole_index - 1) / 2;
    }
    c[first + hole_index] = value;
  }

  /**
   *  @brief: Its just a swap of values and heapifyDown.
   *          This is similar to std::pop_heap
   *  @param: Can add a `comp` parameter of type `_Compare` to pass the comparator.
   *          This might make the function more similar to `std::pop_heap`
   */
  void _pop_heap(size_t first, size_t last) {
    size_t len = last - first;
    if (len < 2) return;
    --last; --len;
    auto value = c[last];
    c[last] = c[first]; // This is not necessary. Just ensures the discarded value is at end of tree / containter.
    _adjust_heap(first, 0, len, value);
  }

public:
  PriorityQueue() {}
  PriorityQueue(const _Sequence& __s) : c(__s)        { _make_heap(0, c.size()); }
  PriorityQueue(_Sequence&& __s) : c(std::move(__s))  { _make_heap(0, c.size()); }

  bool empty() const { return c.empty(); }
  size_t size() const { return c.size(); }
  const T& top() const { return c.front(); }

  void push(const T& __x) {
    c.push_back(__x);
    _push_heap(0, c.size());
  }
  void push(T&& __x) {
    c.push_back(std::move(__x));
    _push_heap(0, c.size());
  }
  void pop() {
    _pop_heap(0, c.size());
    c.pop_back();
  }
};
```

---
---

# Union-Find / Disjoint Set Union (DSU)

## Code

``` cpp
/**
 * @brief: vector `p` contains -(size of tree) if p is a  root else ID of parent in tree.
 */
namespace DSU {
  void init(vector<int32_t> &p, int32_t n) { p.assign(n, -1); }
  int root(vector<int32_t> &p, int32_t v) { return (p[v] < 0) ? v : p[v] = root(p, p[v]); }
  inline bool same(vector<int32_t> &p, int32_t u, int32_t v) { return root(p, u) == root(p, v); }

  /**
   * @return: `true` if u, v are already in same tree.
   */
  inline bool connect(vector<int32_t> &p, int32_t u, int32_t v) {
    if ((u = root(p, u)) == (v = root(p, v))) return true;
    if (p[u] > p[v]) swap(u, v); p[u] += p[v]; p[v] = u; return false;
  }
}
```

## Notes

- The root node of the Tree contains the `-(size of subtree)` . All other nodes contain `Parent ID`.

- The `DSU::root` function can also be implemented **<u>iteratively</u>** as below

  ``` cpp
  int root(vector<int32_t> &p, int32_t v) {
    if (p[v] < 0) return v;
    int r = v; while (p[r] >= 0) r = p[r];
    while (p[v] >= 0) { auto pa = p[v]; p[v] = r; v = pa; }
    return r;
  }
  ```

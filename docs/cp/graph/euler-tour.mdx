---
title: Euler Path & Euler Circuit
sidebar_label: Euler Tour
---

:::note RESOURCES

1. [https://en.wikipedia.org/wiki/Eulerian_path](https://en.wikipedia.org/wiki/Eulerian_path)

:::

### Hierholzer's algorithm

:::note

This algorithm itself assumes that euler path / circuit exists *i.e.*

- The graph is connected
- The number of vertices with odd degree is either 0 or 2.
    - If it is 2, this algorithm gives euler path.
    - If it is 0, this algorithm gives euler circuit (without repeating start vertex).

:::

- Choose any starting vertex v, and follow a trail of edges from that vertex until returning to v. It is not possible to get stuck at any vertex other than v, because the even degree of all vertices ensures that, when the trail enters another vertex w there must be an unused edge leaving w. The tour formed in this way is a closed tour, but may not cover all the vertices and edges of the initial graph.
- As long as there exists a vertex u that belongs to the current tour but that has adjacent edges not part of the tour, start another trail from u, following unused edges until returning to u, and join the tour formed in this way to the previous tour.
- Since we assume the original graph is connected, repeating the previous step will exhaust all edges of the graph.


``` cpp
const int N = 2e5 + 5;
set<int> g[N];
vector<int> eu;

/*
 * Warning: This function alters 'g';
 */
void euler(int u) {
  while (!g[u].empty()) {
    int v = *g[u].begin();
    g[u].erase(v); g[v].erase(u);
    euler(v);
  }
  eu.push_back(u);
}

void solve() {
  cin >> n >> m;
  for (int i = 0; i < m; ++i) {
    int u, v; cin >> u >> v;
    g[u].insert(v); g[v].insert(u);
  }
  euler(1); // any start vertex is fine for circult
  // for finding a tour, this vertex called MUST BE one of the two odd degree vertices.
}
```

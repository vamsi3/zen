# LCA - Lowest Common Ancestor

## Brute Force

``` cpp
const int N = 5e5 + 5;
vector<int> g[N];
int p[N], h[N];

void dfs(int u, int pa = -1) {
  p[u] = pa;
  if (pa != -1) { h[u] = h[pa] + 1; }
  for (auto &v : g[u]) if (v != pa) dfs(v, u);
}

int lca(int u, int v) {
  if (u == v) return u;
  if (h[u] < h[v]) swap(u, v);
  return lca(p[u], v);
}

void solve() {
  int n, q; cin >> n >> q;
  for (int i = 0; i < n; ++i) { g[i].clear(); h[i] = 0; }
  for (int i = 1; i < n; ++i) { int p; cin >> p; g[p].push_back(i); }
  dfs(0);
  while (q--) { int u, v; cin >> u >> v; cout << lca(u, v) << '\n'; }
}
```

## Binary Lifting

``` cpp
const int N = 5e5 + 5;
const int LOG_N = 19; /* added */
vector<int> g[N];
// int p[N], h[N];
int p[N][LOG_N], h[N];

void dfs(int u, int pa = -1) {
  p[u][0] = pa; /* diff */
  if (pa != -1) { h[u] = h[pa] + 1; }
  for (int i = 1; i < LOG_N; ++i) /* added */
    if (p[u][i - 1] != -1) p[u][i] = p[p[u][i - 1]][i - 1]; /* added */
  for (auto &v : g[u])
    if (v != pa) dfs(v, u);
}

int lca(int u, int v) {
  if (h[u] < h[v]) swap(u, v);
  for (int i = LOG_N - 1; i >= 0; --i) /* added */
    if (p[u][i] != -1 && h[p[u][i]] >= h[v]) u = p[u][i];
  if (u == v) return u; /* moved */
  for (int i = LOG_N - 1; i >= 0; --i) /* added */
    if (p[u][i] != p[v][i]) { u = p[u][i]; v = p[v][i]; }
  return p[u][0]; /* diff */
}

void solve() {
  int n, q; cin >> n >> q;
  for (int i = 0; i < n; ++i) { g[i].clear(); h[i] = 0;
    for (int j = 0, k = 1; k < n; ++j, k <<= 1) p[i][j] = -1; } /* added */
  for (int i = 1; i < n; ++i) { int p; cin >> p; g[p].push_back(i); }
  dfs(0);
  while (q--) { int u, v; cin >> u >> v; cout << lca(u, v) << '\n'; }
}

```


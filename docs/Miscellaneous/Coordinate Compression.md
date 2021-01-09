# Coordinate Compression

``` cpp
namespace Compressor {
  class Compressor {
    vector<int> v;
  public:
    void add(int x) { v.push_back(x); }
    void finalize() { sort(v.begin(), v.end()); v.resize(unique(v.begin(), v.end()) - v.begin()); }
    int get(int x) { return lower_bound(v.begin(), v.end(), x) - v.begin(); }
  };
}

Compressor::Compressor c;

void solve() {
  int n; cin >> n; int a[n];
  for (int i = 0; i < n; ++i) { cin >> a[i]; c.add(a[i]); }
  c.finalize();
  for (int i = 0; i < n; ++i) { cout << c.get(a[i]) << ' '; }
}
```


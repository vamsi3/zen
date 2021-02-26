---
title: Coordinate Compression
sidebar_label: Coordinate Compression
---

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

## More Efficient Form
Compression when elements are referenced by index

``` cpp
// PSEUDO-CODE
namespace Compressor {
  class Compressor {
    int n = 0;
    pair<int, int> v[N];
    int en[N];
  public:
    void add(int x) { v[n] = {x, n}; ++n; }
    void finalize() {
      sort(v, v + n);
      int en[0] = 0;
      for (int i = 1; i < n; ++i) {
        if (v[i].first == v[i - 1].first) {
          en[i] = en[i - 1];
        }
        else {
          en[i] = en[i - 1] + 1;
        }
      }
    }
    int get(int x) { return en[x]; }
  };
}
```
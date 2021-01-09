---
---

# Tournament Tree

``` cpp
#pragma once
#include "../template/template.cpp"

const int N = 2e5 + 5;
int n, a[N];
int t[4 * N];

namespace TournamentTree {
  /**
   * SOURCE:  https://www.geeksforgeeks.org/second-minimum-element-using-minimum-comparisons/
   *          https://www.geeksforgeeks.org/tournament-tree-and-binary-heap/
   * TEST:    Coursera - Algorithmic Toolbox
  **/

  void build(int v = 1, int l = 0, int r = n - 1) {
      if (l == r) {
          t[v] = a[l];
          return;
      }
      int m = l + (r - l) / 2;
      int vl = v << 1, vr = vl | 1;
      build(vl, l, m);
      build(vr, m + 1, r);
      int vh = (t[vl] >= t[vr]) ? vl : vr;
      t[v] = t[vh];
  }
}

#define MAIN
#ifdef MAIN

int main() {
    cin >> n;
    for (int i = 0; i < n; ++i) {
        cin >> a[i];
    }
    TournamentTree::build();
    ll an = ll(1) * t[2] * t[3];
    cout << an << '\n';
}

#endif
```

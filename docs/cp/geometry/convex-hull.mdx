---
title: Convex Hull
sidebar_label: Convex Hull
---

## Andrew's Monotone Chain Algorithm

Probably a bit faster than Graham's Scan.

> Test Link: [https://open.kattis.com/problems/convexhull](https://open.kattis.com/problems/convexhull)

``` cpp
namespace ConvexHull {
  using P = Point::Point<int64_t>;

  vector<P> AndrewMonotoneChain(vector<P> &p) {
    sort(p.begin(), p.end(), [&](const auto& a, const auto& b) {
      return a.x != b.x ? a.x < b.x : a.y < b.y;
    });
    p.resize(unique(p.begin(), p.end()) - p.begin());
    int n = p.size();
    if (n <= 2) return p;
    vector<P> h(n + 1); int k = 0;
    for (int i = 0; i < n; ++i) { // Lower Hull
      while (k >= 2 && h[k - 2].cross(h[k - 1], p[i]) <= 0) --k;
      h[k++] = p[i];
    }
    for (int i = n - 2, t = k + 1; i >= 0; --i) { // Upper Hull
      while (k >= t && h[k - 2].cross(h[k - 1], p[i]) <= 0) --k;
      h[k++] = p[i];
    }
    h.resize(k - 1);
    return h;
  }
}
```

## Convex Hull with Uncertainty of presence and location of points

https://arxiv.org/abs/1406.6599
---
title: Number Theoretic Transform (NTT)
---

::: tip INCLUDE
- Numeric/ModInt.cpp
:::

``` cpp
#pragma once

namespace NTT {

  Mint primitive_root(int32_t mod) {
    int32_t max_size = 1 << __builtin_ctz(mod - 1);
    Mint root = 2;
    while (!(root.pow(max_size) == 1 && root.pow(max_size / 2) != 1)) ++root;
    return root;
  }

  const Mint ROOT = 3;  // primitive root HARDCODED for MOD = 998244353
  // const Mint ROOT = primitive_root(MOD); // for other MOD values, use this.

  void ntt(vector<Mint> &a, bool inverse) {
    if (a.empty()) return;

    const int32_t n = a.size();
    assert((n ^ (n & -n)) == 0);
    auto h = ROOT.pow((MOD - 1) / n);
    if (inverse) h = h.inv();

    int32_t i = 0;
    for (int32_t j = 1; j < n - 1; ++j) {
      for (int32_t k = n >> 1; k > (i ^= k); k >>= 1) {}
      if (j < i) swap(a[i], a[j]);
    }

    for (int32_t m = 1; m < n; m *= 2) {
      const auto m2 = 2 * m;
      const auto base = h.pow(n / m2);
      Mint w = 1;
      for (int32_t x = 0; x < m; ++x) {
        for (int32_t s = x; s < n; s += m2) {
          auto u = a[s], d = a[s + m] * w;
          a[s] = u + d; a[s + m] = u - d;
        }
        w *= base;
      }
    }

    if (inverse) {
      auto n_inv = Mint(n).inv();
      for (auto &x : a) x *= n_inv;
    }
  }

  void conv1d(vector<Mint> &a, vector<Mint> b) {
    int32_t ntt_size = 1, t = a.size() + b.size() - 1;
    while (ntt_size < t) ntt_size <<= 1;
    a.resize(ntt_size); ntt(a, false);
    b.resize(ntt_size); ntt(b, false);
    for (int i = 0; i < ntt_size; ++i) a[i] *= b[i];
    ntt(a, true); a.resize(t);
  }

}

// #define MAIN
#ifdef MAIN

int main() {
  vector<Mint> a = {1, 4, 2, 3, 4};
  vector<Mint> b = {3, 2, 0, 2, 1, 2};
  NTT::conv1d(a, b);
  for (auto &x : a) cout << x << ' '; cout << '\n';
  cout << NTT::primitive_root(MOD);
}

#endif
```

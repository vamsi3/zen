---
title: Number Theoretic Transform (NTT)
sidebar_label: NTT
---

:::note INCLUDE

- [`ModularArithmetic::ModInt`](/math/modint)

:::

``` cpp
namespace NTT {
  static constexpr int32_t MOD = Mint::MOD;
  const Mint ROOT = Mint::primitiveRoot();

  void ntt(vector<Mint> &a, bool inverse) {
    if (a.empty()) return;

    const int32_t n = a.size();
    assert((n ^ (n & -n)) == 0);
    auto h = ROOT.pow((MOD - 1) / n);
    if (inverse) h = h.inv();

    int32_t i = 0;
    for (int32_t j = 1; j < n - 1; ++j) {
      for (int32_t k = n >> 1; k > (i ^= k); k >>= 1);
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



inline void example() {
  vector<Mint> a = {1, 4, 2, 3, 4};
  vector<Mint> b = {3, 2, 0, 2, 1, 2};
  NTT::conv1d(a, b);
  for (auto &x : a) cout << x << ' '; cout << '\n';
  cout << Mint::primitiveRoot();
}
```

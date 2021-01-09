---
title: Polynomial Class
sidebar_label: Poly [Class]
---

:::note INCLUDE

- [`NTT::conv1d`](/math/ntt.md)

:::

``` cpp
#pragma once
#include "../template/template.cpp"
#include "../numeric/NTT.cpp"

namespace Poly {

  class Poly {
  public:
    vector<Mint> c;

    void sanitize() {
      while (!c.empty() && c.back() == 0) c.pop_back();
    }

    Poly operator+=(const Poly &x) {
      c.resize(max(c.size(), x.c.size()));
      for (size_t i = 0; i < c.size(); ++i) c[i] += x.c[i];
      sanitize();
      return *this;
    }
    Poly operator-=(const Poly &x) {
      c.resize(max(c.size(), x.c.size()));
      for (size_t i = 0; i < c.size(); ++i) c[i] -= x.c[i];
      sanitize();
      return *this;
    }
    Poly operator*=(const Poly &x) { NTT::conv1d(c, x.c); sanitize(); return *this; }
    Poly operator-() const { auto p = *this; for (auto &x : p.c) x = -x; return p; }

    friend Poly operator+(const Poly &x, const Poly &y) { Poly p = x; return p += y; }
    friend Poly operator-(const Poly &x, const Poly &y) { Poly p = x; return p -= y; }
    friend Poly operator*(const Poly &x, const Poly &y) { Poly p = x; return p *= y; }

    friend ostream& operator<<(ostream& stream, const Poly& x)
      { stream << "Poly[ "; for (auto &c : x.c) stream << c << ' '; return stream << ']'; }

    Mint& operator[](int32_t idx) { return c[idx];  }

    void derivative() {
      if (c.empty()) return;
      for (int32_t i = 0; i < c.size() - 1; ++i) {
          c[i] = c[i + 1] * (i + 1);
      }
      c.resize(c.size() - 1);
    }

    void integral() {
      if (c.empty()) return;
      c.resize(c.size() + 1);
      for (int32_t i = c.size() - 1; i > 0; --i) {
        c[i] = c[i - 1] * Mint(i).inv();
      }
      c[0] = 0;
    }

    Poly exp() {
      Poly f, g; f.c = g.c = {1};
      for (int32_t m = 1; m < c.size(); m *= 2) {
        auto g_t1 = f * g; g_t1.c.resize(m);
        g_t1 = -g_t1; g_t1[0] += 2;
        g *= g_t1; g.c.resize(m);

        auto q = *this; q.c.resize(m); q.derivative();

        auto w = f * q; w.c.resize(2 * m - 1);
        auto w_t1 = f; w_t1.derivative();
        for (int32_t i = 0; i < 2 * m - 1; ++i) {
            if (i < m - 1) w[i] = w_t1[i] - w[i];
            else w[i] = -w[i];
        }
        w *= g; w.c.resize(2 * m - 1);
        for (int32_t i = 0; i < m - 1; ++i) w[i] += q[i];

        w.integral();
        for (int32_t i = 0; i < 2 * m; ++i) {
            if (i < c.size()) w[i] = c[i] - w[i];
            else w[i] = -w[i];
        }
        w[0] += 1;
        f *= w; f.c.resize(2 * m);
      }
      f.sanitize();
      return f;
    }
  };

}

#define MAIN
#ifdef MAIN

const int N = 150000 + 5;
int n, q;
int c[N];
inline void incrCoeff(ll p) { if (p <= n) ++c[p]; }
inline void decrCoeff(ll p) { if (p <= n) --c[p]; }

int main() {
  // Poly::Poly<T> p; p.c = {1, 4};
  // Poly::Poly<T> q; q.c = {2, 3};
  // p *= q;
  // p = p.exp();
  // cout << p << '\n';

    cin >> n >> q;
    for (int i = 0; i < q; ++i) {
        ll a, b; cin >> a >> b;
        incrCoeff(a * (b + 1)); decrCoeff(a);
    }
    Poly::Poly p; p.c.resize(n + 1, 0);
    for (int i = 1; i <= n; ++i) {
        for (int j = 1, k = i; k <= n; ++j, k += i) {
            p[k] -= c[i] / Mint(j);
        }
    }
    p = p.exp();
    for (int i = 1; i <= n; ++i) {
        cout << p[i] << ' ';
    }
    cout << '\n';
}

#endif
```

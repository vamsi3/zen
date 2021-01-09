---
---

# Math (m`op`, pow, ... *etc*.)

``` cpp
#pragma once

#include "../template/template.cpp"

const int32_t MOD = 998244353;

namespace Arithmetic {

  inline int madd(int32_t a, int32_t b, int32_t m = MOD) { return (a + b >= m) ? (a + b - m) : (a + b); }
  inline int msub(int32_t a, int32_t b, int32_t m = MOD) { return (a >= b) ? (a - b) : (a - b + m); }
  inline int mmul(int32_t a, int32_t b, int32_t m = MOD) { return int64_t(a) * b % m; }

  inline void maddi(int32_t &a, int32_t b, int32_t m = MOD) { a += b; if (a >= m) a -= m; }
  inline void msubi(int32_t &a, int32_t b, int32_t m = MOD) { a -= b; if (a < 0 ) a += m; }
  inline void mmuli(int32_t &a, int32_t b, int32_t m = MOD) { a = mmul(a, b, m); }

  int64_t pow(int64_t a, int64_t b) {
    int64_t r = 1;
    while (b > 0) { if (b & 1) r *= a; a *= a; b >>= 1; }
    return r;
  }

  int32_t mpow(int32_t a, int64_t b, int32_t m = MOD) {
    int r = 1;
    for (b %= (MOD - 1); b > 0; b >>= 1)
      if (b & 1) mmuli(r, a); mmuli(a, a);
    return r;
  }

  int32_t minv(int32_t a, int32_t m) {
    a %= m; assert(a);
    if (a == 1) return 1;
    return m - static_cast<int64_t>(minv(m, a)) * m / a;
  }

  int32_t minv_iterative(int32_t a, int32_t m = MOD) {
    int32_t g = m, r = a, x = 0, y = 1;
    while (r != 0) {
      int32_t q = g / r;
      g %= r; swap(g, r);
      x -= q * y; swap(x, y);
    }
    return x < 0 ? x + m : x;
  }
}

// #define MAIN
#ifdef MAIN

int main() {

}

#endif
```

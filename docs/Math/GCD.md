---
title: Greatest Common Divisor
sidebar_label: GCD
---

## Euclid's Algorithm

``` cpp
uint64_t gcdEuclid(int64_t a, int64_t b) {
  if (a < 0) a = -a; if (b < 0) b = -b;
  while (a && b) if (a > b) a %= b; else b %= a;
  return a | b;
}
```

**Time Complexity**: $\mathcal{O}(\log(\max(a, b)))$. Note that this is not a strict bound, and often runs faster than this.

**Worst Case**: Consecutive Fibonacci numbers are worst-case input to this algorithm.

### Binary GCD - An optimization

The Binary GCD algorithm is an optimization to the normal Eulidean algorithm.

The slow part of the normal algorithm are the modulo operations. Modulo operations, although we see them as O(1)O(1), are a lot slower than simpler operations like addition, subtraction or bitwise operations. So it would be better to avoid those.

It turns out, that you can design a fast GCD algorithm that avoids modulo operations. It's based on a few properties:

- If both numbers are even, then we can factor out a two of both and compute the GCD of the remaining numbers: $\gcd(2a, 2b) = 2 \gcd(a, b)$
- If one of the numbers is even and the other one is odd, then we can remove the factor 2 from the even one: $\gcd(2a, b) = \gcd(a, b)$ if $b$ is odd.
- If both numbers are odd, then subtracting one number of the other one will not change the GCD: $\gcd(a, b) = \gcd(b, a-b)$ (this can be proven in the same way as the correctness proof of the normal algorithm)

Using only these properties, and some fast bitwise functions from GCC, we can implement a fast version:

``` cpp
int64_t binaryGCD(int64_t a, int64_t b) {
  if (a < 0) a = -a; if (b < 0) b = -b;
  if (!a || !b) return a | b;
  uint64_t shift = __builtin_ctz(a | b);
  auto f = [&](int64_t &x) { x >>= __builtin_ctz(x); };
  f(a); f(b); while (a && b) { if (a > b) f(a -= b); else f(b -= a); }
  return (a | b) << shift;
}
```

## Extended Euclid Algorithm

``` cpp
tuple<int64_t, int64_t> extendedEuclid(uint64_t a, uint64_t b) {
  if (!b) return {1, 0};
  auto [x, y] = extendedEuclid(b, a % b);
  return {y, x - y * (a / b)};
}
```

Verification code:

``` cpp
void solve() {
    for (int i = -100; i < 100; ++i) {
        for (int j = -100; j < 100; ++j) {
            auto [a, b] = extendedEuclid(abs(i), abs(j));
            if (i < 0) a = -a; if (j < 0) b = -b;
            assert(a * i + b * j == gcd(i, j));
        }
    }
}
```

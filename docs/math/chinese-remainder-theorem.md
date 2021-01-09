---
---

# Chinese Remainder  Theorem

## Theorem

Given pairwise coprime positive integers $n_1, n_2, \ldots, n_k$ and arbitrary integers $a_1, a_2, \ldots, a_k$, the system of simultaneous congruences


$$x \equiv a_1 \pmod{n_1}; \quad x \equiv a_2 \pmod{n_2}; \quad \cdots \quad x \equiv a_k \pmod{n_k};$$

has a solution, and the solution is unique modulo $N = n_1n_2\cdots n_k$.



The following is a general construction to find a solution to a system of congruences using the Chinese remainder theorem:

1. Compute $N = n_1 \times n_2 \times \cdots \times n_k$.

2. For each $i = 1, 2,\ldots, k$, compute

   $$y_i = \frac{N}{n_i} = n_1n_2 \cdots n_{i-1}n_{i+1} \cdots n_k$$

3. For each $i = 1,2,\ldots, k$, compute $z_i \equiv y_i^{-1} \bmod{n_i}$ using Euclid's extended algorithm ($z_i$ exists since $n_1, n_2, \ldots, n_k$ are pairwise coprime).

4. The integer $x = \sum_{i=1}^{k} a_i y_i z_i$ is a solution to the system of congruences, and $x \bmod{N}$ is the unique solution modulo $N$.

## Code

``` cpp
int chineseRemainder(const vector<int> &n, const vector<int> &a) {
  int k = n.size(), N = 1, x = 0;
  for (int i = 0; i < k; ++i) N *= n[i];
  for (int i = 0; i < k; ++i) {
    int y = N / n[i];
    maddi(x, mmul(a[i], mmul(y, minv(y, n[i]), N), N), N);
  }
  return x;
}
```



## Use in Computation of Large Integers

Instead of large numbers, we can work with their remainders modulo several big prime numbers, if every number is less than product of all primes used.

In this form, it would be fast to sum and multiply large integers, but hard to compare. This is actually used to speed up computations.
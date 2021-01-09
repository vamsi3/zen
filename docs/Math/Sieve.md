---
---

# Sieve

## Sieve of Eratosthenes

``` cpp
bool is_prime[N];
vector<int> primes;

void sieve(int n) {
  for (int i = 2; i < n; ++i) is_prime[i] = true;
  for (int i = 2; i < n; ++i) {
    if (!is_prime[i]) continue;
    primes.push_back(i);
    if (ll(i) * i >= n) continue;
    for (int j = i * i; j < n; j += i) is_prime[j] = false;
  }
}
```

## Segmented Sieve

``` cpp
vector<int> prime_divisors[N];

/* assume sieve(N) is already called. */
void segmentedSieve(int a, int b) {
  for (ll x = a; x <= b; ++x) prime_divisors[x - a].clear();
  for (const auto& p: primes) {
    for (ll x = ((a + p - 1) / p) * p; x <= b; x += p) {
      /* p is a prime divisor of x. Do anything with this fact. */
      prime_divisors[x - a].push_back(p);
    }
  }
}

/* If a prime greater than sqrt(N) divides x then that prime will be missing from prime_divisors[x].
 * You can find that by the expressions x / (product of all p in prime_divisors[x])
 */
```

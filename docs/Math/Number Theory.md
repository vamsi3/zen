---
---

# Number Theory

**Euclid's lemma** — If a prime *p* divides the product *ab* of two integers *a* and *b*, then *p* must divide at least one of those integers *a* and *b*.

## Euler Theorem

Proof — An interesting proof comes from the direction of Group Theory. Assume we start from 1 and keep multiplying a. For some k, a^k = 1 mod n, and thus a cycle is formed. Now, start with some other value b, and keep multiplying a. Finally b*a^k = 1 mod n. So, again we get a cycle of length k. One we no more have co-prime remainders modulo n, we can see that there are maybe some c such cycles each with length k which are completely disjoint. So, we conclude c * k = phi(n). But since a^k = 1 mod n, we get a ^ phi(n) = 1 mod n. QED.
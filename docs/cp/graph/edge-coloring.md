---
title: Edge Coloring of Graph
sidebar_label: Edge Coloring
---

:::note RESOURCES

1. [https://codeforces.com/blog/entry/75431](https://codeforces.com/blog/entry/75431)

:::

**Vizing's theorem** states that every simple undirected graph may be edge colored using a number of colors that is at most one larger than the maximum degree $\Delta$ of the graph. At least Δ colors are always necessary, so the undirected graphs may be partitioned into two classes: "class 1" graphs for which Δ colors suffice, and "class 2" graphs for which $\Delta + 1$ colors are necessary.

In general, optimal edge coloring is NP-complete, so it is very unlikely that a polynomial time algorithm exists.

[Planar graphs](https://en.wikipedia.org/wiki/Planar_graph) of maximum degree at least 7 are of class 1. Maximum degree 6 is also conjectured to be of class 1 but is yet unproved.

## Misra & Gries Edge Coloring Algorithm

> Paper: [https://www.cs.utexas.edu/users/misra/psp.dir/vizing.pdf](https://www.cs.utexas.edu/users/misra/psp.dir/vizing.pdf)
>
> Code:
>
> - https://github.com/koosaga/olympiad/blob/master/Library/codes/graph_etc/edgecolor_vizing.cpp
> - https://www.boost.org/doc/libs/1_67_0/boost/graph/edge_coloring.hpp
>
> Test: https://www.acmicpc.net/problem/10446

The [Misra & Gries edge coloring algorithm](https://en.wikipedia.org/wiki/Misra_%26_Gries_edge_coloring_algorithm) finds an [edge coloring](https://en.wikipedia.org/wiki/Edge_coloring) of any graph. The coloring produces uses at most $\Delta + 1$ colors, where $\Delta$ is the maximum degree of the graph. This is optimal for some graphs, and by [Vizing's theorem](https://en.wikipedia.org/wiki/Vizing's_theorem) it uses at most one color more than the optimal for all others.

Time Complexity: $\mathcal{O}(VE)$

``` cpp

```

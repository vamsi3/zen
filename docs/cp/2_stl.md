---
title: Interesting STL functions
sidebar_label: STL
slug: /stl
---

 - `std::nth_element` ➝ Finds n<sup>th</sup> element and partitions the array around it. [Link](http://www.cplusplus.com/reference/algorithm/nth_element/)
  - Instead of `int a = min(x1,min(x2,min(x3,min(x4,x5))));`, `int a = min({x2,x2,x3,x4,x5});` can be done.

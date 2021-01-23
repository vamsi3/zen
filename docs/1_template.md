---
title: Competitive Programming
sidebar_label: Home
slug: /
---

This contains all the template code and resources for CP.

## Resources

- [http://www.cplusplus.com/doc/tutorial/](http://www.cplusplus.com/doc/tutorial/)
- [https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list](https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list)
-

## Debug Code

``` cpp
// Credits: tourist

string to_string(const string& s) { return '"' + s + '"'; }
void debug_out() { cout << endl; }
template <typename Head, typename... Tail>
void debug_out(Head H, Tail... T) { cout << " " << to_string(H); debug_out(T...); }
#ifdef LOCAL
  #define debug(...) cout << "#" << __LINE__ << " [" << #__VA_ARGS__ << "]:", debug_out(__VA_ARGS__)
#else
  #define debug(...) 3;
#endif
```

## Measuring Time

``` cpp
auto tick = chrono::high_resolution_clock::now();
auto tock = chrono::high_resolution_clock::now();
cout << chrono::duration_cast<chrono::milliseconds>(tock - tick).count() << " ms\n";
```

---

## C++ Template

``` cpp
// Author: Vamsi Krishna Reddy Satti
// With love for Competitive Programming!

#include <bits/stdc++.h>
using namespace std;
#pragma GCC target("popcnt")

void solve() {

}

int main() {
  ios::sync_with_stdio(false); cin.tie(nullptr);
  solve();
}
```

## Kotlin Template

``` kotlin
// Author: Vamsi Krishna Reddy Satti
// With love for Competitive Programming!
    @JvmField val INPUT = System.`in`
    @JvmField val OUTPUT = System.out

    @JvmField val _reader = INPUT.bufferedReader()
    fun readLine(): String? = _reader.readLine()
    fun readLn() = _reader.readLine()!!
    @JvmField var _tokenizer: java.util.StringTokenizer = java.util.StringTokenizer("")
    fun read(): String {
        while (_tokenizer.hasMoreTokens().not()) _tokenizer = java.util.StringTokenizer(_reader.readLine() ?: return "", " ")
        return _tokenizer.nextToken()
    }
    fun readInt() = read().toInt()
    fun readDouble() = read().toDouble()
    fun readLong() = read().toLong()
    fun readStrings(n: Int) = List(n) { read() }
    fun readLines(n: Int) = List(n) { readLn() }
    fun readInts(n: Int) = List(n) { read().toInt() }
    fun readIntArray(n: Int) = IntArray(n) { read().toInt() }
    fun readDoubles(n: Int) = List(n) { read().toDouble() }
    fun readDoubleArray(n: Int) = DoubleArray(n) { read().toDouble() }
    fun readLongs(n: Int) = List(n) { read().toLong() }
    fun readLongArray(n: Int) = LongArray(n) { read().toLong() }

    @JvmField val _writer = java.io.PrintWriter(OUTPUT, false)
    inline fun output(block: java.io.PrintWriter.() -> Unit) { _writer.apply(block).flush() }

fun solve() {

}


fun main() {
    output {
        var t = 1
        // var t = readInt()
        for (i in 1..t) solve()
    }
}
```

## Java Template

``` java
import java.io.*;
import java.util.*;

class test {
  public static void main (String [] args) throws IOException {
    // Use BufferedReader rather than RandomAccessFile; it's much faster
    BufferedReader f = new BufferedReader(new FileReader("test.in"));
                                                  // input file name goes above
    PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter("test.out")));
    // Use StringTokenizer vs. readLine/split -- lots faster
    StringTokenizer st = new StringTokenizer(f.readLine());
						  // Get line, break into tokens
    int i1 = Integer.parseInt(st.nextToken());    // first integer
    int i2 = Integer.parseInt(st.nextToken());    // second integer
    out.println(i1+i2);                           // output result
    out.close();                                  // close the output file
  }
}
```

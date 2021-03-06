---
title: Modular Integer Class
sidebar_label: ModInt [Class]
---

:::note INCLUDE

- `ModularArithmetic::inv` ➝ [/cp/math/arithmetic](/cp/math/arithmetic#inverse)

:::

``` cpp
namespace ModularArithmetic {
  template<int32_t MOD_> class ModInt {
    static_assert(MOD_ > 0, "MOD must be positive");

  private:
    int32_t v;

  public:
    static constexpr int32_t MOD = MOD_;
    ModInt() : v(0) {}
    ModInt(int32_t v_) : v(v_ % MOD) { if (v < 0) v += MOD; }
    ModInt(int64_t v_) : v(v_ % MOD) { if (v < 0) v += MOD; }
    explicit operator int() const { return v; }
    friend std::ostream& operator << (std::ostream& os, const ModInt& n) { return os << int(n); }
    friend std::istream& operator >> (std::istream& is, ModInt& n) { int64_t v_; is >> v_; n = ModInt(v_); return is; }
    friend bool operator == (const ModInt& a, const ModInt& b) { return a.v == b.v; }
    friend bool operator != (const ModInt& a, const ModInt& b) { return a.v != b.v; }

    ModInt  operator +  ()    { return ModInt(*this); }
    ModInt  operator -  ()    { ModInt n; n.v = v ? MOD - v : 0; return n; }
    ModInt& operator ++ ()    { ++v; if (v == MOD) v = 0; return *this; }
    ModInt& operator -- ()    { if (v == 0) v = MOD; --v; return *this; }
    ModInt  operator ++ (int) { ModInt n(*this); operator++(); return n; }
    ModInt  operator -- (int) { ModInt n(*this); operator--(); return n; }

    ModInt& operator += (const ModInt &o) { if ((v += o.v) >= MOD) v -= MOD; return *this; }
    ModInt& operator -= (const ModInt &o) { if ((v -= o.v) < 0) v += MOD; return *this; }
    ModInt& operator *= (const ModInt &o) { auto r = static_cast<int64_t>(v) * o.v; v = (r >= MOD) ? r % MOD : r; return *this; }
    ModInt& operator /= (const ModInt &o) { return *this *= o.inv(); }

    friend ModInt operator + (ModInt a, const ModInt &b) { return a += b; }
    friend ModInt operator - (ModInt a, const ModInt &b) { return a -= b; }
    friend ModInt operator * (ModInt a, const ModInt &b) { return a *= b; }
    friend ModInt operator / (ModInt a, const ModInt &b) { return a /= b; }

    ModInt inv() const { ModInt r; r.v = minv(v, MOD); return r; }
    ModInt pow(int64_t b) const { ModInt a(*this), r; r.v = 1; for (b %= (MOD - 1); b > 0; b >>= 1) { if (b & 1) r *= a; a *= a; } return r; }
    friend ModInt inv(const ModInt& n) { return n.inv(); }
    friend ModInt pow(const ModInt& n, int64_t b) { return n.pow(b); }

    static constexpr ModInt primitiveRoot() {
      if (MOD == 998244353) return 3;
      int32_t max_size = 1 << __builtin_ctz(MOD - 1);
      ModInt root = 2;
      while (!(root.pow(max_size) == 1 && root.pow(max_size / 2) != 1)) ++root;
      return root;
    }
  };
}

constexpr int MOD = 998244353;
using Mint = ModularArithmetic::ModInt<MOD>;
```

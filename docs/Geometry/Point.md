# Point `class`

``` cpp
namespace Point {
  template<typename T> class Point {
  public:
    T x, y;
    Point() : x(0), y(0) {}
    explicit Point(T x_, T y_) : x(x_), y(y_) {}
    template<typename U> explicit Point(const Point<U>& p) : x(p.x), y(p.y) {}

    friend std::istream& operator>>(std::istream& is, Point& p) { is >> p.x >> p.y; return is; }
    friend std::ostream& operator<<(std::ostream& os, const Point& p) { os << '(' << p.x << ',' << p.y << ')'; return os; }
    friend bool operator==(const Point& a, const Point& b) { return a.x == b.x && a.y == b.y; }
    friend bool operator!=(const Point& a, const Point& b) { return a.x != b.x || a.y != b.y; }

    Point& operator+=(const Point &p) { x += p.x, y += p.y; return *this; }
    Point& operator-=(const Point &p) { x -= p.x, y -= p.y; return *this; }
    Point& operator*=(const T& t) { x *= t, y *= t; return *this; }
    Point& operator/=(const T& t) { x /= t, y /= t; return *this; }

    friend Point operator+(const Point& a, const Point& b) { return Point(a.x + b.x, a.y + b.y); }
    friend Point operator-(const Point& a, const Point& b) { return Point(a.x - b.x, a.y - b.y); }
    friend Point operator*(const Point& a, const T& t) { return Point(a.x * t, a.y * t); }
    friend Point operator*(const T& t, const Point& a) { return Point(a.x * t, a.y * t); }
    friend Point operator/(const Point& a, const T& t) { return Point(a.x / t, a.y / t); }

    friend T dot(const Point& a, const Point& b) { return a.x * b.x + a.y * b.y; }
    T cross(const Point& o) const { return x * o.y - y * o.x; }
    T cross(const Point& a, const Point& b) const { return (a - *this).cross(b - *this); }
    T l2norm() const { return x * x + y * y; }
  };
}

using P = Point::Point<int64_t>;
```


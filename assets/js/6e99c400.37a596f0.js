"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[5478],{5530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var a=n(2081),i=(n(9496),n(9613));n(805);const s={title:"C++ (until C++20)",slug:"/cpp",sidebar_label:"C++",sidebar_position:2},l=void 0,r={unversionedId:"cpp/home",id:"cpp/home",title:"C++ (until C++20)",description:"Some Features",source:"@site/docs/cpp/home.mdx",sourceDirName:"cpp",slug:"/cpp",permalink:"/zen/cpp",draft:!1,editUrl:"https://github.com/vamsi3/zen/edit/master/docs/cpp/home.mdx",tags:[],version:"current",lastUpdatedAt:1658505721,formattedLastUpdatedAt:"Jul 22, 2022",sidebarPosition:2,frontMatter:{title:"C++ (until C++20)",slug:"/cpp",sidebar_label:"C++",sidebar_position:2},sidebar:"cpp",next:{title:"Language",permalink:"/zen/category/language"}},d={},o=[{value:"Some Features",id:"some-features",level:2},{value:"<code>std::views</code>",id:"stdviews",level:3},{value:"<code>std::nth_element</code>",id:"stdnth_element",level:3},{value:"<code>std::min</code>",id:"stdmin",level:3},{value:"Standard Template Library (STL)",id:"standard-template-library-stl",level:2},{value:"<code>std::array</code>",id:"stdarray",level:3},{value:"<code>std::set</code>",id:"stdset",level:3},{value:"<code>std::multimap</code>",id:"stdmultimap",level:3},{value:"<code>std::list</code>",id:"stdlist",level:3},{value:"<code>std::iterator</code>",id:"stditerator",level:3},{value:"Files",id:"files",level:2}],c={toc:o};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"some-features"},"Some Features"),(0,i.kt)("h3",{id:"stdviews"},(0,i.kt)("inlineCode",{parentName:"h3"},"std::views")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Header ",(0,i.kt)("inlineCode",{parentName:"p"},"<ranges>"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <iostream>\n#include <ranges>\n\nint main() {\n    {\n        int a[] = {1, 2, 3, 4, 5};\n        for (auto& x : a) std::cout << x << ' ';                        // 1 2 3 4 5\n        for (auto& x : a | std::views::reverse) std::cout << x << ' ';  // 5 4 3 2 1\n    }\n    {\n        for (auto x : std::views::iota(3, 9)) std::cout << x << ' ';    // 3 4 5 6 7 8 \n    }\n}\n")),(0,i.kt)("h3",{id:"stdnth_element"},(0,i.kt)("inlineCode",{parentName:"h3"},"std::nth_element")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"std::nth_element")," \u279d Finds n",(0,i.kt)("sup",null,"th")," element and partitions the array around it. ",(0,i.kt)("a",{parentName:"li",href:"http://www.cplusplus.com/reference/algorithm/nth_element/"},"Link"))),(0,i.kt)("h3",{id:"stdmin"},(0,i.kt)("inlineCode",{parentName:"h3"},"std::min")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"int a = min(x1,min(x2,min(x3,min(x4,x5))));"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"int a = min({x2,x2,x3,x4,x5});")," can be done.")),(0,i.kt)("h2",{id:"standard-template-library-stl"},"Standard Template Library (STL)"),(0,i.kt)("h3",{id:"stdarray"},(0,i.kt)("inlineCode",{parentName:"h3"},"std::array")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Header ",(0,i.kt)("inlineCode",{parentName:"p"},"<array>")),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template<   class T,\n            std::size_t N   > struct array;\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Not sure if this is in C++ standard or just GCC implementation, but ",(0,i.kt)("inlineCode",{parentName:"li"},"std::array<int, N>")," is an alias of ",(0,i.kt)("inlineCode",{parentName:"li"},"int*")," for any ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," which is ",(0,i.kt)("inlineCode",{parentName:"li"},"size_t"),".")),(0,i.kt)("h3",{id:"stdset"},(0,i.kt)("inlineCode",{parentName:"h3"},"std::set")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Header ",(0,i.kt)("inlineCode",{parentName:"p"},"<set>")),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template<   class Key,\n            class Compare = std::less<Key>,\n            class Allocator = std::allocator<Key>   > class set;\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <set>\n\n#include <iostream>\nusing std::cout, std::endl;\n\nint main() {\n    {\n        std::set<int> s = {3, 1, 2, 5, 4, 6};\n\n        auto it = s.begin(); // `it` is std::_Rb_tree_const_iterator<int> in GCC\n        \n        for (auto& value : s) { cout << value << ' '; } cout << endl;   // 1 2 3 4 5 6\n\n        std::set<int, std::greater<int>> s_greater = {3, 1, 2, 5, 4, 6};\n        for (auto& value : s_greater) { cout << value << ' '; } cout << endl;   // 6 5 4 3 2 1\n    }\n\n    // custom comparator\n    {\n        std::vector<int> order = {3, 4, 2, 5, 0, 1};\n        auto cmp = [&](int x, int y) { return order[x] < order[y]; };\n        std::set<int, decltype(cmp)> s(cmp);\n    }\n\n    // emplace -> returns iterator to the newly inserted element\n    {\n        std::set<int> set;\n        for (int i = 0; i < 10; ++i) { set.emplace(i); }\n    }\n\n    // emplace_hint -> returns iterator to the newly inserted element\n    {\n        std::set<int> set;\n        for (int i = 0; i < 10; ++i) { set.emplace_hint(set.end(), i); }\n    }\n\n    // merge -> complexity: N * log(size() + N), where N is size of passed in set / multiset.\n    // No elements are copied or moved, only the internal pointers of the container nodes are repointed. \n    {\n        std::set<char> p{ 'C', 'B', 'B', 'A' }, q{ 'E', 'D', 'E', 'C' };\n        p.merge(q);\n        // at this point p -> { A, B, C, D, E }, q -> { C }\n    }\n\n    // count -> returns 0 / 1\n    // find -> returns iterator\n    // contains -> returns bool\n    {\n        // self-explanatory\n    }\n\n    {\n        std::set<int> set = {3, 1, 2, 9, 2, 7};\n        auto it1 = set.lower_bound(3);  // find >= 3\n        auto it2 = set.upper_bound(3);  // find > 3\n        cout << *it1 << ' ' << *it2 << endl;    // 3 7\n    }\n}\n")),(0,i.kt)("h3",{id:"stdmultimap"},(0,i.kt)("inlineCode",{parentName:"h3"},"std::multimap")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Header ",(0,i.kt)("inlineCode",{parentName:"p"},"<map>")),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template<   class Key,\n            class T,\n            class Compare = std::less<Key>,\n            class Allocator = std::allocator<std::pair<const Key, T> >   > class multimap;\n"))),(0,i.kt)("h3",{id:"stdlist"},(0,i.kt)("inlineCode",{parentName:"h3"},"std::list")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Header ",(0,i.kt)("inlineCode",{parentName:"p"},"<list>")),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template<   class T,\n            class Allocator = std::allocator<T>   > class list;\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <list>\n#include <iostream>\n\nint main() {\n    {\n        std::list<char> list;\n        auto print_list = [&]() { for (auto& x : list) std::cout << x << ' '; std::cout << std::endl; };\n\n        list.assign(6, 'c');\n        print_list();   // c c c c c c\n\n        const std::string string = \"qwerty\";\n        list.assign(string.begin(), string.end());\n        print_list();   // q w e r t y\n\n        list.assign({'a', 'b', 'c', 'x', 'y', 'z'});\n        print_list();   // a b c x y z\n    }\n\n    {\n        std::list<int> list = {3, 4, 1, 2};\n        std::cout << list.front() << ' ' << list.back() << std::endl;           // 3 2\n        \n        list.front() = 30;\n        list.back() = 20;\n        for (auto& x : list) std::cout << x << ' '; std::cout << std::endl;     // 30 4 1 20\n    }\n\n    // insert, push_back, pop_back, push_front, pop_front\n    {\n\n    }\n}\n")),(0,i.kt)("h3",{id:"stditerator"},(0,i.kt)("inlineCode",{parentName:"h3"},"std::iterator")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"std::begin")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"std::end")," functions")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <array>\n#include <iterator>\n#include <vector>\n\nint main() {\n    int c_array[5] = {};\n    std::array<int, 5> cpp_array = {};\n    std::vector<int> cpp_vector(5);\n\n    int* c_array_begin = std::begin(c_array);       // = c_array + 0\n    int* c_array_end = std::end(c_array);           // = c_array + 5\n\n    int* cpp_array_begin = std::begin(cpp_array);   // = cpp_array.begin();\n    int* cpp_array_end = std::end(cpp_array);       // = cpp_array.end();\n    \n    std::vector<int>::iterator cpp_vector_begin = std::begin(cpp_vector); // = cpp_vector.begin();\n    std::vector<int>::iterator cpp_vector_end = std::end(cpp_vector);     // = cpp_vector.end();\n}\n")),(0,i.kt)("h2",{id:"files"},"Files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <fstream>\n\nint main() {\n    std::ifstream ifile("hello.txt");\n\n    if (!ifile) {\n        std::cerr << "Failed to open file!" << std::endl;\n        return 0;\n    }\n\n    std::string str;\n\n    // Rrad word by word by trimming whitespace\n    while (ifile >> str) {\n        std::cout << str << \' \';\n    }\n\n    // Can also line by line by trimming new line characters\n    while (std::getline(ifile, str)) {\n        std::cout << str << std::endl;\n    }\n\n    ifile.close();\n\n    std::ofstream ofile("hello.txt");\n    if (!ofile) {\n        std::cerr << "Failed to create file!" << std::endl;\n        return 0;\n    }\n\n    ofile << "Hello, World!";\n\n    ofile.close();\n}\n')))}p.isMDXComponent=!0}}]);
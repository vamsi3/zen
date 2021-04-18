---
title: Files
sidebar_label: Files
---

```cpp
#include <iostream>
#include <fstream>

int main() {
    std::ifstream ifile("hello.txt");

    if (!ifile) {
        std::cerr << "Failed to open file!" << std::endl;
        return 0;
    }

    std::string str;

    // Rrad word by word by trimming whitespace
    while (ifile >> str) {
        std::cout << str << ' ';
    }

    // Can also line by line by trimming new line characters
    while (std::getline(ifile, str)) {
        std::cout << str << std::endl;
    }

    ifile.close();

    std::ofstream ofile("hello.txt");
    if (!ofile) {
        std::cerr << "Failed to create file!" << std::endl;
        return 0;
    }

    ofile << "Hello, World!";

    ofile.close();
}
```

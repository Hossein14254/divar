#include <iostream>
using namespace std;

int main() {
    double num1, num2, sum;
    
    cout << "لطفا عدد اول را وارد کنید: ";
    cin >> num1;
    
    cout << "لطفا عدد دوم را وارد کنید: ";
    cin >> num2;
    
    sum = num1 + num2;
    
    cout << "جمع دو عدد: " << sum << endl;
    
    return 0;
}
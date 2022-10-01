package main

import "fmt"

func fib(n int) int {
	if n < 2 {
		return n
	}
	return fib(n-2) + fib(n-1)
}

func main() {
	var i int
	fmt.Println("Enter an integer value : ")
	_, err := fmt.Scanf("%d", &i)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(fib(i))
}

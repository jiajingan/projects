package main

import "fmt"

func fact(n int) int {
	if n == 0 {
		return n
	} else if n < 2 {
		return n
	}
	return n * fact(n-1)
}

func main() {
	var i int
	fmt.Println("Enter an integer value : ")
	_, err := fmt.Scanf("%d", &i)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(fact(i))
}

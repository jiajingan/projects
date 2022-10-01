package main

import "fmt"

func add(a float32, b float32) float32 {
	return a + b
}

func sub(a float32, b float32) float32 {
	return a - b
}

func multi(a float32, b float32) float32 {
	return a * b
}

func divide(a float32, b float32) float32 {
	return a / b
}

func main() {

	fmt.Println("hello world")
	fmt.Println(add(5.0001, 2.09898))
	fmt.Println(sub(5.0001, 2.09898))
	fmt.Println(multi(8, 4.2))
	fmt.Println(divide(8, 4.2))
}

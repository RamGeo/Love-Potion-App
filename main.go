package main

import (
    "fmt"
    "net/http"
)

func main() {
    // Serve static files (CSS, JS, etc.)
    fs := http.FileServer(http.Dir("static"))
    http.Handle("/static/", http.StripPrefix("/static/", fs))

    // Serve the HTML file
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./templates/index.html")
	})

    // Start the server
    fmt.Println("Server started at http://localhost:8080")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        fmt.Printf("Error starting server: %v\n", err)
    }
}
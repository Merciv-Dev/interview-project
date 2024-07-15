package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = ":8080"
	}

	http.HandleFunc("/healthy", healthCheck)

	log.Printf("running server on port %s", port)

	http.ListenAndServe(port, nil)
}

func healthCheck(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("alive and well"))
}

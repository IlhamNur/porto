package main

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

var db *sql.DB

func main() {
	// Koneksi PostgreSQL
	var err error
	connStr := "host=localhost port=5432 user=postgres password=ilhamnur123# dbname=myweb sslmode=disable"
	db, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer db.Close()

	// Cek koneksi
	err = db.Ping()
	if err != nil {
		log.Fatalf("Database connection failed: %v", err)
	}

	r := gin.Default()

	// Middleware CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Content-Type"},
		AllowCredentials: true,
	}))

	// Route API
	r.GET("/api/message", func(c *gin.Context) {
		var message string
		err := db.QueryRow("SELECT content FROM messages LIMIT 1").Scan(&message)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch message"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": message})
	})

	// Jalankan server di port 8080
	r.Run(":8080")
}

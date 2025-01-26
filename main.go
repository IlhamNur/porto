package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Serve static files
	r.Static("/static", "./static")

	// Load templates
	r.LoadHTMLGlob("templates/*")

	// Define routes
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title":   "Welcome to Gin Website",
			"message": "This is a website powered by Gin!",
		})
	})

	r.GET("/about", func(c *gin.Context) {
		c.HTML(http.StatusOK, "about.html", gin.H{
			"title": "About Us",
			"content": "This is the about page. Here, you can learn more about our website built using the Gin framework.",
		})
	})

	// Start the server
	r.Run(":8080") // Listen and serve on localhost:8080
}

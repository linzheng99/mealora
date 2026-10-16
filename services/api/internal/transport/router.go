package transport

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"

	"mealora/services/api/internal/health"
)

// NewRouter wires implemented HTTP endpoints; business modules are added as needed.
func NewRouter() http.Handler {
	router := chi.NewRouter()
	router.Use(middleware.RequestID, middleware.Recoverer)
	router.Get("/api/health", health.Handle)
	return router
}

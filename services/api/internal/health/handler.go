package health

import (
	"encoding/json"
	"net/http"
)

// Handle reports process health, without claiming database or Agent readiness.
func Handle(w http.ResponseWriter, _ *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(struct {
		Status  string `json:"status"`
		Service string `json:"service"`
	}{Status: "ok", Service: "mealora-api"})
}

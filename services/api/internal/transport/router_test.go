package transport_test

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"mealora/services/api/internal/transport"
)

func TestHealthContract(t *testing.T) {
	response := httptest.NewRecorder()
	transport.NewRouter().ServeHTTP(response, httptest.NewRequest(http.MethodGet, "/api/health", nil))
	if response.Code != http.StatusOK || response.Header().Get("Content-Type") != "application/json" {
		t.Fatalf("unexpected health response: status=%d headers=%v", response.Code, response.Header())
	}
	var body map[string]string
	if err := json.Unmarshal(response.Body.Bytes(), &body); err != nil {
		t.Fatal(err)
	}
	if len(body) != 2 || body["status"] != "ok" || body["service"] != "mealora-api" {
		t.Fatalf("response violates bootstrap contract: %v", body)
	}
}

func TestUnimplementedRoutesAndUnsupportedMethods(t *testing.T) {
	for _, tc := range []struct {
		name   string
		method string
		path   string
		status int
	}{
		{"business endpoints are unavailable", http.MethodPost, "/api/meals", http.StatusNotFound},
		{"health is read-only", http.MethodPost, "/api/health", http.StatusMethodNotAllowed},
	} {
		t.Run(tc.name, func(t *testing.T) {
			response := httptest.NewRecorder()
			transport.NewRouter().ServeHTTP(response, httptest.NewRequest(tc.method, tc.path, nil))
			if response.Code != tc.status {
				t.Fatalf("got status %d, want %d", response.Code, tc.status)
			}
		})
	}
}

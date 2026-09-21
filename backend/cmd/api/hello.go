package main

import "net/http"

func (app *application) helloHandler(w http.ResponseWriter, r *http.Request) {
	err := app.writeJSON(w, http.StatusOK, envelope{
		"message": "Hello, world!",
	})
	if err != nil {
		app.logger.Error(err.Error())
		http.Error(w, "the server encountered a problem", http.StatusInternalServerError)
	}
}

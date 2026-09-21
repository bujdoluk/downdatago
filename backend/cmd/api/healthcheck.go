package main

import "net/http"

func (app *application) healthcheckHandler(w http.ResponseWriter, r *http.Request) {
	err := app.writeJSON(w, http.StatusOK, envelope{
		"status": "available",
		"system_info": envelope{
			"environment": app.config.env,
			"version":     version,
		},
	})
	if err != nil {
		app.logger.Error(err.Error())
		http.Error(w, "the server encountered a problem", http.StatusInternalServerError)
	}
}

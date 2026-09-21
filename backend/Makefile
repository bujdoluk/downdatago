.PHONY: run dev build db/diff db/apply db/status

## run: run the cmd/api application
run:
	go run ./cmd/api

## dev: run the application with live reload via air
dev:
	air

## build: build the cmd/api application
build:
	go build -o ./bin/api ./cmd/api

## db/diff: generate a new migration from schema.hcl (usage: make db/diff name=add_users)
db/diff:
	atlas migrate diff $(name) --env local

## db/apply: apply pending migrations to the local database (requires: docker compose up db)
db/apply:
	atlas migrate apply --env local

## db/status: show the current migration status of the local database
db/status:
	atlas migrate status --env local

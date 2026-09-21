# downdata

Refactor of [downdata](https://github.com/bujdoluk/downdata) split into a Go backend and a Next.js frontend.

## Structure

- `backend/` — Go API (structured after [greenlight-api](https://github.com/bujdoluk/greenlight-api))
- `frontend/` — Next.js app (App Router, TypeScript, Tailwind)

## Backend

```
cd backend
make dev    # live reload via air (watches *.go and rebuilds/restarts automatically)
make run    # plain go run, no reload
make build  # compiled binary in backend/bin
```

Default port is `4000`. Endpoints:

- `GET /v1/healthcheck`
- `GET /v1/hello`

`air` is configured via `backend/.air.toml`; install it once with `go install github.com/air-verse/air@latest` if it's not already on your `PATH`.

## Frontend

```
cd frontend
npm run dev    # Next.js dev server with Fast Refresh (auto reload on save)
npm run build
npm run start
```

Default port is `3000`.

## Docker (Postgres + backend + frontend)

```
cp .env.example .env   # first time only — then fill in real values, .env.example only has placeholders
docker compose up -d
```

`.env` is required — `docker-compose.yml` has no fallback defaults, so it fails immediately with
a clear error if a variable is missing rather than silently running with baked-in values.

This starts, in order: `db` (Postgres 16, waits for healthcheck), `migrate` (applies pending
Atlas migrations, then exits), `backend` (waits for `migrate` to succeed), `frontend`. Set
`BACKEND_PORT`/`FRONTEND_PORT` in `.env` to whatever's free locally (e.g. if `make dev` /
`npm run dev` are already using 4000/3000).

Postgres itself is also published on `5432` so local tools (`psql`, `atlas`) can reach it directly.

```
docker compose down       # stop everything, keep the Postgres volume
docker compose down -v    # stop everything and wipe the database
```

### Schema changes (Atlas)

The schema lives in `backend/schema.hcl` (HCL, desired-state). Migration files are generated,
not hand-written:

```
cd backend
docker compose up -d db                     # make sure Postgres is running
make db/diff name=add_users_table           # generates backend/migrations/*.sql from the diff
make db/apply                                # apply pending migrations to the local db
make db/status                               # show current migration status
```

Review the generated `.sql` file before committing it — `atlas migrate diff` needs Docker
itself (it spins up a disposable "dev database" to compute the diff safely), so make sure
Docker Desktop is running when you run `make db/diff`.

Requires the [Atlas CLI](https://atlasgo.io/getting-started) on your `PATH` for the `db/*`
targets (not needed just to run `docker compose up`, since migrations apply automatically
via the `migrate` service).

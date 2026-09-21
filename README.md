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

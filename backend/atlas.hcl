variable "database_url" {
  type    = string
  default = getenv("DATABASE_URL")
}

env "local" {
  src = "file://schema.hcl"
  url = "postgres://downdata:downdata@localhost:5432/downdata?sslmode=disable"
  dev = "docker://postgres/16/dev"

  migration {
    dir = "file://migrations"
  }
}

env "docker" {
  src = "file://schema.hcl"
  url = var.database_url
  dev = "docker://postgres/16/dev"

  migration {
    dir = "file://migrations"
  }
}

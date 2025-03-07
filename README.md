# About

This is sample code for HelsinkiJS Meetup presentation on 2025-03-11.

## Tooling

```shell
brew install go nodejs pnpm protobuf
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.5.1
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.36.5
go install github.com/envoyproxy/protoc-gen-validate@v1.2.1
```

## Code generation

In order to generate the code out of the schema defined in service.proto, run the following command:

```shell
./generate-code.sh
```

## Running the app

In apps/message-service run `go run main.go`.
In apps/client run `pnpm dev`
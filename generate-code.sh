#!/bin/bash

protoc \
  -I . -I /Users/kamil/go/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v1.2.1/ \
  --plugin=protoc-gen-ts=./apps/client/node_modules/.bin/protoc-gen-ts \
  --ts_out=service=grpc-node,mode=grpc-js:./apps/client/src/grpc \
  service.proto

protoc -I . -I /Users/kamil/go/pkg/mod/github.com/envoyproxy/protoc-gen-validate@v1.2.1 --go_out=. --go-grpc_out=. --validate_out="lang=go:." service.proto
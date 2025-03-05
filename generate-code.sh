#!/bin/bash

protoc \
  --plugin=protoc-gen-ts=./apps/client/node_modules/.bin/protoc-gen-ts \
  --ts_out=service=grpc-node,mode=grpc-js:./apps/client/src/grpc \
  service.proto
protoc --go_out=. --go-grpc_out=. service.proto
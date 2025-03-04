#!/bin/bash

protoc --js_out=import_style=commonjs:./apps/client/src/grpc service.proto
protoc --go_out=. --go-grpc_out=. service.proto
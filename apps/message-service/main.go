package main

import (
	"context"
	"log"
	"net"
	"strconv"
	"time"

	pb "grpc.com/apps/message-service/grpc"

	"google.golang.org/grpc"
)

type server struct {
	pb.UnimplementedEchoServiceServer
}

func (s *server) Echo(ctx context.Context, req *pb.EchoRequest) (*pb.EchoResponse, error) {
	if err := req.Validate(); err != nil {
		return nil, err
	}
	return &pb.EchoResponse{Message: "You said: " + req.Message}, nil
}

func (s *server) EchoStream(req *pb.EchoRequest, stream pb.EchoService_EchoStreamServer) error {
	for i := 0; i < 5; i++ {
		if err := stream.Send(&pb.EchoResponse{Message: req.Message + " " + strconv.Itoa(i)}); err != nil {
			return err
		}
		time.Sleep(1 * time.Second)
	}
	return nil
}

func main() {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterEchoServiceServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

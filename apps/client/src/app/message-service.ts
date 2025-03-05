import { EchoServiceClient } from '@/grpc/service';
import { credentials } from '@grpc/grpc-js';
import { promisify } from 'util';

export const messageService = new EchoServiceClient(
  'localhost:50051',
  credentials.createInsecure(),
);

export const echo = promisify(messageService.Echo).bind(messageService);

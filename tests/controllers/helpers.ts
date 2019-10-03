import request from 'supertest';
import app from '../../src/app';

interface RequestOptions {
  path: string;
  body?: string | object;
  method?: 'get' | 'post' | 'put' | 'delete';
}

export function httpRequest({ path, body, method }: RequestOptions) {
  const httpRequest = request(app)[method || 'get'](`/api/v1/${path}`);
  httpRequest.send(body);
  httpRequest.set('Accept', 'application/json');
  return httpRequest;
}

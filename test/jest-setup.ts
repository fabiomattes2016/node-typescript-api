import { SetuServer } from '@src/server';
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetuServer();
  server.init();
  global.testRequest = supertest(server.getApp());
});

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) 1', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect('hello 1');
  });

  it('/ (GET) 2', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect('hello 2');
  });

  it('/ (GET) 3', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect('hello 3');
  });
});

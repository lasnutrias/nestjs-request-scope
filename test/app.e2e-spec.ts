import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './app/app.module';
import { RequestScopeModule } from '../src';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RequestScopeModule.forRoot(), AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
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

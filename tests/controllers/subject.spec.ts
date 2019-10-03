import { httpRequest } from './helpers';
import db from '../../src/database/models';

const { Subject } = db;
let subject: any;

beforeAll(async () => {
  const demoSubject = { name: 'Biology' };
  subject = await Subject.create(demoSubject);
});

describe('Subjects Controller', () => {
  test('should get all subjects', async () => {
    await httpRequest({ path: '/subjects' })
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('should get a single subject', async () => {
    await httpRequest({ path: '/subjects/' + subject.id }).expect(200);
  });
});

afterAll(async () => {
  await Subject.destroy({ truncate: { cascade: true } });
});

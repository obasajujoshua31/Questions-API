import db from '../database/models';

const { Subject }: any = db;

export const findAllSubjects = (options?: any) => {
  return Subject.findAll(options);
};

export const findSubjectById = (id: number | string) => {
  return Subject.findByPk(id);
};

export const createSubject = (body: any) => {
  return Subject.create(body);
};

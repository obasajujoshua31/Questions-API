import { Request, Response, NextFunction } from 'express';
import { findAllSubjects, findSubjectById } from '../services/subject.service'

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const subjectsRes = await findAllSubjects();
    const subjects = subjectsRes.map(({ dataValues }: any) => dataValues);
    res.json(subjects);
  } catch (error) {
    next();
  }
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const subjectRes = await findSubjectById(req.params.id);
    if (subjectRes === null)
      return next({ status: 404, message: 'Subject not found.' });
    return res.json(subjectRes);
  } catch (error) {
    next();
  }
};

// TODO: create action
// TODO: update action
// TODO: destroy action

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SubjectReducer from './../containers/subjects/subjects.reducers';
import PupilsReducer from '../containers/pupils/pupils.reducers'
import ParentsReducer from '../containers/parents/parents.reducers';
import ClassesReducer from '../containers/classes/classes.reducers';
import ClassroomReducer from '../containers/classrooms/classrooms.reducers';
import GradesReducer from './../containers/grades/grades.reducers';
import TeachersReducer from '../containers/teachers/teachers.reducers';
import LessonsReducer from './../containers/lessons/lessons.reducers';
import TeacherSubjectReducer from './../containers/teacher_subject/t_subjects.reducers';
import PupilParentsReducer from "./../containers/pupil_parent/p_parents.reducers"

const rootReducer = combineReducers({
  subjects: SubjectReducer,
  pupils: PupilsReducer,
  parents: ParentsReducer,
  classes: ClassesReducer,
  classrooms: ClassroomReducer,
  grades: GradesReducer,
  teachers: TeachersReducer,
  lessons: LessonsReducer,
  t_subjects: TeacherSubjectReducer,
  p_parents: PupilParentsReducer,
  form: formReducer
});

export default rootReducer;

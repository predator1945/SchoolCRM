import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

import TeachersList from './containers/teachers/teachers_list';
import TeachersEdit from './containers/teachers/teachers_edit';
import TeachersNew from './containers/teachers/teachers_new';

import GradesList from './containers/grades/grades_list';
import GradesEdit from './containers/grades/grades_edit';
import GradesNew from './containers/grades/grades_new';
import LessonsList from './containers/lessons/lessons_list';
import LessonsEdit from './containers/lessons/lessons_edit';
import LessonsNew from './containers/lessons/lessons_new';

import ClassesList from './containers/classes/classes_list';
import ClassesEdit from './containers/classes/classes_edit';
import ClassesNew from './containers/classes/classes_new';
import SubjectsList from './containers/subjects/subjects_list';
import SubjectsEdit from './containers/subjects/subjects_edit';
import SubjectsNew from './containers/subjects/subjects_new';
import PupilsList from './containers/pupils/pupils_list';
import PupilsEdit from './containers/pupils/pupils_edit';
import PupilsNew from './containers/pupils/pupils_new';
import ParentsList from './containers/parents/parents_list';
import ParentsEdit from './containers/parents/parents_edit';
import ParentsNew from './containers/parents/parents_new';
import ClassroomList from './containers/classrooms/classrooms_list';
import ClassroomEdit from './containers/classrooms/classrooms_edit';
import ClassroomNew from './containers/classrooms/classrooms_new';

import TeacherSubject from "./containers/teacher_subject/t_subjects_list";
import TeacherSubjectNew from "./containers/teacher_subject/t_subjects_new"

import PupilParent from "./containers/pupil_parent/p_parents_list";
import PupilParentNew from "./containers/pupil_parent/p_parents_new";

import MainPage from './components/main_page';

import NavigationBar from './components/navbar';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>

      <BrowserRouter >
        <div>
          <NavigationBar />
          <Switch>

          <Route path="/p_parents/:id/new" component={PupilParentNew} />
          <Route path="/p_parents/:id" component={PupilParent} />
          <Route path="/t_subjects/:id/new" component={TeacherSubjectNew} />
          <Route path="/t_subjects/:id" component={TeacherSubject} />
          <Route path="/classrooms/new" component={ClassroomNew} />
            <Route path="/classrooms/edit/:id" component={ClassroomEdit} />
            <Route path="/classrooms" component={ClassroomList} />
            <Route path="/classes/new" component={ClassesNew} />
            <Route path="/classes/edit/:id" component={ClassesEdit} />
            <Route path="/classes" component={ClassesList} />
            <Route path="/grades/new" component={GradesNew} />
            <Route path="/grades/edit/:id" component={GradesEdit} />
            <Route path="/grades" component={GradesList} />
            <Route path="/lessons/new" component={LessonsNew} />
            <Route path="/lessons/edit/:id" component={LessonsEdit} />
            <Route path="/lessons" component={LessonsList} />
            <Route path="/parents/new" component={ParentsNew} />
            <Route path="/parents/edit/:id" component={ParentsEdit} />
            <Route path="/parents" component={ParentsList} />
            <Route path="/subjects/new" component={SubjectsNew} />
            <Route path="/subjects/edit/:id" component={SubjectsEdit} />
            <Route path="/subjects" component={SubjectsList} />
            <Route path="/pupils/new" component={PupilsNew} />
            <Route path="/pupils/edit/:id" component={PupilsEdit} />
            <Route path="/pupils" component={PupilsList} />
            <Route path="/teachers/new" component={TeachersNew} />
            <Route path="/teachers/edit/:id" component={TeachersEdit} />
            <Route path="/teachers" component={TeachersList} />

            
            <Route path="/" component={MainPage} />

          </Switch>
        </div>
      </BrowserRouter>

    </div>
  </Provider>
  , document.querySelector('.container'));

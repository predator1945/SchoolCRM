import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';
export const FETCH_SUBJECTS = 'fetch_subjects';
export const FETCH_SUBJECT = 'fetch_subject';
export const FETCH_PUPILS = 'fetch_pupils';
export const FETCH_PUPIL = 'fetch_pupil';
export const FETCH_PARENTS = 'fetch_parents';
export const FETCH_PARENT = 'fetch_parent';
export const FETCH_CLASSES = 'fetch_classes';
export const FETCH_CLASS = 'fetch_class';
export const FETCH_CLASSROOMS = 'fetch_classrooms';
export const FETCH_CLASSROOM = 'fetch_classroom';
export const FETCH_TEACHERS = 'fetch_teachers';
export const FETCH_TEACHER = 'fetch_teacher';
export const FETCH_LESSONS = 'fetch_lessons';
export const FETCH_LESSON = 'fetch_lesson';

export const CREATE_SUBJECT = "CREATE_SUBJECT";
export const CREATE_PARENT = "CREATE_parent";
export const CREATE_PUPIL = "CREATE_pupil";
export const CREATE_CLASSROOM = "CREATE_classroom";
export const CREATE_TEACHER = "CREATE_teacher";

export const FETCH_GRADES = 'fetch_grades';
export const CREATE_GRADE = 'create_grades';
export const DELETE_GRADES = 'delete_grades';



const ROOT_URL = "localhost:5000";
const instance = axios.create({baseURL: 'http://localhost:5000'})

export function fetchSubjects() {
    const request = instance.get(`/api/subject`);
    console.log(request);
    return {
        type: FETCH_SUBJECTS,
        payload: request
    };
}

export function fetchPupils() {
    const request = instance.get(`/pupils`);
    console.log(request);
    return {
        type: FETCH_PUPILS,
        payload: request
    };
}

export function fetchParents() {
    const request = instance.get(`/parents`);
    console.log(request);
    return {
        type: FETCH_PARENTS,
        payload: request.json
    };
}

export function fetchClasses() {
    const request = instance.get(`/classes`);
    console.log(request);
    return {
        type: FETCH_CLASSES,
        payload: request
    };
}

export function fetchClassrooms() {
    const request = instance.get(`/classrooms`);
    
    
    return {
        type: FETCH_CLASSROOMS,
        payload: request
    };
}

export function fetchGrades() {
    const request = instance.get(`/grades`);

    console.log(request);
    return {
        type: FETCH_GRADES,
        payload: request
    };
}

export function fetchTeachers() {
    const request = instance.get(`/teachers`);

    console.log(request);
    return {
        type: FETCH_TEACHERS,
        payload: request
    };
}

export function fetchLessons() {
    const request = instance.get(`/lessons`);

    console.log(request);
    return {
        type: FETCH_LESSONS,
        payload: request
    };
}

export function fetchClassSubject(values) {
    const request = instance.get(`/class-subject`, values);
    
        console.log(request);
        return {
            type: FETCH_CLASS_SUBJECT,
            payload: request
        };
}
export function fetchPupilParent(values) {
    const request = instance.get(`/pupil-parent`, values);
    
        console.log(request);
        return {
            type: FETCH_PUPIL_PARENT,
            payload: request
        };
}

export function fetchTeacherSubject(values) {
    const request = instance.get(`/teacher-subject`, values);
    
        console.log(request);
        return {
            type: FETCH_TEACHER_SUBJECT,
            payload: request
        };
}


//////////
// CREATE
/////////
export function createSubject(values) {
    const request = instance.post(`/subjects`, values);
    
        console.log(request);
        return {
            type: CREATE_SUBJECT,
            payload: request
        };
}

export function createParent(values) {
    const request = instance.post(`/parents`, values);
    
        console.log(request);
        return {
            type: CREATE_PARENT,
            payload: request
        };
}

export function createPupil(values) {
    const request = instance.post(`/pupils`, values);
    
        console.log(request);
        return {
            type: CREATE_PUPIL,
            payload: request
        };
}

export function createClassroom(values) {
    const request = instance.post(`/classrooms`, values);
    
        console.log(request);
        return {
            type: CREATE_CLASSROOM,
            payload: request
        };
}

export function createTeacher(values) {
    const request = instance.post(`/teachers`, values);
    
        console.log(request);
        return {
            type: CREATE_TEACHER,
            payload: request
        };
}
export function createClass(values) {
    const request = instance.post(`/classes`, values);
    
        console.log(request);
        return {
            type: CREATE_CLASS,
            payload: request
        };
}
export function createGrade(values) {
    const request = instance.post(`/grades`, values);
    
        console.log(request);
        return {
            type: CREATE_GRADE,
            payload: request
        };
}
export function createLesson(values) {
    const request = instance.post(`/lessons`, values);
    
        console.log(request);
        return {
            type: CREATE_LESSONS,
            payload: request
        };
}
export function createClassSubject(values) {
    const request = instance.post(`/class-subject`, values);
    
        console.log(request);
        return {
            type: CREATE_CLASS_SUBJECT,
            payload: request
        };
}
export function createPupilParent(values) {
    const request = instance.post(`/pupil-parent`, values);
    
        console.log(request);
        return {
            type: CREATE_PUPIL_PARENT,
            payload: request
        };
}

export function createTeacherSubject(values) {
    const request = instance.post(`/teacher-subject`, values);
    
        console.log(request);
        return {
            type: CREATE_TEACHER_SUBJECT,
            payload: request
        };
}

export function fetchData(route, type) {
    const request = instance.get(`/subjects`);
    console.log(request);
    return {
        type: FETCH_SUBJECTS,
        payload: request
    };
}

export function createData(route, type, values) {
    const request = instance.post(`${route}`, values);
    
        console.log(request);
        return {
            type: CREATE_TEACHER_SUBJECT,
            payload: request
        };
}

export function deleteData(route, id, type) {
    console.log(`${route}/${id}`);
    const request = instance.delete(`${route}/${id}`);

    return {
        type,
        payload: id
    }

}

export function updateData(route, id, values, type) {
    console.log(`${route}/${id}`);
    const request = instance.put(`${route}/${id}`, values);

    return {
        type,
        payload: id
    }

}

export function fetchTeacher(id) {
    const request = instance.get(`/teachers/${id}`);

    return {
        type,
        payload: {pesel:"123", first_name:"1234", last_name: "4321"}
    }
}

export function fetchSubject(value) {
    
    return {
        type: FETCH_SUBJECT,
        payload:value 
    }
}

export function selectDataEntry(type, value) {


    return {
        type,
        payload: value
    }
}
import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';


export default function CourseList ({ listCourses=[{}]}) {
    return (
        <>
        <table id='CourseList'>
            <thead>
                <CourseListRow textFirstCell='Available Courses' textSecondCell={null} isHeader={true} className="align" />
                <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} className="align"/>
            </thead>
            <tbody>
                {(listCourses && listCourses.length === 0) ? 
                (<CourseListRow textFirstCell='No courses available yet' textSecondCell={null} isHeader={true}/>) : (
                listCourses.map(({id, name, credit}) => (
                    <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} isHeader={false} />
                ))
                )}
            </tbody>
        </table>
        </>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
};
import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';


export default function CourseList () {
    return (
        <>
        <table id='CourseList'>
            <thead>
                <CourseListRow textFirstCell='Available Courses' textSecondCell={null} isHeader={true} className="align" />
                <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} className="align"/>
            </thead>
            <tbody>
                <CourseListRow textFirstCell='ES6' textSecondCell='60' isHeader={false} />
                <CourseListRow textFirstCell='Webpack' textSecondCell='20' isHeader={false} />
                <CourseListRow textFirstCell='React' textSecondCell='40' isHeader={false} />
            </tbody>
        </table>
        </>
    );
};
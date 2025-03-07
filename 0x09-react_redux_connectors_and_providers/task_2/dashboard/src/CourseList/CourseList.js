import React from 'react';
import CourseListRow from './CourseListRow.js';
import CourseShape from './CourseShape.js';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    table: {
        width: '70%',
        borderCollapse: 'collapse',
        margin: '0.5em auto',
        fontFamily: 'Georgia, Times New Roman, Times, serif',
        border: '1px solid #ddd'
    },

});

export default function CourseList ({ listCourses=[{}]}) {
    return (
        <>
        <table id='CourseList' className={css(styles.table)}>
            <thead>
                <CourseListRow textFirstCell='Available Courses' textSecondCell={null} isHeader={true}/>
                <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true}/>
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
import React from 'react';

const students = ["amal", "sooraj", "praveen", "sheben", "vishnu"];

function removeElementByValue(array, value) {
    const index = array.indexOf(value);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

// Remove the value "praveen"
const updatedStudents = removeElementByValue([...students], "vishnu");

function Category() {
    return (
        <div>
            {updatedStudents.map((student, index) => (
                <div key={index}>{student}</div>
            ))}
        </div>
    );
}

export default Category;




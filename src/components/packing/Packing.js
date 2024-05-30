import React from 'react';

const students = ["amal", "sooraj", "praveen", "sheben", "vishnu"];

function removeElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
    }
    return array;
}

// Remove the value at index 2
const updatedStudents = removeElementAtIndex([...students], 4);

function Packing() {
    return (
        <div>
            {updatedStudents.map((student, index) => (
                <div key={index}>{student}</div>
            ))}
        </div>
    );
}

export default Packing;

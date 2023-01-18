import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

function Course({ course }) {
    return (
        <main>
            <Header title={course.name} />
            <Content parts={course.parts} />
            <Total
                totalExercises={course.parts
                    .map((part) => part.exercises)
                    .reduce((prev, current) => prev + current)}
            />
        </main>
    );
}

export default Course;

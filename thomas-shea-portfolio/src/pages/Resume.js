import React from "react";
import '../components/Container/Container.css'

export default function Resume() {
    return (
        <div className="container">
            <h1 className="section-heading">Resume</h1>
            <h2>Front End Proficencies:</h2>
            <ul className="proficencies-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>BootStrap</li>
                <li>React</li>
            </ul>
            <h2>Back End Proficencies:</h2>
            <ul className="proficencies-list">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    )
}
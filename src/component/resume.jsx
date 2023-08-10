import React, { Component } from "react";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <h1>Bittoo Aggarwal</h1>
        <p>Software Developer Educator at Geekster</p>
        <a href="#">Linkedin</a> &nbsp;&nbsp;
        <a href="#">Github</a>
        <hr />
        <h2>Experience</h2>
        <h4>Software developer at Amazon</h4>
        <p>
          I work with Amazon in transportation team, some more description Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quod harum ad quis
          explicabo consequuntur est eligendi nobis impedit atque mollitia
          corporis debitis veritatis dolor deserunt cum voluptatem, iste veniam
          sint. <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          quos odit voluptatum impedit dignissimos tempore nobis debitis. Nihil
          fuga, culpa necessitatibus quasi, dolorem consequatur doloribus a
          mollitia rerum fugiat suscipit.
        </p>
        <hr />
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>Javascript</li>
          <li>Testing</li>
          <li>API Design</li>
          <li>System Design</li>
        </ul>
        <hr />
        <h2>Hobbies</h2>
        <ol>
          <li>Table Tennis</li>
          <li>Reading Books</li>
          <li>Biography</li>
          <li>Teaching</li>
        </ol>
      </div>
    );
  }
}

export default Resume;

import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - MAY 24 EDITION</h1>
          <p className="lead">My Name is Tanisha Dalwadi and I am student here </p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
          <th>Github Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework1</td>
          <td>Git Practice. Provide link of your repo here </td>
          <td>N/A</td>
          <td><a href="https://github.com/tanishadalwadi/homework1.git"> Link</a> </td>
       
      </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>Javascript - Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/tanishadalwadi/pen/gOmWyLM?editors=1112"> Link</a> </td>
          <td>N/A</td>
       
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Homework 2.1</td>
          <td>Storage</td>
          <td><a href="https://codepen.io/tanishadalwadi/pen/OJpjNzQ?editors=0012"> Link</a> </td>
          <td>N/A</td>
       
      </tr>
     
      <tr>
          <th scope="row">4</th>
          <td>Homework 2.2</td>
          <td>HTML</td>
          <td>N/A</td>
          <td><a href="https://github.com/tanishadalwadi/homework2.2.git"> Link</a> </td>
       
      </tr>
      <tr>
          <th scope="row">5</th>
          <td>Homework 3.1</td>
          <td>CSS Selector</td>
          <td><a href="https://codepen.io/tanishadalwadi/pen/xxqLMyw"> Link</a> </td>
          <td>N/A</td>
       
      </tr>
      <tr>
          <th scope="row">6</th>
          <td>Homework 3.3</td>
          <td>Navbar</td>
          <td><a href="https://navigationbar-tanisha.netlify.app/"> Link</a> </td>
          <td><a href="https://github.com/tanishadalwadi/Navbar.git"> Link</a> </td>
       
      </tr>

            <tr>
          <th scope="row">7</th>
          <td>Homework 3.4</td>
          <td>Javascript Sentence Function</td>
          <td><a href="https://codepen.io/tanishadalwadi/pen/JjWOKjd"> Link</a> </td>
          <td> None </td>
       
      </tr>
      <tr>
          <th scope="row">8</th>
          <td>Homework 4.1</td>
          <td>Interview Comcast </td>
          <td><a href="https://codepen.io/tanishadalwadi/pen/JjWOMxB"> Link</a> </td>
          <td> None </td>
       
      </tr>

      <tr>
          <th scope="row">8</th>
          <td>Homework 5.1</td>
          <td>Theme change</td>
          <td><a href="https://codepen.io/tanishadalwadi/pen/JjWMYJY"> Link</a> </td>
          <td> None </td>
       
      </tr>

        
      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Homeworks;

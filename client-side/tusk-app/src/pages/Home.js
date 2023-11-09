import React from 'react';
import tusklogo from '../pics/tusklogo.svg'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img style={{ height: '250px', padding:"none", position: "center" }}
          
          src={tusklogo} alt="placeholder" />
        </div>
        <div className=" col-6" style={{ position: "relative" }}>
        <h1 style={{ position: "center", marginTop:'5pc' }}>Welcome to Tusk!</h1>
        <p>
        Tusk is an open-sourced platform designed to help you manage and organize your projects and tasks more efficiently. 
        Our user-friendly interface allows you to create projects, add members, and assign tasks with ease.
      </p>
        </div>
      </div>
      <div className="row">
        <div className="">
          <h2>Task Utility and Streamling kit</h2>
          <p>
        With Tusk, you can streamline your workflow, collaborate effectively with your team, and stay on top of your project timelines. 
        Our intuitive tools are designed to simplify project management, so you can focus on what's most important.
      </p>
      <p>
        Join us today and experience a whole new level of productivity and organization with Tusk!
      </p>
        </div>
       
      </div>
    <Footer/>
    </div>
  );
};

export default Home;


import React from 'react';
import './App.css';
import WelcomeSection from './WelcomeSection';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      {/* Welcome Section */}
      <WelcomeSection />
      
      
      {/* Main Content */}
      {/* <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my skills, projects, and contact me!</p>
      </header> */}
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p> I’m a former educator transitioning outside the classroom with a passion for instructional design and technology. With skills in software engineering, curriculum development, professional development, and project management, I bring a diverse set of tools to create impactful learning experiences. </p>
          <p> I’m highly adaptable to various technology initiatives and have hands-on experience with tools like Adobe, Articulate 360, Trello, and Excalidraw. My strong understanding of adult learning theory and instructional strategies ensures that I can effectively design and deliver engaging, accessible content. I am also proficient in writing scripts for audiovisual media and creating multimedia such as videos, audio, and graphics. </p>
          <p>I focus on high attention to detail, quality control, and continuous improvement—gathering feedback from stakeholders and learners to refine and enhance learning materials. My ability to collaborate with subject matter experts and stakeholders enables me to create effective and tailored learning solutions.</p>
          <p> As a life-long learner, I’m always eager to apply my skills in new and challenging projects. My commitment to excellence, coupled with my ability to prioritize tasks and manage projects effectively, makes me an ideal candidate for your team.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>Canva Designs</li>
            <li>Kahoot Quizzes</li>
            <li>eLearning Modules</li>
          </ul>
        </section>
        <section id="contact">
        <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;

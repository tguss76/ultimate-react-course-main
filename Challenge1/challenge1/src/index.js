import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="Gruvbild.png" alt="Avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <h1>Tomas Gustavsson</h1>
      <p>
        I'm a passionate web developer with a love for creating beautiful and
        functional user interfaces. I enjoy working with modern web technologies
        and continuously learning new skills to improve my craft.
      </p>
    </div>
  );
}

function SkillList() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Skill({ name }) {
  return <div className="skill">{name}</div>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

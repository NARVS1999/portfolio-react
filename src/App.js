import Aboutme from "./components/Aboutme";
import Education from "./components/Education";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import ProjectHeading from "./components/ProjectHeading";
import ProTech from "./components/ProTech";
import Work from "./components/Work";

function App() {
  return (
    <div className="container">
      <Navigation/>
      <ProTech />
      <Aboutme />
      <Education />
      <Work />
      <ProjectHeading />
      <Project />
    </div>
  );
}

export default App;

import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Publication from './components/Publication';

import { ResumeData } from './dataModel';


function App(profile: ResumeData) {
  return (
    <div className="app">
      <div className="sidebar">
        <div className='centered'>
          <img className="photo" alt='profile' src={profile.photo} />
        </div>

        <Contact
          {...profile.contact}
        />
        <hr className="divider" />
        <About
          {...profile.about}
        />
        <hr className="divider" />
        <Languages
          {...profile.languages}
        />
      </div>
      <div className="main">
        <h1 className="name">{profile.name}</h1>
        <h2 className='title'>{profile.title}</h2>
        <hr className="divider" />
        <Experience
          {...profile.experiences}
        />
        <hr className="divider" />
        <Education
          {...profile.education}
        />
        <hr className="divider" />
        <Publication
          {...profile.publications}
        />
      </div>
    </div>
  );
}

export default App;

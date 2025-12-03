import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import resume from './resume.json';
import photo from './profile.jpeg';
import { ResumeData } from './dataModel';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const profile: ResumeData = {
  ...(resume as ResumeData),
  photo,
};

root.render(
  <React.StrictMode>
    <App profile={profile} />
  </React.StrictMode>
);

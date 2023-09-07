// App.js

import logo from './logo.svg';
import './App.css';
import data from './data.json';
import html2pdf from 'html2pdf.js';

function App() {

  const exportPDF = () => {
    const element = document.getElementById('resumeContent');
    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };
  return (
    <div>
      <div id="resume-content">

        <div className='user-info'>
          <div className='user name'>
            <h1>{data.user_information.name}</h1>
          </div>
          <div className='user contact row-text'>
            <p>{data.user_information.cell}</p>
            <p>{data.user_information.linkedin}</p>
            <p>{data.user_information.email}</p>
          </div>
        </div>

        <div className="section-header">
          <h3 className='section-title'>Employement</h3>
        </div>

        {data.employement.map((job, index) => (
          <div className='employment-block' key={index}>
            <div className='company-title-location'>
              <h4>{job.company_name}</h4>, <p>{job.location}</p>
            </div>
            {job.positions.map((position, index2) => (
              <>
                <div className='company-position' key={index2}>
                  <p>{position.title}</p>
                  <p>{position.date}</p>
                </div>
                <div className='company-projects'>

                  {position.projects.map((project, index3) => (
                    <div className='project' key={index3}>
                      <div className='project-role-client'>
                        <p >{project.role}</p>|<p>{project.client}</p>

                      </div>
                      {project.descriptions.map((description, index4) => (
                        <div className='project-descriptions'>
                          <p>{description}</p>
                        </div>
                      ))}
                    </div>
                  ))}


                </div>
              </>
            ))}
          </div>
        ))}

      </div>
      <button onClick={exportPDF}>Export as PDF</button>
    </div>
  );
}

export default App;

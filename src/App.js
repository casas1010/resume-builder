// App.js

import logo from './logo.svg';
import './App.css';
import data from './data.json';
import html2pdf from 'html2pdf.js';
import UserInfo from './components/user-info/User-info';
import UserEmployement from './components/user-employement/User-employement';

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

        <UserInfo user_information={data.user_information}></UserInfo>

        <div className="section-header">
          <h3 className='section-title'>Employement</h3>
        </div>
        <UserEmployement employement={data.employement}></UserEmployement>

   

      </div>
      <button onClick={exportPDF}>Export as PDF</button>
    </div>
  );
}

export default App;

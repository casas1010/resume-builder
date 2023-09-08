// App.js

import logo from './logo.svg';
import './App.css';
import data from './data.json';
import html2pdf from 'html2pdf.js';
import UserInfo from './sections/user-info/User-info';
import UserEmployement from './sections/user-employement/User-employement';
import bgImage from './backgrounds/img.png';

function App() {

  const exportPDF = () => {
    console.log('exportPDF()')
    try {
      const element = document.getElementById('resume-content');
      const opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().from(element).set(opt).save();
    } catch (e) {
      console.log(e);
    }

  };
  return (
    <div >
        <div id="resume-content" 
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} 
        >

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

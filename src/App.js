// App.js

import './App.css';
import data from './data.json';
import html2pdf from 'html2pdf.js';
import UserInfo from './sections/user-info/User-info';
import UserEmployement from './sections/user-employement/User-employement';
import UserEducation from './sections/user-education/User-education';
import UserCertificates from './sections/user-certificates/User-certificates';

import bgImage from './backgrounds/img2.png';

import SectionTitle from './sections/section-title/Section-title';


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
        <SectionTitle title="Employment"></SectionTitle>
        <UserEmployement employement={data.employement}></UserEmployement>
        <SectionTitle title="Education"></SectionTitle>
        <UserEducation educations={data.educations}></UserEducation>
        <SectionTitle title="Certificates"></SectionTitle>
        <UserCertificates certificates={data.certificates}></UserCertificates>


      </div>
      <button onClick={exportPDF}>Export as PDF</button>
    </div>
  );
}

export default App;

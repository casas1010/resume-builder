// Section-title.js

import './Section-title.css';

function SectionTitle({title}) {


    return (
        <div className="section-header">
            <h3 className='section-title'>{title}</h3>
        </div>
    );
}

export default SectionTitle;

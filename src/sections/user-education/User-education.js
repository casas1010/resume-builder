
import './User-education.css';

function UserEducation({ educations }) {




    return (
        <div className='educations'>

            {educations.map((education, key) => (
                <div className='education-block'>
                    <div className='row'>
                        <p> {`${education.name} ${education.location}`} </p>
                        <p>{education.date}</p>
                    </div>
                    <div className='row'>
                       <p>{education.degree}</p>
                        <p>{education.gpa}</p>
                    </div>
                </div>
            ))}


        </div>

    )
}

export default UserEducation;

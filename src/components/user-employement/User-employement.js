
import './User-employement.css';

function UserEmployement({ employement }) {
    return (
        <>
            {employement.map((job, index) => (
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
            ))}</>

    )
}

export default UserEmployement;

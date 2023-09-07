
import './User-employement.css';

function UserEmployement({ employement }) {


    const _buildProjectRoleClient = (project) => {
        if (project.clien) {
            return (
                <div className='project-role-client'>
                    <p>{`• ${project.role} || ${project.client}`}</p>
                </div>
            );
        }
        return (
            <div className='project-role-client'>
                <p>{`• ${project.role}`}</p>
            </div>
        );
    }

    const _buildProjectDescription = (project) => {
        return (
            <div className='project-descriptions'>
                {project.descriptions.map((description, index4) => (
                    <p>{`- ${description}`}</p>
                ))}
            </div>

        )
    }

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

                                        {_buildProjectRoleClient(project)}

                                        {_buildProjectDescription(project)}

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

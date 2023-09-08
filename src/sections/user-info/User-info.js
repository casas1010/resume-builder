
import './User-info.css';

function UserInfo({user_information}) {
    return (
        <div className='user-info'>
            <div className='user name'>
                <h1>{user_information.name}</h1>
            </div>
            <div className='user contact row-text'>
                <p>{user_information.cell}</p>
                <p>{user_information.linkedin}</p>
                <p>{user_information.email}</p>
            </div>
        </div>
    )
}

export default UserInfo;

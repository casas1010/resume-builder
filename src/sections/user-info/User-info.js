
import './User-info.css';

function UserInfo({ user_information }) {
   
    return (
        <div className='user-info'>
            <div className='user name'>
                <h1>{user_information.name}</h1>
            </div>
            <div className='user contact row-text'>
                <p>{`${user_information.cell} ${user_information.email}`}</p>
                <a target="_blank" href={` ${user_information.linkedin}`}>{` ${user_information.linkedin}`}</a>
            </div>
        </div>
    )
}

export default UserInfo;

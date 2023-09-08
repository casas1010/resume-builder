
import './User-certificates.css';

function UserCertificates({ certificates }) {




    return (
        <div className='certificates'>
            {certificates.map((certificate, key) => (
                <div key={key} className="item">
                    <p> {certificate}</p>
                </div>
            ))}


        </div>

    )
}

export default UserCertificates;

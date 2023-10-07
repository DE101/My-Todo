export default function UserProfile() {
    return (
        <div>
            <div className="profile-pic">
                <img src="./logo.svg" alt="profile-pic"/>
            </div>
            <div>
                <label>User Name:</label>
                <label>User Email:</label>
                <label>User Number:</label>
            </div>
            <div>
                <span></span>
            </div>
            <div>
                <button>Switch Account</button>
            </div>
        </div>
    )
};
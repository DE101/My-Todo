export default function Login() {
    return (
        <div className="Login-form"> 
            <form>
                <div>
                    <label>username:</label> <input type="text" required placeholder="username"/>
                </div>
                <div>
                    <label>username:</label> <input type="password" required placeholder="password"/>
                </div>
                <div>
                    <button>Log bIn</button>
                </div>
            </form>
        </div>
    )

};
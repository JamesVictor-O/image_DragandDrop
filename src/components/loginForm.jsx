const LoginForm = () => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>Email</label>
                <input type="email" placeholder="enter email address"/>
                <label>Password</label>
                <input type="password" placeholder="enter password"/>
            </form>
            <button>
                submit
            </button>
        </div>
    )
}
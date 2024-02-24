
const Login = () => {
    const connectAccount = () => {
        const CLIENT_ID = 'fe453b83029948e2953ca7baa149ea0f';
        const REDIRECT_URL = 'http://localhost:5173/'
        const API_URL = 'https://accounts.spotify.com/authorize'
        const scope = [
            "user-read-email",
            "user-read-private",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-position",
            "user-top-read",

        ]
    }
    return (
        <div>
            <button>connect</button>
        </div>
    )
}

export default Login

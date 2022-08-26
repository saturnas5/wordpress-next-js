import styles from '../styles/login.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUserId, setCustomerId } from "../redux/features/auth/authSlice";
import { getUser } from "../redux/features/user/asyncUserActions";

const Login = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            dispatch(setToken(token))
            router.push('/')
        }
    }, [])

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:3000/api/login?username=${username}&password=${password}`).then(res => res.json());

        if (response.status === 'Error') {
            setErrorMsg('Invalid username or password');
        }

        if (response.login) {

            setErrorMsg(null);
            localStorage.setItem('token', response.login.refreshToken);
            localStorage.setItem('userId', response.login.user.id);
            localStorage.setItem('customerId', response.login.user.databaseId);
            dispatch(setUserId(response.login.user.id));
            dispatch(setCustomerId(response.login.user.databaseId));
            dispatch(setToken(response.login.refreshToken));
            dispatch(getUser({
                token: response.login.refreshToken,
                userId: response.login.user.id,
                CustomerId: response.login.user.databaseId
            }))
            router.push('/');
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.loginContainer}>
                <h1 className={styles.title}>Login</h1>
                <span className={styles.supportText}>Login with your username and password</span>
                <form className={styles.loginForm} onSubmit={e => handleFormSubmit(e)}>
                    <input
                        className={styles.input}
                        type="text" value={username}
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className={styles.input}
                        type="password" value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input className={styles.loginBtn} type="submit" value='Login'/>
                </form>
                {errorMsg &&
                <div className={styles.errBox}>
                    <span className={styles.errMsg}>
                        {errorMsg}
                    </span>
                </div>}
            </div>
        </div>
    )
};

export default Login;
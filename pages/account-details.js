import styles from '../styles/accountDetails.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { updateUserInfo } from "../redux/features/user/userSlice";
import { updateUser } from "../redux/features/user/userSlice";

const AccountDetails = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        setFirstName(user.userInfo.firstName);
        setLastName(user.userInfo.lastName);
        setEmail(user.userInfo.email);
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            token: user.userToken,
            userId: user.userId,
            firstName: firstName,
            lastName: lastName,
            email: email,
        }))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <span className={styles.title}>Your Personal Account Details {user.userInfo.firstName}</span>
                <form className={styles.infoForm} onSubmit={e => handleFormSubmit(e)}>
                    <label className={styles.label} htmlFor="">
                        Username
                        <input className={styles.input} type="text" value={user.userInfo.username} disabled={true}/>
                    </label>
                    <label className={styles.label} htmlFor="">
                        First Name
                        <input className={styles.input} type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </label>
                    <label className={styles.label} htmlFor="">
                        Last Name
                        <input className={styles.input} type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </label>
                    <label className={styles.label} htmlFor="">
                        Email
                        <input className={styles.input} type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <input className={styles.submitBtn} type="submit" value='Update'/>
                </form>
            </div>
        </div>
    );
};

export default AccountDetails;
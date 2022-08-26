import React from 'react';
import styles from './Header.module.css';
import Cart from './cart.svg';
import Navigation from "../Navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { removeUserInfo } from '../../redux/features/user/userSlice'
import Link from 'next/link';

const Header = ({ categories }) => {
    const cart = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(removeUserInfo());
    }

    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <Navigation categories={categories}/>
            </div>
            <div className={styles.userContainer}>
                {
                    auth.userToken
                        ?
                    <div className={styles.userWelcomeBox}>
                        <Link href='/account'>
                            <a className={styles.loginBoxLink}>My Account</a>
                        </Link>
                        <span onClick={() => handleLogout()} className={styles.loginBoxLink}>Logout</span>
                    </div>
                        :
                    <div className={styles.loginBox}>
                        <Link href='/login'>
                            <a className={styles.loginBoxLink}>Login</a>
                        </Link>
                        <Link href='/login'>
                            <a className={styles.loginBoxLink}>Register</a>
                        </Link>
                    </div>
                }
                <Link href='/cart'>
                    <a>
                        <div className={styles.cartBox}>
                            {cart.totalProducts > 0 && <div className={styles.cartQuantity}>
                                <span className={styles.totalQuantity}>{cart.totalProducts}</span>
                            </div>}
                            <Cart className={styles.cartIcon}/>
                        </div>
                    </a>
                </Link>
            </div>

        </header>
    );
};

export default Header;
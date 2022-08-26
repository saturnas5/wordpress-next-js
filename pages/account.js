import { useSelector } from "react-redux";
import styles from '../styles/account.module.css';
import AccountCard from "../components/AccountCard/AccountCard";

const Account = () => {
    const user = useSelector(state => state.user);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <span className={styles.title}>Hello {user.userInfo.firstName}</span>
                <AccountCard href='/account' name='Orders & Purchases' desc='Track orders, return items or buy again' icon='box' />
                <AccountCard href='/account-details' name='Account Details' desc='View and make changes to personal information' icon='box' />
                <AccountCard href='/address-book' name='Address Book' desc='View and manage your addresses' icon='box' />
            </div>
        </div>
    );
};

export default Account;
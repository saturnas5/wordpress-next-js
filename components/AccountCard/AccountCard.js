import styles from './AccountCard.module.css';
import Link from 'next/link';
import BoxIcon from './box.svg';

const AccountCard = ({ name, desc, icon, href }) => {


    return (
        <Link href={href} className={styles.linkWrapper}>
            <a className={styles.link}>
                <div className={styles.container}>
                    <span className={styles.title}>{name}</span>
                    <BoxIcon className={styles.icon}/>
                    <p className={styles.description}>{desc}</p>
                </div>
            </a>
        </Link>
    )
};

export default AccountCard;
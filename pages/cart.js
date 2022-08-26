import Image from 'next/image';
import styles from '../styles/cart.module.css';
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../redux/features/cart/cartSlice";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState();

    useEffect(() => {
        setQuantity()
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.productsContainer}>
                <div className={styles.cartTitleBox}>
                    <h1 className={styles.cartTitle}>Products Cart</h1>
                </div>
                {cart.products.map(product => (
                    <div className={styles.productBox}>
                        <div className={styles.productImageWrap}>
                            <Image
                                src={product.images[0].src}
                                layout='fill'
                            />
                        </div>
                        <div className={styles.productInfo}>
                            <span className={styles.productTitle}>{product.name}</span>
                            <div className={styles.productPriceBox}>
                                <span>{product.price} €</span>
                            </div>
                        </div>
                        <input type="number" className={styles.productQntInput}/>
                        <span className={styles.productTotalPrice}>{product.quantity * product.price} €</span>
                        <span onClick={() => dispatch(removeProduct(product))} className={styles.productRemoveBtn}>Remove</span>
                    </div>
                ))}
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoBox}>
                    <span>{cart.totalProducts} products in cart</span>
                    <span>{cart.totalValue} €</span>
                </div>
                <div className={styles.infoBox}>
                    <span>Delivery</span>
                    <span>Free</span>
                </div>
                <div className={styles.infoBox}>
                    <span>Taxes</span>
                    <span>0 €</span>
                </div>
                <div className={styles.infoBox}>
                    <span>Total</span>
                    <span>2563 €</span>
                </div>
                <div className={styles.checkoutBox}>
                    <Link href='/checkout'>
                        <a>Checkout</a>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Cart;
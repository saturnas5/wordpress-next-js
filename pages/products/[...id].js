import { useState } from 'react';
import styles from '../../styles/productDetails.module.css';
import { endpoints } from "../../lib/endpointsConfig";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/cart/cartSlice";
import Rating from "../../components/Rating/Rating";

const productDetails = ({ product }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (e) => {
        if (e <= product.stock_quantity && e > 0) {
            setQuantity(Number.parseInt(e))
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div className={styles.imageBox}>
                    <Image
                        src={product.images[0].src}
                        layout='fill'
                        alt={product.name}
                    />
                </div>
                <div className={styles.imagesContainer}>

                </div>
            </div>
            <div className={styles.productContainer}>
                <h1 className={styles.productTitle}>
                    {product.name}
                </h1>
                <div className={styles.ratingContainer}>
                    <Rating rating={Number.parseInt(product.average_rating)} />
                </div>
                <div className={styles.priceContainer}>
                    {
                        !product.sale_price ?
                            <span className={styles.price}>{product.regular_price} €</span>
                            :
                            <div className={styles.salePriceContainer}>
                                <span className={styles.salePrice}>{product.sale_price} €</span>
                                <span className={styles.oldPrice}>{product.regular_price} €</span>
                            </div>
                    }
                    {!product.regular_price && <span className={styles.price}>{product.price} €</span>}
                </div>
                <div
                    dangerouslySetInnerHTML={{__html: product.description}}
                    className={styles.description}
                ></div>
                <span className={styles.stock}>Stock: {product.stock_quantity}</span>
                <div className={styles.cartBtnContainer}>
                    <span className={styles.quantity}>Quantity</span>
                    <input
                        type="number"
                        className={styles.quantityInput}
                        value={quantity}
                        onChange={(e) => handleQuantity(e.target.value)}
                    />
                    <button
                        onClick={() => dispatch(addProduct({...product, quantity: quantity}))}
                        className={styles.cartBtn}
                    >
                        Cart
                    </button>
                </div>
                <div className={styles.socialShare}>
                    <ul className={styles.shereList}>
                        <li className={styles.shareItem}>
                            <a className={styles.shareBtn} href="#">Facebook</a>
                        </li>
                        <li className={styles.shareItem}>
                            <a className={styles.shareBtn} href="#">Twiter</a>
                        </li>
                        <li className={styles.shareItem}>
                            <a className={styles.shareBtn} href="#">Pinterest</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};



export const getStaticProps = async ({ params }) => {
    const product = await fetch(`${endpoints.getProduct}${params.id[1]}`).then(response => response.json());

    return {
        props: {
            product
        }
    }
};

export const getStaticPaths = async () => {
    const products = await fetch(endpoints.allProducts).then(response => response.json());
    return {
        paths: products.map(product => `/products/${product.slug}/${product.id}`),
        fallback: true
    };
};


export default productDetails;
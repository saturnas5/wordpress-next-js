import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';
import Rating from "../Rating/Rating";
import CartIcon from './cart.svg';
import { addProduct } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.productBox}>
            <Link
                href={{
                    pathname: `/products/${product.slug}/${product.id}`,
                    query: {
                        productId: product.id
                    }
                }}
                as={`/products/${product.slug}/${product.id}`}
            >
                <a>
                    <Image className={styles.productImg} src={product.images[0].src} height={300} width={280} />
                    <div className={styles.productInfoBox}>
                        <span className={styles.productName}>{product.name}</span>
                        {
                            product.sale_price ?
                                <div className={styles.productPriceBox}>
                                    <span className={styles.productSalePrice}>{Number.parseInt(product.sale_price)}€</span>
                                    <span className={styles.productDiscountRegularPrice}>{Number.parseInt(product.regular_price)}€</span>
                                </div>
                                :
                                <div className={styles.productPriceBox}>
                                    {
                                        product.regular_price ?
                                            <span className={styles.productRegularPrice}>{Number.parseInt(product.regular_price)}€</span>
                                            :
                                            <span className={styles.productRegularPrice}>{Number.parseInt(product.price)}€</span>
                                    }
                                </div>
                        }
                        <div className={styles.productRatingBox}>
                            <Rating rating={Number.parseInt(product.average_rating)} /> /
                            <span>{product.rating_count}</span>
                        </div>
                    </div>
                    <div className={styles.productViewBtnBox}>
                        <div className={styles.productViewBtn}>
                            View Product
                        </div>
                    </div>
                </a>
            </Link>
            <div className={styles.productActionsBox}>
                <div className={styles.productActionBox}>
                    <button className={styles.productActionBtn}>Co</button>
                </div>
                <div className={styles.productActionBox}>
                    <button className={styles.productActionBtn}>Wi</button>
                </div>
                <div className={styles.productActionBox}>
                    <button onClick={() => dispatch(addProduct({...product, quantity: 1}))} className={styles.productActionBtn}>
                        <CartIcon className={styles.actionBtnIcon}/>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;
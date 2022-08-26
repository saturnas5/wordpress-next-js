import styles from './Products.module.css';
import ProductCard from "../ProductCard/ProductCard";

const Products = ({products}) => {

    return (
        <div className={styles.container}>
            <div className={styles.productsContainer}>
                {products && products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default Products;
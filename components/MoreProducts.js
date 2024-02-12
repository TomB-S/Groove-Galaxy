import styles from '../styles/NewProducts.module.css';


function MoreProducts () {
    return (
        <div className={styles.productCard}>
            <div className={styles.textDiv}>
                <img src='casq1.png' alt='Sound Bar' />
                <img src='casq2.png' alt='Sound Bar' />
                <img src='casq3.png' alt='Sound Bar' />
                <img src='casq4.png' alt='Sound Bar' />
            </div>
        </div>
        
    )
}

export default MoreProducts;
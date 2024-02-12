import styles from '../styles/Product.module.css';
import {Button, ToggleButton, ToggleButtonGroup} from '@mui/material/';
import { styled } from '@mui/material';



const MyCustomButton = styled(Button) ({
    marginLeft: '30px', 
    marginBottom: '20px',
    fontWeight: '600',
    fontSize: '14px',
});

function Products () {

    const products = [{
        name: 'PHANTOM I White',
        description: 'A class of its own.',
        image: '/phantom1.png',
    },
    {
        name: 'PHANTOM II Gold',
        description: 'Pure sound.',
        image: '/phantom2.png',
    },
    {
        name: 'PHANTOM II Black',
        description: 'Deeply nomadic.',
        image: '/phantom3.png',
    },
    {
        name: 'PHANTOM II White',
        description: 'Intensively immersive.',
        image: '/phantom4.png',
    },
];

const productCards = products.map((product, i) => {
    return (
        <div key={i} className={styles.productCard} style={{backgroundImage: `url(${product.image})`, backgroundSize: 'cover'}}>
            <div className={styles.textDiv}>
                <span style={{fontSize: '12px'}}>{product.name}</span>
                <span style={{fontWeight: '800', fontSize: '25px'}}>{product.description}</span>
            </div>
                <div>
                <MyCustomButton variant="contained"
                sx={{"&:hover": {backgroundColor: 'white', opacity:'0.3', border: '2px white solid', color: 'black'}}}
                className={styles.customButton}>
                    DISCOVER
                </MyCustomButton>
                </div>
        </div>
    )
});

    return (
        <div className={styles.main}>
            {productCards}
        </div>
    );  
}

export default Products;
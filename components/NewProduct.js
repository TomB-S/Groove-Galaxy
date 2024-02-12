import styles from '../styles/NewProducts.module.css';
import {Button, Typography} from '@mui/material/';
import { styled } from '@mui/material';

const MyCustomButton = styled(Button) ({
    marginLeft: '30px', 
    marginBottom: '20px',
    fontWeight: '600',
    fontSize: '14px',
});

function NewProduct() {
    return (
        <div className={styles.main}>
            <div className={styles.descrip}>
                <span style={{fontWeight: '300', fontSize: '13px', marginBottom: '5px'}}>LATEST LAUNCH</span>
                <span style={{fontWeight: '700', fontSize: '28px'}}>DIONE SOUNDBAR</span>
            </div>
            <div className={styles.boxImage}>
                <img src='soundbar.png' alt='Sound Bar' className={styles.image}/>
            </div>
            <div>
                <MyCustomButton variant="contained" 
                    sx={{"&:hover": {backgroundColor: 'white', border: '2px black solid', color: 'black', opacity: '0.3'} }}
                    className={styles.customButton}>
                DISCOVER
                </MyCustomButton>
            </div>
            
        </div>
    );
}

export default NewProduct;
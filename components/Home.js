import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import NewProduct from './NewProduct';
import Products from './Products';
import MoreProducts from './MoreProducts.js';
import {Button, Typography, ToggleButton, ToggleButtonGroup} from '@mui/material/';
import { FmdGood, Person, ShoppingBag } from '@mui/icons-material';
import { styled } from '@mui/material';
import { FormatAlignLeft } from '@mui/icons-material';


function Home() {

  // definie my buttons
  const MyCustomButton = styled(Button) ({
    fontWeight: '600',
    fontSize: '14px',
    color: 'black',
    backgroundColor: 'white',
    width: '150px',
    margin: '20px',
    fontSize: '12px',
    fontWeight: '600',
    height: '50px',
});

  const MyCustomButton2 = styled(Button) ({
    fontWeight: '600',
    fontSize: '14px',
    color: 'white',
    backgroundColor: 'black',
    border: '2px white solid',
    width: '150px',
    margin: '20px',
    fontSize: '12px',
    fontWeight: '600',
    height: '50px',
  });

  // style for Hovering 
  const hoverStyles = {
    "&:hover": {
      opacity: '0.3',
      color: 'white'
    }
  };

  
  return (
    <div>
      <main className={styles.main}>

        <div className={styles.header}>
          <div className={styles.headerBar}>
            <div className={styles.iconSection1} >
              <ToggleButtonGroup
                sx={hoverStyles}
              >
                  <FormatAlignLeft sx={{color: 'secondary', marginLeft: '20px', marginTop: '20px'}} />
              </ToggleButtonGroup>
            </div>
            <span className={styles.titleHead}>MUSIC STORE</span>
            <div className={styles.iconSection2}>
              <Person sx={hoverStyles}  style={{fontSize: '20px', color: 'white'}} />
              <FmdGood sx={hoverStyles}  style={{fontSize: '20px', color: 'white'}} />
              <ShoppingBag sx={hoverStyles} style={{fontSize: '20px', color: 'white'}} />
            </div>
          </div>
          <div className={styles.headerBottom}>
            <div className={styles.divColumn1}>
                <Typography style={{ fontSize: '18px', flexBasis: '30%' }}>PHANTOM</Typography>
                <Typography style={{ fontSize: '32px', letterSpacing: '2px',fontWeight: '800'}}>IMPLOSIVE SOUND</Typography>
            </div>
            <div className={styles.divColumn2}>
                <MyCustomButton 
                variant='contained'
                sx={{"&:hover": {backgroundColor: 'black', opacity:'0.3', border: '2px white solid', color: 'white'} }}
                className={styles.customButton}>
                DISCOVER
                </MyCustomButton>
                <MyCustomButton2
                sx={{"&:hover": {backgroundColor: 'white', opacity:'0.3', border: '2px white solid', color: 'black'}}}
                className={styles.customButton}>
                  BUY
                  </MyCustomButton2>
            </div>
          </div>
        </div>
        
        <NewProduct />
        <Products />
        <MoreProducts />
        
        <div className={styles.products}></div>
        <div className={styles.footer}></div>
      </main>
    </div>
  );
}

export default Home;

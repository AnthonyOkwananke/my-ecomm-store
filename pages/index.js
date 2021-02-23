import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'


import { FaShoppingCart } from 'react-icons/fa';

import products from '../products.json';

import { useCart} from '../hooks/use-cart.js';

export default function Home() {

  const { subtotal, totalItems, addToCart, checkout } = useCart();

  //console.log('cartTest', cartTest);
  //console.log('NEXT_PUBLIC_STRIPE_API_KEY', process.env.NEXT_PUBLIC_STRIPE_API_KEY);
  return (
    <div className={styles.container}>
      <Head>
        <title>Everything RV Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Everything RV Shop
        </h1>

        <p className={styles.description}>
         Your one stop and the best RV shop in North America
        </p>

        {/* <p className={styles.description}>
         <strong>Items:</strong>{ totalItems }
         <br />
         <strong>Total Cost:</strong>${ subtotal }
         <br />
         <button className={styles.button} onClick={checkout}>Check Out</button>
        </p> */}

        <ul className={styles.grid}>
          {products.map(product => {
            const { id, title, price, description, image } = product;
            return (
              <li key={ id } className={styles.card}>
                <a href="#" >
                  <img src={ image } alt={ title } />
                  <h3>{ title }</h3>
                  <p>${ price }</p>
                  <p>{ description }</p>
                  <br />
                  <p>
                    <button className={styles.button} onClick={() => 
                      addToCart({
                        id
                      })
                    }>Add to Cart</button>
                  </p>
                </a>
              </li>
            )
          })}

        </ul>
      </main>

      <footer className={styles.footer}>
       <small>© 2021 Everything RV. All rights reserved.</small>
      </footer>
    </div>
  )
}

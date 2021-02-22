import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'



import products from '../products.json';

import useCart from '../hooks/use-cart.js';

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

        <p className={styles.description}>
         <strong>Items:</strong>{ totalItems }
         <br />
         <strong>Total Cost:</strong>${ subtotal }
         <br />
         <button className={styles.button} onClick={checkout}>Check Out</button>
        </p>

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
          {/* <li className={styles.card}>
            <a href="https://nextjs.org/docs" >
              <img src="/images/rv3.jpg" alt="modern-rv" />
              <h3>State-of-the-Art</h3>
              <p>$10,000.00</p>
              <p>Bring Cosmo the space Jellyfish to your wardrobe with this hugh quality tshirt</p>
            </a>
          </li>
          
          <li className={styles.card}>
            <a href="https://nextjs.org/learn" >
              <img src="/images/rv2.jpg" alt="antique-rv" />
              <h3>Blast from the Past</h3>
              <p>$20,000.00</p>
              <p>Add some flare to your life with a sticcker of the Cosmo JellyFish</p>
            </a>
          </li>

          <li className={styles.card}>
            <a href="https://github.com/vercel/next.js/tree/master/examples">
              <img src="/images/teslarv.jpg" alt="future-rv" />
              <h3>The Future</h3>
              <p>$40,000.00</p>
              <p>Show your love for Cosmo with a tshirt and sticker combo pack</p>
            </a>
          </li> */}

          {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </ul>
      </main>

      <footer className={styles.footer}>
       <small>© 2021 Everything RV. All rights reserved.</small>
      </footer>
    </div>
  )
}

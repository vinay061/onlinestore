
import { InferGetStaticPropsType } from 'next'
import getAllProducts from '../framework/shopify/product/get-all-products'

export async function getStaticProps() {
  const products =  await getAllProducts()

  return {
    props: {
      products
    }
  }
}

const Home = ({ products }: InferGetStaticPropsType <typeof getStaticProps>) => {

  
  return (
    <div>
      { JSON.stringify(products) }
      <div>
        {
          products.map((p, index) => {
            return(
              <ol key={index}>
                <li>{p.id}</li>
              </ol>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default Home


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

  const newData = Object.values(products)
  console.log(newData)
  console.log(products)
  const newObject = { products }
  console.log("********************")
  console.log(newObject)
  console.log("------------------------")
  
  return (
    <div>
      { JSON.stringify(products) }
      <div>
        {
          newData.map((p, index) => {
            return(
              <ol key={index}>
                <li>{p.title}</li>
              </ol>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home

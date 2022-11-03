import { Product, Footer, HeroBanner, FooterBanner } from "../components";
import { client } from "../lib/client";

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannersData = await client.fetch(bannerQuery);

  return {
    props: { products, bannersData },
  };
};

const Home = ({ products, bannersData }) => {
  return (
    <>
      <HeroBanner HeroBanner={bannersData.length && bannersData[0]} />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Cricket kit of many variations</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner FooterBanner={bannersData && bannersData[0]} />
    </>
  );
};
export default Home;

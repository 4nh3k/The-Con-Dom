import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";

function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner />
      <main className="flex-grow p-4 bg-gray-100">
        <ProductDetails />
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;

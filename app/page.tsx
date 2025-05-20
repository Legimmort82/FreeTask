
import Banner from "@/features/Homepage/Banner";
import BeforeFooter from "@/features/Homepage/BeforeFooter";
import Intro from "@/features/Homepage/Intro";
import NewProducts from "@/features/Homepage/NewProducts";
import SpecialDiscounts from "@/features/Homepage/SpecialDiscounts";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
export default function Home() {
  return (
    <div className="">
      <Header />
      <Intro/>
      <NewProducts/>
      <Banner/>
      <SpecialDiscounts/>
      <SpecialDiscounts/>
      <Banner/>
      <SpecialDiscounts/>
      <NewProducts/>
      <Banner/>
      <BeforeFooter/>
      <Footer/>
    </div>
  );
}

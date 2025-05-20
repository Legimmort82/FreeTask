import Image from "next/image";
import CardHomePage from "../../components/Cards/CardHomePage";
import ArrowLeft from "@/assets/Icons/ArrowLeft.svg";
const NewProducts = () => {
  return (
    <div className="flex gap-6 mt-[86px] mb-[74px] items-end font-IranSans px-[148px] justify-center">
      <CardHomePage />
      <CardHomePage />
      <div className="w-[392px] ">
        <p className="text-2xl text-Secondary mb-2.5">جدیدترین محصولات</p>
        <p className="text-Neutral-606060 ">
          جدید ترین محصولات با ارسال رایگان تهیه
        </p>
        <p className="text-Neutral-606060 ">
          کنید و در سریع ترین زمان درب منزل تحویل{" "}
        </p>
        <p className="text-Neutral-606060">بگیرید</p>
        <button className="text-white flex mt-4 flex-row-reverse py-3 px-[60px] rounded-xl bg-Primary">
          {" "}
          مشاهده همه محصولات
          <Image src={ArrowLeft} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default NewProducts;

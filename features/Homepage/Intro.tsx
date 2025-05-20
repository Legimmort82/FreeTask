import Image from "next/image";
import Athlete from "@/assets/Images/Athlete.svg";
import ArrowLeft from "@/assets/Icons/ArrowLeft.svg";
import Shop from "@/assets/Icons/Shop.svg";
import Calendar from "@/assets/Icons/Calendar.svg";
import Like from "@/assets/Icons/Like.svg";
import BgDot from "@/assets/Images/BgDot.svg";
const Intro = () => {
  return (
    <>
      <div className="font-IranSans px-[122px] flex w-screen justify-between mt-8">
        <div className="flex flex-col gap-4 items-start">
          <p className="text-Neutral-606060">راحت و مطمئن خرید کنید!</p>
          <p className="text-Secondary text-[32px]">همراه تو در مسیر سلامتی</p>
          <p className="text-Primary text-[32px]">
            سهم بزرگ خودتان را امروز بگیرید! 
          </p>
          <p className="text-Neutral-606060">
            بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه تخفیف
            شگفت انگیز بخر!
          </p>
          <button className="bg-Secondary text-Neutral-White flex rounded-xl gap-2 items-center flex-row-reverse py-3 px-6">
            مشاهده محصولات <Image src={ArrowLeft} alt="arrowLeft" />
          </button>
        </div>
        <Image src={Athlete} alt="Athlete" className="z-20"/>
        <div className="flex flex-col gap-6 mt-[42px]">
          <div className="flex gap-4 items-center">
            <div className="bg-Secondary-0 p-5 rounded-2xl h-20">
              <Image src={Shop} alt="Shop" />
            </div>
            <div>
              <p className="text-Secondary-400">300+</p>
              <p className="text-Neutral-404040">محصولات متنوع</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-Secondary-0 p-5 rounded-2xl h-20">
              <Image src={Like} alt="Shop" />
            </div>
            <div>
              <p className="text-Secondary-400">% 95 </p>
              <p className="text-Neutral-404040">رضایت مشتری</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-Secondary-0 p-5 rounded-2xl h-20">
              <Image src={Calendar} alt="Shop" />
            </div>
            <div>
              <p className="text-Secondary-400">4روز</p>
              <p className="text-Neutral-404040">از خرید تا دریافت</p>
            </div>
          </div>
        </div>
      </div>
      <Image src={BgDot} alt="BgDot" className="w-screen -mt-[140px]" />
    </>
  );
};

export default Intro;

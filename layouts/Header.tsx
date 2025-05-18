import Image from "next/image";
import Logo from "@/assets/Images/Logo.svg";
import User from "@/assets/Icons/User.svg";
import Bag from "@/assets/Icons/Bag.svg";
import Search from "@/assets/Icons/Search.svg";
import Star from "@/assets/Icons/Star.svg";
import Award from "@/assets/Icons/Award.svg";
import Flash from "@/assets/Icons/Flash.svg";
const Header = () => {
  return (
    <div className="font-IranSans w-screen overflow-y-hidden">
      <div className="h-10  w-full flex bg-[#032340] text-white  justify-center py-2.5 ">
        (:با عضویت در فیت لند اولین ارسال را مهمون ما باش
      </div>
      <div className="px-[108px] pt-10 flex items-center w-full justify-between gap-[120px]">
        <div className="flex flex-none flex-col gap-2h text-xs">
          <Image src={Logo} alt="Logo" />
          فروشگاه لوازم ورزشی فبت لند
        </div>
        <div className="flex-1 justify-center flex relative">
          <Image src={Search} alt="Search" className="absolute top-3 right-4" />
          <input
            type="text"
            className="border py-3 pl-4 pr-16 outline-none border-[#CBCBCB] bg-[#f9f9f9] shrink grow rounded-xl"
          />
        </div>
        <div className="flex flex-none gap-3">
          <button className="flex items-center gap-2 shadow-s p-3 rounded-xl">
            ثبت نام | ورود <Image src={User} alt="user" />
          </button>
          <button className="bg-[#FA541C] p-3 rounded-xl">
            <Image src={Bag} alt="Bag" />
          </button>
        </div>
      </div>

      <div className="px-[108px] mt-10 ">
        <div className="bg-[#f9f9f9] rounded-xl px-10 py-5 flex justify-between items-center">
          <div className="flex gap-10">
            <button>مردانه</button>
            <button>مردانه</button>
            <button>مردانه</button>
            <button>مردانه</button>
            <button>مردانه</button>
          </div>
          <div className="flex gap-10 items-center">
            <button className="flex gap-1 flex-row-reverse">جدیدترین محصولات <Image src={Star} alt="NewProducts"/></button>
            <button className="flex gap-1 flex-row-reverse">تخفیفات ویژه <Image src={Flash} alt="Discounts"/></button>
            <button className="flex gap-1 flex-row-reverse">پرفروش ترین ها <Image src={Award} alt="MostSales"/></button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

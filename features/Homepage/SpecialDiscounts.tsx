
import CardProduct from "@/components/Cards/CardProduct"
import ArrowLeft from "@/assets/Icons/ArrowLeftSecondary.svg"
import Image from "next/image"
const SpecialDiscounts = () => {
  return (
    <div className="w-screen  font-IranSans bg-custom h-[572px] bg-center mb-20 relative px-[112px] py-8">
        <h3 className="text-Secondary-700 text-[32px] flex justify-center absolute right-0 left-0 -top-2">تخفیفات ویژه</h3>
        <p className="text-[18px] text-Secondary flex gap-2 items-center mb-1  self-end flex-row-reverse">مشاهده همه<Image src={ArrowLeft} alt="Arrow"/></p>
        <div className=" flex justify-between items-center">
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        </div>
    </div>
  )
}

export default SpecialDiscounts
import Truck from "@/assets/Icons/Truck.svg"
import Image from "next/image"

const InfoCard = () => {
  return (
    <div className="w-[167px] h-[172px] flex flex-col gap-2 items-center justify-center rounded-2xl bg-white">
        <Image src={Truck} alt="Truck"/>
        <p className="text-Secondary text-[18px]">ارسال سریع</p>
    </div>
  )
}

export default InfoCard
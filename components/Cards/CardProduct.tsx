import Image from "next/image"
import CardProductSample from "@/assets/Images/CardProductSample.svg"

const CardProduct = () => {
  return (
    <div className="w-[360px] h-[460]">
        <Image src={CardProductSample} alt="Card" className="rounded-t-2xl"/>
        <div className="h-[187px] w-full py-4 px-4 bg-white rounded-b-2xl flex flex-col gap-2">
            <p className="text-Secondary-900">سویشرت نایک مدل AO-14</p>
            <p className="text-[14px] text-Neutral-Black">۳۰۰,۰۰۰ تومان</p>
            <p className="text-[14px] text-Neutral-404040">از سایز L تا XXL</p>
        </div>
    </div>
  )
}

export default CardProduct
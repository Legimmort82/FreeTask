import Image from "next/image"
import BannerImg from "@/assets/Images/Banner.svg"

const Banner = () => {
  return (
    <div className="w-screen mb-20">
        <Image src={BannerImg} alt="Banner" className="w-full"/>
    </div>
  )
}

export default Banner
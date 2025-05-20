import Image from "next/image";
import SamplePic from "@/assets/Images/SamplePic.svg";
import CardVector from "@/assets/Images/CardVector.svg";

const CardHomePage = () => {
  return (
    <div className="font-IranSans relative rounded-2xl overflow-hidden w-[392px] h-[462px]">
      <Image
        src={SamplePic}
        alt="Sample"
        fill
        className="object-cover rounded-2xl"
      />
      <Image
        src={CardVector}
        alt="Card"
        className="absolute bottom-0 right-0 z-20"
      />
      <div className="absolute px-4 z-50  mt-[357px] flex flex-col gap-2">
        <p className="text-[18px] text-white">جدید ترین تخفیفات فصل برند پوما</p>
        <p className="text-[18px] text-white"> <span className="text-Primary-300">50% </span>تخفیف روی تمام محصولات</p>
      </div>
    </div>
  );
};

export default CardHomePage;

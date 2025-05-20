import InfoCard from "@/components/Cards/InfoCard"


const BeforeFooter = () => {
  return (
    <div className="bg-Secondary-0 font-IranSans mb-8 flex justify-center gap-6 items-center w-screen h-[240px]">
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
        <div className="flex flex-col gap-1">
        <p className="text-Secondary text-2xl">با بیش از ده سال سابقه فروش لوازم </p>
        <p className="text-Secondary text-2xl">ورزشی و لباس های ورزشی</p>
        </div>
    </div>
  )
}

export default BeforeFooter
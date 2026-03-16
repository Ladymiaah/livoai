import { ArrowRight } from "lucide-react"

const HeroSection: React.FC = () => {
    return(
        <div className="'">

            <div className="px-6 py-3 md:px-26 sm:py-8 ">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-10">
                    {/* left section */}
                    <div className="">
                        <h1 className="text-6xl md:text-[5rem] font-sans bg-gradient-to-r from-[#883ccf] via-[#c96881] to-[#f38148] bg-clip-text text-transparent "> 
                            AI analysis <br/> <span className="text-[#000000]">for real-time <br/> discussions</span>
                        </h1>
                        <p className="text-[#726a68] mt-5 text-sm">Livo AI records your meetings, recognize who is speaking and provide <br className="hidden md:block"/>
                         real-time insights and live recommendations - all without manual notes.
                        </p>
                        <div className="flex mt-5 gap-4">
                            <div className=" p-1 rounded-2xl border border-[#c96881] ">
                            <button className="py-2 md:py-4 px-4 md:px-8 flex gap-2 font-sans text-lg rounded-2xl bg-gradient-to-r from-[#883ccf] via-[#c96881] to-[#f38148] ">
                                <span className="rounded-full border border-[#fff] p-1">
                                    <ArrowRight size={16} color="#fff"/>
                                </span>
                                <span className="text-[#fff]">Start for free</span>
                            </button>
                            </div>
                            <button className="border border-[#cdc8bf] py-2 md:py-4 px-4 md:px-8 rounded-2xl text-lg text-[#000000] font-sans ">Contact us</button>
                        </div>
                       
<div className="flex flex-col md:flex-row md:justify-between mt-3 gap-4">
  <ul className="list-disc p-5 marker:text-[#cbc4b8] text-[#000000] text-sm space-y-2 space-x-2  md:flex md:gap-4">
    <li className="">31-day free trial</li>
    <li className="">No credit card required</li>
    <li className="">cancel anytime</li>
  </ul>
</div>
    </div>

    {/* right section */}

    <div className="">
        <img src="/hero-img.png" alt="Logo" className="w-200 h-auto" />
    </div>
                </div>
            </div>

            {/* brand section */}

            <div className="bg-[#ffffff] py-4 md:py-8 text-center ">
                <div className="flex flex-col md:flex-row md:justify-center md:gap-4 md:items-center " >
                    <h1 className="font-bold">Enjoy 50% off premium features <br className="block md:hidden"/> <span className="font-medium"> for first 3-months - 21 days remaining </span> </h1>
                    <div className="flex items-center gap-2 justify-center">    
                            <ArrowRight size={16} className="text-[#c96881] border border-[#c96881] rounded-full "/>
                        <h2 className=" bg-gradient-to-r from-[#883ccf] via-[#c96881] to-[#f38148] bg-clip-text text-transparent ">Start 14 days trial   </h2>
                    </div>
                </div>
                <img src="/brand-img.png" alt="Logo" className="w-500 h-auto mx-auto p-5 md:py-10 md:px-16" />
            </div>
        </div>
    )
}

export default HeroSection
import { IconClose } from "./Icons";

export function ErrorPopup({closePopup}){
    return(
        <div className="fixed top-0 right-0 w-[100vw] h-[100vh] flex items-center justify-center">
            <div onClick={closePopup} className="bg-black opacity-35 absolute w-full h-full top-0 right-0"></div>
            <div className="min-w-96 bg-white relative rounded-lg pb-2 text-center">
                <div className="border-b-[1px] border-[#ccc] p-2 text-center relative">
                    اخطار
                    <span onClick={closePopup} className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer">
                        <IconClose/>
                    </span>
                </div>
                <div dir="rtl" className="text-center font-bold text-xl my-4 text-red-600">
                    لطفا کمتر از 12 کاراکتر وارد کنید.
                </div>
                <button onClick={closePopup} className="p-2 px-6 border-[1px] border-[#008000] text-[#008000] rounded-sm bg-transparent outline-none cursor-pointer transition-all hover:bg-[#008000] hover:text-white">
                    تایید
                </button>
            </div>
        </div>
    )
}
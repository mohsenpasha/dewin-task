import Link from "next/link";
import { useEffect, useState } from "react";
import { IconEye, IconNoEye } from "./Icons";

export default function CInput({type,value,setValue}){
    const [isValid,setIsvalid] = useState(true)
    const [isVisible,setIsVisible] = useState(false)
    useEffect(()=>{
        if(value.length > 12){
            setIsvalid(false)
        }
        else{
            setIsvalid(true)
        }
    },[value])
    function togglePasswordVisibility(){
        setIsVisible(!isVisible)
    }
    return(
        <div className="w-full text-right">
            <div className="flex justify-between flex-row-reverse">
                <span className="text-[#8c8c8c] text-sm font-bold">
                    {type == 'password' ? 'رمز عبور' : 'نام کاربری'}
                </span>
                {type == 'password' && 
                    <Link className="text-xs font-bold text-[#7352eb] underline" href={'forget-password'}>رمز عبور خود را فراموش کردم</Link>
                }
            </div>
            <div className="relative mt-2">
                <input className={`w-full rounded-lg bg-[#f7f6fb] p-2 outline-none border-[1px] transition-all text-right ${isValid ? 'border-transparent' : ' border-red-600'}`} type={isVisible ? 'text' : type} value={value} onChange={(event)=>setValue(event.target.value)} />
                {
                    type == 'password' &&
                    <span onClick={togglePasswordVisibility} className="absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer">
                        {isVisible ?
                            <IconNoEye/>
                            :
                            <IconEye/>
                        }
                </span>
                }
            </div>
        </div>
    )
}
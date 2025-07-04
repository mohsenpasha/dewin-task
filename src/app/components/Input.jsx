import Link from "next/link";

export default function CInput({type,value,setValue}){
    return(
        // <div className="border-[1px] border-[#ccc] rounded-sm p-2">
        <div className="w-full text-right">
            <div className="flex justify-between flex-row-reverse">
                <span className="text-[#8c8c8c] text-sm font-bold">
                    {type == 'password' ? 'رمز عبور' : 'نام کاربری'}
                </span>
                {type == 'password' && 
                    <Link className="text-xs font-bold text-[#7352eb] underline" href={'forget-password'}>رمز عبور خود را فراموش کردم</Link>
                }
            </div>
            <input className="w-full rounded-lg bg-[#f7f6fb] p-2 mt-2 outline-none" type={type} value={value} onChange={(event)=>setValue(event.target.value)} />
        </div>
    )
}
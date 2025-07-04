export function CButton({submitHandler}){
    return(
        <button onClick={submitHandler} className="w-full p-2 text-center text-white bg-[#7352eb] rounded-sm mt-4 cursor-pointer">
            ورود
        </button>
    )
}
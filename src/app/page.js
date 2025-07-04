'use client'
import { useState } from "react";
import CInput from "./components/Input";
import { CButton } from "./components/Button";

export default function Home() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  function submitHandler(){
    if(username.length <= 12 && password.length <= 12){
      console.log('submited')
      // we have submit information and we can use it here
    }
  }
  return (
    <div className="w-full h-[100vh] bg-[#8007f0] flex items-center justify-center">
      <div className="min-w-72 bg-white rounded-lg p-4">
        <div className="text-center font-bold text-[#7352eb]">
          به صفحه ورود خوش آمدید
        </div>
        <input type="text"/>
        <div className="flex flex-col gap-2">
          <CInput value={username} setValue={setUsername} type={'text'}/>
          <CInput value={password} setValue={setPassword} type={'password'}/>
          <CButton submitHandler={submitHandler} />
        </div>
      </div>
    </div>
  );
}

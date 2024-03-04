import React from "react";
import DKLogo from "@/icons/DKLogo";
import SearchMagnify from "@/icons/SearchMagnify";
import SigninIcon from "@/icons/SigninIcon";
import CartIcon from "@/icons/CartIcon";
import ReturnIcon from "@/icons/ReturnIcon";
import SearchMagnify2nd from "@/icons/SearchMagnify2nd";

export default function NavFirst () {
    return (
        <div className={'sticky top-0 left-0 bg-white shadow nav-shadow'}>
            <div className={'py-[12px] px-[16px] max-w-[1676px] mx-auto items-center justify-between lg:flex hidden '}>
                <div className={'flex items-center'}>
                <DKLogo/>
                <div className={'relative w-[600px]  bg-[#f0f0f1] rounded-xl px-[16px] ms-[20px]'}>
                    <div className={'w-full relative'}>
                    <input type="search" className={'block h-[44px] rounded-xl w-[85%] mx-auto bg-[#f0f0f1] outline-0 outline-none'}/>
                        <div className={'absolute right-[16px] top-1/2 -translate-y-1/2'}>
                            <SearchMagnify/>
                        </div>
                    </div>
                </div>
                </div>
                <div className={'flex items-center'}>
                    <div className={'flex gap-[5px] items-center px-[12px] py-[8px] border border-[#e0e0e2] w-fit rounded-xl font-light'}>
                        <SigninIcon/>
                        <span className={''}>ورود | ثبت نام</span>
                    </div>
                    <span className={'mx-3 text-[#e0e0e2]'}>|</span>
                    <CartIcon/>
                </div>
            </div>
            <div className={'lg:hidden flex justify-between items-center py-[16px] px-[20px] w-full'}>
                <ReturnIcon/>
                <DKLogo/>
                <SearchMagnify2nd/>

            </div>
        </div>
    )
}
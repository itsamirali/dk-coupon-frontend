'use client'
import useSWR from "swr";
import axios from "axios";
import Image from "next/image";

const fetcher = (url) => {
    return axios.get(url).then(res => res.data.data)
}
export default function GoodsList () {
    const {data, error} = useSWR('https://about.digikala.com/dkapi/v1/coupon/search/', fetcher)
    console.log(data)
    return (
        <main className={'flex items-start mx-auto justify-center max-w-[1636px] w-full gap-[20px]'}>
            <div className={'flex items-start flex-wrap max-w-[1284px] w-full bg-[#f0f0f1] gap-[1px]'}>
                {data?.products.map((item) => {
                    return (
                        <div className={`max-w-[256px] min-h-[360px] w-full bg-white h-full px-[8px] py-[12px] `} key={item?.id}>
                            <div className={' w-full pt-[26px] pb-[30px]'}>
                                <div className={'max-w-[240px] max-h-[240px] w-full h-full '}>
                                    <Image src={item?.images.main.url[0]} alt={''} width={240} height={240} loading={'lazy'}/>
                                </div>
                            </div>
                            <div>
                                <h3 className={'font-semibold text-[12px] text-[#3f4064]'}>{item?.title_fa}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={'p-[16px] max-w-[268px] w-full border border-[#f0f0f1] mt-[64px] mr-[50px] rounded-xl sticky top-[100px]'}>
                <p className={'text-[11.25px] text-[#81858B] text-start'}>شما در اینجا جمع هزینه‌ی کالا‌های کالابرگی را بدون احتساب تخفیف کالابرگ مشاهده می‌کنید
                </p>
                <hr className={'block border border-[#f0f0f1] my-[16px] max-w-[234px] w-full mx-auto'}/>
                <div className={'flex items-center justify-between text-[10px]'}>
                    <span>جمع مبلغ سبد کالابرگی</span>
                    <span>تومان</span>
                </div>
            </div>
        </main>
    )
}
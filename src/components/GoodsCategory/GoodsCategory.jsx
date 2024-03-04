'use client'
import axios from "axios";
import useSWR from "swr";
import {useEffect, useState} from "react";

const fetcher = (url) => {
    return axios.get(url).then(res => res.data.data.sub_categories_best_selling)
}
export default function GoodsCategory () {
    const {data, error} = useSWR('https://about.digikala.com/dkapi/v1/coupon/', fetcher)
    const [goodCategory, setGoodCategory] = useState({})
    useEffect(() => {
        if (data) {
            setGoodCategory(data)
        }
    }, [data])
    console.log(data)
    return (
        <>
            <div>
                {data.map((item, i) => {
                    return (
                        <div key={i} className={'min-w-[100px] '}>

                        </div>
                    )
                })}
            </div>
        </>
    )
}
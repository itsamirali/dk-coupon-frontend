import Image from "next/image";
import NavFirst from "@/components/NavFirst/NavFirst";
import GoodsCategory from "@/components/GoodsCategory/GoodsCategory";
import GoodsList from "@/components/goodsList/GoodsList";

export default function Home() {
  return (
    <main className="">
        <NavFirst/>
        {/*<GoodsCategory/>*/}
        <GoodsList/>
    </main>
  );
}

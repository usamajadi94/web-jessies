// import Layout from "@/components/layout"
import Link from "next/link"
import Image from "next/image"
// import { Button } from "@/components/ui/button"
import Layout from "../components/checkoutLayout.js"

export default function CartPage() {
  const newProducts = [
    {
      name: "Sub Banana For Other Fruit",
      price: "$9.00",
      image: "/images/CleanGreen.webp",
    },
    {
      name: "Large Cappuccino",
      price: "$6.00",
      image: "/images/CleanGreen.webp",
    },
    {
      name: "Medium Cappuccino",
      price: "$5.50",
      image: "/images/CleanGreen.webp",
    },
    {
      name: "Small Cappuccino",
      price: "$5.00",
      image: "/images/CleanGreen.webp",
    },
  ]

  const cartItems = [
    {}
  ]

  return (
    <Layout headName={"Cart"}>
        {/* Page Header */}
        
      <div className="max-w-7xl border-[.4px] m-4  border-[#edebeb] mx-auto px-4 py-8">

        {/* Empty Cart Message */}
        <div className="text-center   p-8 mb-16">
<hr  className="border-[#edebeb]"/>



          <div className="text-6xl mt-[3rem]  mb-4">😢</div>
          <h2 className="text-[1.2rem] mt-[3rem] font-normal  mb-4">Your cart is currently empty!</h2>
          <Link
            href="/menu"
            className="   px-6 py-3 rounded "
          >
            Browse store
          </Link>
        </div>

        {/* New in Store Section */}
        <section>
          <h2 className="text-3xl font-medium text-center  mb-8">New in store</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {newProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white col-span-1 rounded-lg  text-center   transition-shadow"
              >
               <div className="p-3 border border-gray-200">
                 <Image
                  src={product.image || ""}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
               </div>
                <h3 className="font-semibold text-gray-800 mt-2 mb-2">{product.name}</h3>
                <p className="text-xl font-bold text-gray-800 mb-4">{product.price}</p>
                {product.name === "Sub Banana For Other Fruit" ? (
                  <button className="w-full bg-black py-2 hover:bg-cyan-500 text-white">Add to cart</button>
                ) : (
                  <button variant="outline" className="w-full py-2 bg-black text-white ">
                    Select options
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

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
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Large Cappuccino",
      price: "$6.00",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Medium Cappuccino",
      price: "$5.50",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Small Cappuccino",
      price: "$5.00",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <Layout>
        {/* Page Header */}
        
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Empty Cart Message */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">😢</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is currently empty!</h2>
          <Link
            href="/menu"
            className="inline-block bg-cyan-400 text-white px-6 py-3 rounded hover:bg-cyan-500 transition-colors"
          >
            Browse store
          </Link>
        </div>

        {/* New in Store Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">New in store</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-xl font-bold text-gray-800 mb-4">{product.price}</p>
                {product.name === "Sub Banana For Other Fruit" ? (
                  <button className="w-full bg-cyan-400 hover:bg-cyan-500 text-white">Add to cart</button>
                ) : (
                  <button variant="outline" className="w-full bg-white text-gray-800 border-gray-300 hover:bg-gray-50">
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

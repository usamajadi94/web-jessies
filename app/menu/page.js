import Image from 'next/image'
import Layout from '../components/homeLayout'
import "../globals.css"
import { Roboto_Condensed } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '600'],
})


export const dynamic = 'force-dynamic'

export default async function MenuPage() {
  let menuData = []

  try {
    const res = await fetch('http://localhost:5000/api/products', {
      cache: 'no-store' // ✅ always fetch fresh
    })
    menuData = await res.json()
  } catch (error) {
    console.error('❌ API Error:', error)
  }

  return (
    <Layout>
      <section className="relative h-screen bg-cover bg-center bg-[url('/images/menu-hero.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Menu</h1>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="w-full">
          {Array.isArray(menuData) && menuData.length > 0 ? (
            <div>
              {menuData.map(category => (
                <div
                  key={category.id}
                  className="py-12"
                  style={{ backgroundColor: category.color || '#ffffff' }}
                >
                  <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-6">
                      <Image
                        src="/images/icon_category.webp"
                        alt="Smoothie Icon"
                        width={42}
                        height={45}
                        className="mx-auto mb-4"
                      />
                      <h2
                        className={`${robotoCondensed.className} text-[60px] font-semibold leading-[66px]`}
                      >
                        {category.name}
                      </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                      {category.products.map(product => (
                        <div
                          key={product.id}
                          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                          <Image
                            src={`/images/${product.image}`}
                            alt={product.name}
                            width={400}
                            height={100}
                            className="w-full h-25 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="text-xl font-semibold">{product.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                            <p className="text-lg font-bold text-green-700">
                              ${product.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No menu data available.</p>
          )}
        </div>
      </section>
    </Layout>
  )
}

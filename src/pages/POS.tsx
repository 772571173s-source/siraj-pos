import {
  ShoppingCart,
  Search,
  Trash2,
  Plus,
  Minus,
} from "lucide-react"

function POS() {

  const cartItems = [
    {
      id: 1,
      name: "أسمنت الوطنية",
      quantity: 2,
      price: 3500,
    },

    {
      id: 2,
      name: "مسمار 2 بوصة",
      quantity: 5,
      price: 150,
    },
  ]

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

      {/* المنتجات */}
      <div className="xl:col-span-2 space-y-5">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">
            نقطة البيع
          </h1>

          <div className="flex items-center gap-2 text-blue-400">
            <ShoppingCart size={28} />
          </div>
        </div>

        {/* البحث */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

          <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3">

            <Search className="text-slate-400" />

            <input
              type="text"
              placeholder="ابحث عن منتج..."
              className="bg-transparent outline-none w-full text-white"
            />

          </div>
        </div>

        {/* المنتجات */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-4 hover:border-blue-500 transition-all cursor-pointer"
            >
              <div className="h-32 bg-slate-800 rounded-xl mb-4"></div>

              <h2 className="text-lg font-bold mb-2">
                منتج تجريبي
              </h2>

              <p className="text-blue-400 font-bold mb-3">
                2,500 ر.ي
              </p>

              <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all rounded-xl py-3 font-bold">
                إضافة للسلة
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* السلة */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col">

        <h2 className="text-2xl font-bold mb-5">
          سلة البيع
        </h2>

        {/* العناصر */}
        <div className="space-y-4 flex-1 overflow-auto">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-2xl p-4"
            >

              <div className="flex items-center justify-between mb-3">

                <h3 className="font-bold">
                  {item.name}
                </h3>

                <button className="text-red-400 hover:text-red-500">
                  <Trash2 size={18} />
                </button>

              </div>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <button className="bg-slate-700 hover:bg-slate-600 p-2 rounded-lg">
                    <Plus size={16} />
                  </button>

                  <span className="font-bold">
                    {item.quantity}
                  </span>

                  <button className="bg-slate-700 hover:bg-slate-600 p-2 rounded-lg">
                    <Minus size={16} />
                  </button>

                </div>

                <div className="text-blue-400 font-bold">
                  {item.price} ر.ي
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* الإجمالي */}
        <div className="border-t border-slate-800 pt-5 mt-5 space-y-4">

          <div className="flex items-center justify-between text-lg">
            <span>الإجمالي</span>

            <span className="text-2xl font-bold text-blue-400">
              14,250 ر.ي
            </span>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 transition-all rounded-2xl py-4 text-lg font-bold">
            إتمام البيع
          </button>

          <button className="w-full bg-slate-800 hover:bg-slate-700 transition-all rounded-2xl py-4 font-bold">
            طباعة الفاتورة
          </button>

        </div>
      </div>
    </div>
  )
}

export default POS
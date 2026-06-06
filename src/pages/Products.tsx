import { Edit, Plus, Search, Trash2 } from "lucide-react"

function Products() {
  const products = [
    {
      id: 1,
      name: "أسمنت الوطنية",
      barcode: "10001",
      category: "أسمنت",
      unit: "كيس",
      stock: 120,
      minStock: 20,
      purchasePrice: 3000,
      salePrice: 3500,
    },
    {
      id: 2,
      name: "مسمار 2 بوصة",
      barcode: "10002",
      category: "حديد ومسامير",
      unit: "كيلو",
      stock: 8,
      minStock: 10,
      purchasePrice: 1200,
      salePrice: 1500,
    },
    {
      id: 3,
      name: "بلك عادي",
      barcode: "10003",
      category: "بلك",
      unit: "حبة",
      stock: 500,
      minStock: 100,
      purchasePrice: 90,
      salePrice: 120,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">المنتجات</h1>
          <p className="text-slate-400 mt-2">
            إدارة المنتجات والأسعار ووحدات البيع
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition-all rounded-xl px-5 py-3 font-bold flex items-center gap-2">
          <Plus size={20} />
          إضافة منتج
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
        <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3">
          <Search className="text-slate-400" />
          <input
            type="text"
            placeholder="ابحث باسم المنتج أو الباركود..."
            className="bg-transparent outline-none w-full text-white"
          />
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full text-right">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="p-4">المنتج</th>
              <th className="p-4">الباركود</th>
              <th className="p-4">التصنيف</th>
              <th className="p-4">الوحدة</th>
              <th className="p-4">المخزون</th>
              <th className="p-4">سعر الشراء</th>
              <th className="p-4">سعر البيع</th>
              <th className="p-4">الحالة</th>
              <th className="p-4">إجراءات</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => {
              const isLowStock = product.stock <= product.minStock

              return (
                <tr
                  key={product.id}
                  className="border-t border-slate-800 hover:bg-slate-800/60 transition-all"
                >
                  <td className="p-4 font-bold">{product.name}</td>
                  <td className="p-4 text-slate-400">{product.barcode}</td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4">{product.unit}</td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-4">{product.purchasePrice} ر.ي</td>
                  <td className="p-4 text-blue-400 font-bold">
                    {product.salePrice} ر.ي
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        isLowStock
                          ? "bg-red-500/20 text-red-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {isLowStock ? "منخفض" : "متوفر"}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="bg-slate-700 hover:bg-slate-600 p-2 rounded-lg">
                        <Edit size={17} />
                      </button>

                      <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 p-2 rounded-lg">
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products
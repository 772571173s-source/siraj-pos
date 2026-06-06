import {
  AlertTriangle,
  Archive,
  Boxes,
  PackageCheck,
  Search,
} from "lucide-react"

function Inventory() {

  const inventoryItems = [
    {
      id: 1,
      name: "أسمنت الوطنية",
      unit: "كيس",
      stock: 120,
      minStock: 20,
      status: "good",
    },

    {
      id: 2,
      name: "مسمار 2 بوصة",
      unit: "كيلو",
      stock: 8,
      minStock: 10,
      status: "low",
    },

    {
      id: 3,
      name: "بلك عادي",
      unit: "حبة",
      stock: 0,
      minStock: 100,
      status: "empty",
    },
  ]

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            المخزون
          </h1>

          <p className="text-slate-400 mt-2">
            متابعة الكميات وحالة المنتجات
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition-all rounded-xl px-5 py-3 font-bold">
          جرد المخزون
        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                إجمالي المنتجات
              </p>

              <h2 className="text-3xl font-bold text-blue-400">
                325
              </h2>
            </div>

            <Boxes size={35} className="text-blue-400" />

          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                منتجات منخفضة
              </p>

              <h2 className="text-3xl font-bold text-yellow-400">
                12
              </h2>
            </div>

            <AlertTriangle size={35} className="text-yellow-400" />

          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                نافدة من المخزون
              </p>

              <h2 className="text-3xl font-bold text-red-400">
                4
              </h2>
            </div>

            <Archive size={35} className="text-red-400" />

          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                المنتجات المتوفرة
              </p>

              <h2 className="text-3xl font-bold text-green-400">
                309
              </h2>
            </div>

            <PackageCheck size={35} className="text-green-400" />

          </div>
        </div>

      </div>

      {/* Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

        <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3">

          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="ابحث في المخزون..."
            className="bg-transparent outline-none w-full text-white"
          />

        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

        <table className="w-full text-right">

          <thead className="bg-slate-800 text-slate-300">

            <tr>
              <th className="p-4">المنتج</th>
              <th className="p-4">الوحدة</th>
              <th className="p-4">الكمية الحالية</th>
              <th className="p-4">الحد الأدنى</th>
              <th className="p-4">الحالة</th>
              <th className="p-4">إجراءات</th>
            </tr>

          </thead>

          <tbody>

            {inventoryItems.map((item) => {

              return (
                <tr
                  key={item.id}
                  className="border-t border-slate-800 hover:bg-slate-800/60 transition-all"
                >

                  <td className="p-4 font-bold">
                    {item.name}
                  </td>

                  <td className="p-4">
                    {item.unit}
                  </td>

                  <td className="p-4 text-blue-400 font-bold">
                    {item.stock}
                  </td>

                  <td className="p-4">
                    {item.minStock}
                  </td>

                  <td className="p-4">

                    {item.status === "good" && (
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                        متوفر
                      </span>
                    )}

                    {item.status === "low" && (
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">
                        منخفض
                      </span>
                    )}

                    {item.status === "empty" && (
                      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">
                        نافد
                      </span>
                    )}

                  </td>

                  <td className="p-4">

                    <div className="flex items-center gap-2">

                      <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg">
                        تعديل
                      </button>

                      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                        حركة
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

export default Inventory
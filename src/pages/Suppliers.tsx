import {
  Plus,
  Search,
  Truck,
  Wallet,
  PackageCheck,
} from "lucide-react"

function Suppliers() {

  const suppliers = [
    {
      id: 1,
      name: "شركة الوطنية للأسمنت",
      phone: "777111222",
      products: 15,
      debt: 250000,
      status: "debtor",
    },

    {
      id: 2,
      name: "مؤسسة الحديد الحديث",
      phone: "770555888",
      products: 8,
      debt: 0,
      status: "good",
    },

    {
      id: 3,
      name: "مخازن البناء الحديث",
      phone: "771999444",
      products: 21,
      debt: 120000,
      status: "debtor",
    },
  ]

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            الموردين
          </h1>

          <p className="text-slate-400 mt-2">
            إدارة الموردين والمشتريات والديون
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition-all rounded-xl px-5 py-3 font-bold flex items-center gap-2">

          <Plus size={20} />

          إضافة مورد

        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                إجمالي الموردين
              </p>

              <h2 className="text-3xl font-bold text-blue-400">
                48
              </h2>
            </div>

            <Truck size={35} className="text-blue-400" />

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                إجمالي الديون
              </p>

              <h2 className="text-3xl font-bold text-red-400">
                820,000 ر.ي
              </h2>
            </div>

            <Wallet size={35} className="text-red-400" />

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                المنتجات الموردة
              </p>

              <h2 className="text-3xl font-bold text-green-400">
                324
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
            placeholder="ابحث عن مورد..."
            className="bg-transparent outline-none w-full text-white"
          />

        </div>

      </div>

      {/* Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

        <table className="w-full text-right">

          <thead className="bg-slate-800 text-slate-300">

            <tr>
              <th className="p-4">المورد</th>
              <th className="p-4">رقم الهاتف</th>
              <th className="p-4">عدد المنتجات</th>
              <th className="p-4">الدين</th>
              <th className="p-4">الحالة</th>
              <th className="p-4">إجراءات</th>
            </tr>

          </thead>

          <tbody>

            {suppliers.map((supplier) => (

              <tr
                key={supplier.id}
                className="border-t border-slate-800 hover:bg-slate-800/60 transition-all"
              >

                <td className="p-4 font-bold">
                  {supplier.name}
                </td>

                <td className="p-4 text-slate-400">
                  {supplier.phone}
                </td>

                <td className="p-4">
                  {supplier.products}
                </td>

                <td className="p-4 font-bold text-red-400">
                  {supplier.debt} ر.ي
                </td>

                <td className="p-4">

                  {supplier.status === "good" && (
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                      منتظم
                    </span>
                  )}

                  {supplier.status === "debtor" && (
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">
                      مستحقات قائمة
                    </span>
                  )}

                </td>

                <td className="p-4">

                  <div className="flex items-center gap-2">

                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                      كشف حساب
                    </button>

                    <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg">
                      تعديل
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  )
}

export default Suppliers
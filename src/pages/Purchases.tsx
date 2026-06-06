import {
  Plus,
  Search,
  ShoppingBag,
  Wallet,
  PackagePlus,
} from "lucide-react"

function Purchases() {

  const purchases = [
    {
      id: 1,
      supplier: "شركة الوطنية للأسمنت",
      invoice: "PUR-1001",
      items: 12,
      total: 450000,
      paid: 300000,
      remaining: 150000,
      status: "partial",
    },

    {
      id: 2,
      supplier: "مؤسسة الحديد الحديث",
      invoice: "PUR-1002",
      items: 5,
      total: 120000,
      paid: 120000,
      remaining: 0,
      status: "paid",
    },

    {
      id: 3,
      supplier: "مخازن البناء الحديث",
      invoice: "PUR-1003",
      items: 18,
      total: 780000,
      paid: 200000,
      remaining: 580000,
      status: "partial",
    },
  ]

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            المشتريات
          </h1>

          <p className="text-slate-400 mt-2">
            إدارة فواتير الشراء وإدخال المخزون
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition-all rounded-xl px-5 py-3 font-bold flex items-center gap-2">

          <Plus size={20} />

          فاتورة شراء جديدة

        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                إجمالي المشتريات
              </p>

              <h2 className="text-3xl font-bold text-blue-400">
                1,350,000 ر.ي
              </h2>
            </div>

            <ShoppingBag size={35} className="text-blue-400" />

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                المتبقي للموردين
              </p>

              <h2 className="text-3xl font-bold text-red-400">
                730,000 ر.ي
              </h2>
            </div>

            <Wallet size={35} className="text-red-400" />

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                المنتجات المضافة
              </p>

              <h2 className="text-3xl font-bold text-green-400">
                245
              </h2>
            </div>

            <PackagePlus size={35} className="text-green-400" />

          </div>

        </div>

      </div>

      {/* Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

        <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3">

          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="ابحث عن فاتورة شراء..."
            className="bg-transparent outline-none w-full text-white"
          />

        </div>

      </div>

      {/* Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

        <table className="w-full text-right">

          <thead className="bg-slate-800 text-slate-300">

            <tr>
              <th className="p-4">رقم الفاتورة</th>
              <th className="p-4">المورد</th>
              <th className="p-4">عدد المنتجات</th>
              <th className="p-4">الإجمالي</th>
              <th className="p-4">المدفوع</th>
              <th className="p-4">المتبقي</th>
              <th className="p-4">الحالة</th>
              <th className="p-4">إجراءات</th>
            </tr>

          </thead>

          <tbody>

            {purchases.map((purchase) => (

              <tr
                key={purchase.id}
                className="border-t border-slate-800 hover:bg-slate-800/60 transition-all"
              >

                <td className="p-4 font-bold text-blue-400">
                  {purchase.invoice}
                </td>

                <td className="p-4 font-bold">
                  {purchase.supplier}
                </td>

                <td className="p-4">
                  {purchase.items}
                </td>

                <td className="p-4">
                  {purchase.total} ر.ي
                </td>

                <td className="p-4 text-green-400 font-bold">
                  {purchase.paid} ر.ي
                </td>

                <td className="p-4 text-red-400 font-bold">
                  {purchase.remaining} ر.ي
                </td>

                <td className="p-4">

                  {purchase.status === "paid" && (
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                      مدفوعة
                    </span>
                  )}

                  {purchase.status === "partial" && (
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">
                      جزئي
                    </span>
                  )}

                </td>

                <td className="p-4">

                  <div className="flex items-center gap-2">

                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                      عرض
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

export default Purchases
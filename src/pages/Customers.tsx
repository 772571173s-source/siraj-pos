import {
  Plus,
  Search,
  Phone,
  Wallet,
  FileText,
} from "lucide-react"

function Customers() {

  const customers = [
    {
      id: 1,
      name: "محمد أحمد",
      phone: "777123456",
      invoices: 12,
      debt: 45000,
      status: "debtor",
    },

    {
      id: 2,
      name: "عبدالله علي",
      phone: "771555444",
      invoices: 5,
      debt: 0,
      status: "good",
    },

    {
      id: 3,
      name: "مقاولات الأمل",
      phone: "770888999",
      invoices: 28,
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
            العملاء
          </h1>

          <p className="text-slate-400 mt-2">
            إدارة العملاء والديون والفواتير
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition-all rounded-xl px-5 py-3 font-bold flex items-center gap-2">

          <Plus size={20} />

          إضافة عميل

        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                إجمالي العملاء
              </p>

              <h2 className="text-3xl font-bold text-blue-400">
                135
              </h2>
            </div>

            <FileText size={35} className="text-blue-400" />

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                إجمالي الديون
              </p>

              <h2 className="text-3xl font-bold text-red-400">
                350,000 ر.ي
              </h2>
            </div>

            <Wallet size={35} className="text-red-400" />

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                العملاء النشطون
              </p>

              <h2 className="text-3xl font-bold text-green-400">
                92
              </h2>
            </div>

            <Phone size={35} className="text-green-400" />

          </div>

        </div>

      </div>

      {/* Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

        <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3">

          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="ابحث عن عميل..."
            className="bg-transparent outline-none w-full text-white"
          />

        </div>

      </div>

      {/* Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

        <table className="w-full text-right">

          <thead className="bg-slate-800 text-slate-300">

            <tr>
              <th className="p-4">العميل</th>
              <th className="p-4">رقم الهاتف</th>
              <th className="p-4">عدد الفواتير</th>
              <th className="p-4">الدين</th>
              <th className="p-4">الحالة</th>
              <th className="p-4">إجراءات</th>
            </tr>

          </thead>

          <tbody>

            {customers.map((customer) => (

              <tr
                key={customer.id}
                className="border-t border-slate-800 hover:bg-slate-800/60 transition-all"
              >

                <td className="p-4 font-bold">
                  {customer.name}
                </td>

                <td className="p-4 text-slate-400">
                  {customer.phone}
                </td>

                <td className="p-4">
                  {customer.invoices}
                </td>

                <td className="p-4 font-bold text-red-400">
                  {customer.debt} ر.ي
                </td>

                <td className="p-4">

                  {customer.status === "good" && (
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                      منتظم
                    </span>
                  )}

                  {customer.status === "debtor" && (
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">
                      عليه دين
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

export default Customers
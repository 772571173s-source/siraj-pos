import { Plus, Search, Wallet, TrendingDown, CalendarDays } from "lucide-react"

function Expenses() {
  const expenses = [
    {
      id: 1,
      title: "أجرة نقل بضاعة",
      category: "نقل",
      amount: 15000,
      date: "2026-06-06",
      notes: "نقل إسمنت من المورد",
    },
    {
      id: 2,
      title: "كهرباء المحل",
      category: "خدمات",
      amount: 8000,
      date: "2026-06-05",
      notes: "فاتورة شهرية",
    },
    {
      id: 3,
      title: "تحميل وتنزيل",
      category: "عمال",
      amount: 5000,
      date: "2026-06-05",
      notes: "تنزيل بلك",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">المصروفات</h1>
          <p className="text-slate-400 mt-2">
            تسجيل ومتابعة مصروفات المحل اليومية
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition-all rounded-xl px-5 py-3 font-bold flex items-center gap-2">
          <Plus size={20} />
          إضافة مصروف
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 mb-2">مصروفات اليوم</p>
              <h2 className="text-3xl font-bold text-red-400">20,000 ر.ي</h2>
            </div>
            <Wallet size={35} className="text-red-400" />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 mb-2">مصروفات الشهر</p>
              <h2 className="text-3xl font-bold text-yellow-400">185,000 ر.ي</h2>
            </div>
            <TrendingDown size={35} className="text-yellow-400" />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 mb-2">عدد العمليات</p>
              <h2 className="text-3xl font-bold text-blue-400">34</h2>
            </div>
            <CalendarDays size={35} className="text-blue-400" />
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
        <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3">
          <Search className="text-slate-400" />
          <input
            type="text"
            placeholder="ابحث عن مصروف..."
            className="bg-transparent outline-none w-full text-white"
          />
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full text-right">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="p-4">المصروف</th>
              <th className="p-4">التصنيف</th>
              <th className="p-4">المبلغ</th>
              <th className="p-4">التاريخ</th>
              <th className="p-4">ملاحظات</th>
              <th className="p-4">إجراءات</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((expense) => (
              <tr
                key={expense.id}
                className="border-t border-slate-800 hover:bg-slate-800/60 transition-all"
              >
                <td className="p-4 font-bold">{expense.title}</td>
                <td className="p-4">{expense.category}</td>
                <td className="p-4 text-red-400 font-bold">
                  {expense.amount} ر.ي
                </td>
                <td className="p-4 text-slate-400">{expense.date}</td>
                <td className="p-4 text-slate-400">{expense.notes}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg">
                      تعديل
                    </button>

                    <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg">
                      حذف
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

export default Expenses
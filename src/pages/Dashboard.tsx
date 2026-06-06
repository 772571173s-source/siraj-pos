function Dashboard() {
  const stats = [
    {
      title: "مبيعات اليوم",
      value: "15,500 ر.ي",
    },

    {
      title: "عدد الفواتير",
      value: "28",
    },

    {
      title: "المنتجات الناقصة",
      value: "12",
    },

    {
      title: "ديون العملاء",
      value: "42,000 ر.ي",
    },
  ]

  return (
    <div className="space-y-6">

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          لوحة التحكم
        </h1>

        <p className="text-slate-400 mt-2">
          نظرة عامة على نشاط المحل اليوم
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl"
          >
            <p className="text-slate-400 text-sm mb-3">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold text-blue-400">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="text-xl font-bold mb-5">
          اختصارات سريعة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

          <button className="bg-blue-600 hover:bg-blue-700 transition-all rounded-xl py-4 font-bold">
            فاتورة جديدة
          </button>

          <button className="bg-slate-800 hover:bg-slate-700 transition-all rounded-xl py-4 font-bold">
            إضافة منتج
          </button>

          <button className="bg-slate-800 hover:bg-slate-700 transition-all rounded-xl py-4 font-bold">
            جرد المخزون
          </button>

          <button className="bg-slate-800 hover:bg-slate-700 transition-all rounded-xl py-4 font-bold">
            عرض التقارير
          </button>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
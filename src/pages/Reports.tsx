import {
  BarChart3,
  Download,
  FileText,
  Package,
  TrendingUp,
  Users,
} from "lucide-react"

function Reports() {
  const reports = [
    {
      id: 1,
      title: "تقرير المبيعات اليومية",
      description: "عرض مبيعات اليوم وعدد الفواتير والإجمالي",
      icon: <TrendingUp size={28} />,
    },
    {
      id: 2,
      title: "تقرير المخزون",
      description: "المنتجات المتوفرة والناقصة والنافدة",
      icon: <Package size={28} />,
    },
    {
      id: 3,
      title: "تقرير العملاء والديون",
      description: "كشف العملاء والمبالغ المتبقية عليهم",
      icon: <Users size={28} />,
    },
    {
      id: 4,
      title: "تقرير الأرباح",
      description: "ملخص الأرباح التقريبية بعد المصروفات",
      icon: <BarChart3 size={28} />,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">التقارير</h1>
        <p className="text-slate-400 mt-2">
          متابعة أداء المحل والمبيعات والمخزون والديون
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 mb-2">مبيعات اليوم</p>
          <h2 className="text-3xl font-bold text-blue-400">155,000 ر.ي</h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 mb-2">الأرباح التقريبية</p>
          <h2 className="text-3xl font-bold text-green-400">32,000 ر.ي</h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 mb-2">إجمالي الديون</p>
          <h2 className="text-3xl font-bold text-red-400">350,000 ر.ي</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500 transition-all"
          >
            <div className="text-blue-400 mb-4">{report.icon}</div>

            <h2 className="text-xl font-bold mb-2">{report.title}</h2>

            <p className="text-slate-400 text-sm mb-5">
              {report.description}
            </p>

            <div className="flex items-center gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2">
                <FileText size={17} />
                عرض
              </button>

              <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg flex items-center gap-2">
                <Download size={17} />
                تصدير
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reports
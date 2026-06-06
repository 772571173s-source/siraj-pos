import {
  Building2,
  Save,
  Printer,
  Globe,
  Percent,
  Palette,
} from "lucide-react"

function Settings() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          الإعدادات
        </h1>

        <p className="text-slate-400 mt-2">
          إعدادات النظام والطباعة والمحل
        </p>
      </div>

      {/* Store Settings */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-6">

          <Building2 className="text-blue-400" />

          <h2 className="text-2xl font-bold">
            معلومات المحل
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="block mb-2 text-slate-400">
              اسم المحل
            </label>

            <input
              type="text"
              defaultValue="سراج لمواد البناء"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-400">
              رقم الهاتف
            </label>

            <input
              type="text"
              defaultValue="777000111"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-slate-400">
              عنوان المحل
            </label>

            <input
              type="text"
              defaultValue="صنعاء - شارع تعز"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

        </div>

      </div>

      {/* System Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Language */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <Globe className="text-blue-400" />

            <h2 className="text-xl font-bold">
              اللغة والعملات
            </h2>

          </div>

          <div className="space-y-4">

            <div>
              <label className="block mb-2 text-slate-400">
                اللغة
              </label>

              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none">

                <option>العربية</option>

                <option>English</option>

              </select>
            </div>

            <div>
              <label className="block mb-2 text-slate-400">
                العملة
              </label>

              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none">

                <option>ريال يمني</option>

                <option>دولار</option>

                <option>ريال سعودي</option>

              </select>
            </div>

          </div>

        </div>

        {/* Tax */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <Percent className="text-yellow-400" />

            <h2 className="text-xl font-bold">
              الضريبة
            </h2>

          </div>

          <div>

            <label className="block mb-2 text-slate-400">
              نسبة الضريبة
            </label>

            <input
              type="number"
              defaultValue="0"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>

        </div>

        {/* Printing */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <Printer className="text-green-400" />

            <h2 className="text-xl font-bold">
              إعدادات الطباعة
            </h2>

          </div>

          <div className="space-y-4">

            <div>
              <label className="block mb-2 text-slate-400">
                نوع الطباعة
              </label>

              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none">

                <option>فاتورة حرارية</option>

                <option>A4</option>

              </select>
            </div>

          </div>

        </div>

        {/* Theme */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <Palette className="text-pink-400" />

            <h2 className="text-xl font-bold">
              المظهر
            </h2>

          </div>

          <div className="space-y-4">

            <button className="w-full bg-slate-800 hover:bg-slate-700 rounded-xl py-3 font-bold">
              الوضع الداكن
            </button>

          </div>

        </div>

      </div>

      {/* Save */}
      <div className="flex justify-end">

        <button className="bg-blue-600 hover:bg-blue-700 transition-all rounded-xl px-6 py-4 font-bold flex items-center gap-2">

          <Save size={20} />

          حفظ الإعدادات

        </button>

      </div>

    </div>
  )
}

export default Settings
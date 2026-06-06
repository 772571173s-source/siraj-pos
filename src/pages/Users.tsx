import {
  Plus,
  Search,
  Shield,
  UserCheck,
  UserCog,
} from "lucide-react"

function Users() {

  const users = [
    {
      id: 1,
      name: "Ali",
      username: "admin",
      role: "Admin",
      status: "active",
    },

    {
      id: 2,
      name: "محمد",
      username: "cashier1",
      role: "Cashier",
      status: "active",
    },

    {
      id: 3,
      name: "أحمد",
      username: "storekeeper",
      role: "Storekeeper",
      status: "inactive",
    },
  ]

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            المستخدمون والصلاحيات
          </h1>

          <p className="text-slate-400 mt-2">
            إدارة الحسابات والصلاحيات داخل النظام
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition-all rounded-xl px-5 py-3 font-bold flex items-center gap-2">

          <Plus size={20} />

          إضافة مستخدم

        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                إجمالي المستخدمين
              </p>

              <h2 className="text-3xl font-bold text-blue-400">
                12
              </h2>
            </div>

            <UserCog size={35} className="text-blue-400" />

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                المستخدمون النشطون
              </p>

              <h2 className="text-3xl font-bold text-green-400">
                9
              </h2>
            </div>

            <UserCheck size={35} className="text-green-400" />

          </div>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-slate-400 mb-2">
                المدراء
              </p>

              <h2 className="text-3xl font-bold text-red-400">
                2
              </h2>
            </div>

            <Shield size={35} className="text-red-400" />

          </div>

        </div>

      </div>

      {/* Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">

        <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3">

          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="ابحث عن مستخدم..."
            className="bg-transparent outline-none w-full text-white"
          />

        </div>

      </div>

      {/* Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

        <table className="w-full text-right">

          <thead className="bg-slate-800 text-slate-300">

            <tr>
              <th className="p-4">الاسم</th>
              <th className="p-4">اسم المستخدم</th>
              <th className="p-4">الصلاحية</th>
              <th className="p-4">الحالة</th>
              <th className="p-4">إجراءات</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="border-t border-slate-800 hover:bg-slate-800/60 transition-all"
              >

                <td className="p-4 font-bold">
                  {user.name}
                </td>

                <td className="p-4 text-slate-400">
                  {user.username}
                </td>

                <td className="p-4">

                  {user.role === "Admin" && (
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">
                      مدير
                    </span>
                  )}

                  {user.role === "Cashier" && (
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-bold">
                      كاشير
                    </span>
                  )}

                  {user.role === "Storekeeper" && (
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">
                      مخزن
                    </span>
                  )}

                </td>

                <td className="p-4">

                  {user.status === "active" && (
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                      نشط
                    </span>
                  )}

                  {user.status === "inactive" && (
                    <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm font-bold">
                      متوقف
                    </span>
                  )}

                </td>

                <td className="p-4">

                  <div className="flex items-center gap-2">

                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
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

export default Users
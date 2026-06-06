import { useState } from "react"

import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Boxes,
  UsersIcon,
  Truck,
  ShoppingBag,
  Wallet,
  BarChart3,
  Shield,
  SettingsIcon,
} from "lucide-react"

import Dashboard from "../pages/Dashboard"
import POS from "../pages/POS"
import Products from "../pages/Products"
import Inventory from "../pages/Inventory"
import Customers from "../pages/Customers"
import Suppliers from "../pages/Suppliers"
import Purchases from "../pages/Purchases"
import Expenses from "../pages/Expenses"
import Reports from "../pages/Reports"
import Users from "../pages/Users"
import Settings from "../pages/Settings"

function MainLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(true)

  const [activePage, setActivePage] = useState("dashboard")

  const menuItems = [
    {
      key: "dashboard",
      label: "الرئيسية",
      icon: <LayoutDashboard size={20} />,
    },

    {
      key: "pos",
      label: "نقطة البيع",
      icon: <ShoppingCart size={20} />,
    },

    {
      key: "products",
      label: "المنتجات",
      icon: <Package size={20} />,
    },

    {
      key: "inventory",
      label: "المخزون",
      icon: <Boxes size={20} />,
    },

    {
      key: "customers",
      label: "العملاء",
      icon: <UsersIcon size={20} />,
    },

    {
      key: "suppliers",
      label: "الموردين",
      icon: <Truck size={20} />,
    },

    {
      key: "purchases",
      label: "المشتريات",
      icon: <ShoppingBag size={20} />,
    },

    {
      key: "expenses",
      label: "المصروفات",
      icon: <Wallet size={20} />,
    },

    {
      key: "reports",
      label: "التقارير",
      icon: <BarChart3 size={20} />,
    },

    {
      key: "users",
      label: "المستخدمون",
      icon: <Shield size={20} />,
    },

    {
      key: "settings",
      label: "الإعدادات",
      icon: <SettingsIcon size={20} />,
    },
  ]

  const renderPage = () => {

    switch (activePage) {

      case "dashboard":
        return <Dashboard />

      case "pos":
        return <POS />

      case "products":
        return <Products />

      case "inventory":
        return <Inventory />

      case "customers":
        return <Customers />

      case "suppliers":
        return <Suppliers />

      case "purchases":
        return <Purchases />

      case "expenses":
        return <Expenses />

      case "reports":
        return <Reports />

      case "users":
        return <Users />

      case "settings":
        return <Settings />

      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <aside
        className={`bg-slate-900 border-l border-slate-800 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >

        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">

          {sidebarOpen && (
            <h1 className="text-2xl font-bold text-blue-400">
              سراج 🔥
            </h1>
          )}

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg transition-all"
          >
            ☰
          </button>

        </div>

        {/* Menu */}
        <nav className="p-3 space-y-2">

          {menuItems.map((item) => (

            <button
              key={item.key}
              onClick={() => setActivePage(item.key)}
              className={`w-full px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                activePage === item.key
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >

              {item.icon}

              {sidebarOpen && (
                <span>{item.label}</span>
              )}

            </button>

          ))}

        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6">

          <h2 className="text-xl font-bold">
            نظام إدارة محل مواد بناء
          </h2>

          <div className="text-slate-400">
            Ali - Admin
          </div>

        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {renderPage()}
        </main>

      </div>
    </div>
  )
}

export default MainLayout
import React, { useState } from 'react'
import { FaPlus, FaTintSlash, FaBox, FaUsers, FaShoppingCart, FaPeopleArrows } from 'react-icons/fa'
import ProductItems from './products/ProductItems'
import AddProduct from './products/AddProduct'
import PubsItems from './pub/PubsItems'
import AddPub from './pub/AddPub'
import OrderItems from './orders/OrderItems'
import ContactItems from './contacts/ContactItems'
import UserItems from './user/UserItems'

const Dashboard: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home')

  const renderContent = () => {
    switch (activePage) {
      case 'products':
        return <ProductItems/>
      case 'addProduct':
        return  <AddProduct/>
     case 'orders':
        return <OrderItems/>
      case 'users':
        return <UserItems/>
      case 'addPub':
        return <AddPub/>
      case 'viewPubs':
        return <PubsItems/>
      case 'contact':
          return <ContactItems/>
      default:
        return <ProductItems/>
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-10 bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-bold text-gray-700 border-b-2 pb-2 mb-4">Dashboard</h2>

        <nav className="space-y-4">
          {/* Products */}
          <details open>
            <summary className="cursor-pointer flex items-center text-lg font-semibold text-gray-800 hover:text-indigo-600">
              <FaBox className="mr-2" /> Products
            </summary>
            <div className="ml-6 mt-2 space-y-2 text-sm text-blue-600">
              <button onClick={() => setActivePage('products')} className="hover:underline">View Products</button>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer hover:underline" onClick={() => setActivePage('addProduct')}>
                <FaPlus className='text-blue-600' />
                <span className="text-sm hover:text-indigo-600">Add Products</span>
              </div>
          </details>

          {/* Pubs */}
          <details open>
            <summary className="cursor-pointer flex items-center text-lg font-semibold text-gray-800 hover:text-indigo-600">
              <FaTintSlash className="mr-2" /> Pubs
            </summary>
            <div className="ml-6 mt-2 space-y-2">
              <div className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer" onClick={() => setActivePage('addPub')}>
                <FaPlus />
                <span className="text-sm">Add Pub</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer" onClick={() => setActivePage('viewPubs')}>
                <FaTintSlash />
                <span className="text-sm">All Pubs</span>
              </div>
            </div>
          </details>

          {/* Orders */}
          <details open>
            <summary className="cursor-pointer flex items-center text-lg font-semibold text-gray-800 hover:text-indigo-600">
              <FaShoppingCart className="mr-2" /> Orders
            </summary>
            <div className="ml-6 mt-2 space-y-2 text-sm text-blue-600">
              <button onClick={() => setActivePage('orders')} className="hover:underline">View Orders</button>
            </div>
          </details>

          {/* Users */}
          <details open>
            <summary className="cursor-pointer flex items-center text-lg font-semibold text-gray-800 hover:text-indigo-600">
              <FaUsers className="mr-2" /> Users
            </summary>
            <div className="ml-6 mt-2 space-y-2 text-sm text-blue-600">
              <button onClick={() => setActivePage('users')} className="hover:underline">Manage Users</button>
            </div>
          </details>

        {/* Users */}
           <details open>
            <summary className="cursor-pointer flex items-center text-lg font-semibold text-gray-800 hover:text-indigo-600">
              <FaPeopleArrows className="mr-2" /> Feedback
            </summary>
            <div className="ml-6 mt-2 space-y-2 text-sm text-blue-600">
              <button onClick={() => setActivePage('contact')} className="hover:underline">Feedback/Contacts</button>
            </div>
          </details>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex flex-col items-center ml-auto ">
          <div className="flex flex-col ml-auto items-center justify-center ">
          {renderContent()}
        
          </div>
      </main>
    </div>
  )
}

export default Dashboard

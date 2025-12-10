import './App.css'
import { useState } from 'react'
import data from './data/data'
import NewExpenseForm from './components/NewExpenseForm'
import ExpenseList from './components/ExpenseList'
function App() {
  // POUR FAIRE SWITCHER AJOUT DEPENSE
  const [depenseEdit,setDepenseEdit] = useState(false);
  
  // Pour le tableau dynamique 
  const [datas, setDatas] = useState(data);
  const [newExpense,setNewExpense] = useState("");
  const [newDate,setNewDate] = useState("");
  const [newMontant,setNewMontant] = useState(0);

  return (
    <div className='max-w-2xl mx-auto p-4 md:p-8 min-h-screen '>
      {/* TITRE DE LA PAGE */}
      <h1 className='text-3xl font-extrabold text-center text-gray-800 mb-8'> Expense - Gestionnaire de depense </h1>

      {/* POUR FAIRE APPARAITRE LE FORMULAIRE */}
      <div className='flex justify-center mb-10'>
          <button className="px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300" onClick={()=>setDepenseEdit(true)}>Nouvelle depense</button>
      </div>
      
      
      {/* CONDITION POUR AFFICHER LE FORMULAIRE  */}
      {depenseEdit && (
        <NewExpenseForm datas={datas} setDatas={setDatas} setDepenseEdit={setDepenseEdit} newExpense={newExpense} setNewExpense={setNewExpense} newDate={newDate} setNewDate={setNewDate} newMontant={newMontant} setNewMontant={setNewMontant} />
      )}

      <ExpenseList datas={datas} setDatas={setDatas} />

    </div>
  )
}

export default App

import './App.css'
import { useState } from 'react'
import data from './data/data'
import NewExpenseForm from './components/NewExpenseForm'
import ExpenseList from './components/ExpenseList'
function App() {
  // POUR FAIRE SWITCHER AJOUT DEPENSE
  const [depenseEdit,setDepenseEdit] = useState(false)

  return (
    <>
      <h1> Expense - Gestionnaire de depense </h1>
      <button onClick={()=>setDepenseEdit(true)}>Nouvelle depense</button>
      
      {/* CONDITION POUR AFFICHER LE FORMULAIRE  */}
      {depenseEdit && (
        <NewExpenseForm setDepenseEdit={setDepenseEdit} />
      )}
    </>
  )
}

export default App

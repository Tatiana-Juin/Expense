export default function NewExpenseForm({setDepenseEdit}) {

  const handleSubmit = ()=>{
    console.log("handleSubmit")
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Ajouter une taches</h2>
        
          <form action="" onSubmit={handleSubmit} className="space-y-4">

              {/* NOM DE LA DEPENSE  */}
              <div className="flex flex-col">
                  <label htmlFor="nomExpense" className="mb-1 text-sm font-medium text-gray-700">Nom</label>
                  <input  type="text" name="nomExpense" id="nomExpense" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              

              {/* DATE */}
              <div className="flex flex-col">
                  <label htmlFor="dateExpense" className="mb-1 text-sm font-medium text-gray-700">Date</label>
                  <input type="date" name="dateExpense" id="dateExpense" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              

              {/* MONTANT */}
              <div className="flex flex-col">
                  <label htmlFor="montantDepense" className="mb-1 text-sm font-medium text-gray-700">Montant</label>
                  <input type="number" name="montantDepense" id="montantDepense" step="0.01" min="0.00" className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              
              {/* BOUTON AJOUTER OU ANNULLER  */}
              <div className="flex justify-end space-x-4 pt-4">
                  <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out">Ajouter depense</button>
                  <button type="submit" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" onClick={()=>setDepenseEdit(false)}>Annuler</button>
              </div>
              

          </form>
        </div>
       
    
  )
}

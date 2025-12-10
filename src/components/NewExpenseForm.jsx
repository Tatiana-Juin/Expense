import { useState } from "react";

export default function NewExpenseForm({datas,setDatas,setDepenseEdit,newExpense,setNewExpense,newDate,setNewDate,newMontant,setNewMontant}) {
  
  const [errorMessage,setErrorMessage] = useState("");

  // POUR RECUERER LES VALEUR 


  // FONCTION POUR AJOUTER UNE DEPENSE
  const handleAddExpense = (e)=>{
    e.preventDefault();
    setErrorMessage("");
    
    // VERIFIE QUE LE CHAMPS N'EST PAS VIDE 
    if(newExpense.trim()==""){
      setErrorMessage("Attention il faut remplir le champs c'est obligatoire")
      return;
    }
    
    const formattedDate = new Date(newDate ?? Date.now()).toLocaleDateString("fr-FR");
  
    // NOUVEAU OBJET 
    const newExpenseTab = {
      id : Date.now(),
      nom : newExpense,
      date: formattedDate,
      montant:newMontant
    }

    setDatas([...datas,newExpenseTab]);
    
    setNewExpense("");
    setNewDate("");
    setNewMontant(0)
    setDepenseEdit(false);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Ajouter une dépense</h2>
        
          <form action="post" onSubmit={handleAddExpense} className="space-y-4">

              {/* NOM DE LA DEPENSE  */}
              <div className="flex flex-col">
                  <label htmlFor="nomExpense" className="mb-1 text-sm font-medium text-gray-700">Nom</label>
                  <input  type="text" name="nomExpense" id="nomExpense" value={newExpense} onChange={(e)=>setNewExpense(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              

              {/* DATE */}
              <div className="flex flex-col">
                  <label htmlFor="dateExpense" className="mb-1 text-sm font-medium text-gray-700">Date</label>
                  <input type="date" name="dateExpense" id="dateExpense" value={newDate} onChange={(e)=>setNewDate(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              

              {/* MONTANT */}
              <div className="flex flex-col">
                  <label htmlFor="montantExpense" className="mb-1 text-sm font-medium text-gray-700">Montant</label>
                  <input type="number" name="montantExpense" id="montantExpense" step="0.01" min="0.01" value={newMontant} onChange={(e)=>setNewMontant(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              
              {/* BOUTON AJOUTER OU ANNULLER  */}
              <div className="flex justify-end space-x-4 pt-4">

                  <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out" >Ajouter depense</button>

                  <button type="button" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" onClick={()=>setDepenseEdit(false)}>Annuler</button>
              </div>
               {errorMessage && (
                    <div className="mt-4 bg-red-50 border border-red-100 text-red-500 px-4 py-2 rounded-xl text-center font-medium text-sm">
                        {errorMessage}
                    </div>
                )}

          </form>
        </div>
       
    
  )
}

// import React from 'react'

export default function ExpenseList({datas,setDatas}) {
  // POUR FILTRER ET EMPECHER QUE LA LIGNE AYANT ID NULL SOIT AFFICHER , RECUPERER
  const filteredDatas = datas.filter(dataExpense => dataExpense.id !== null);
  
  // Pour calculer le total des depense. On utilise parseFloat() pour convertir la chaine de caractere en float
  const expenseTotal = filteredDatas.reduce((total,expense)=>{
    return total + parseFloat(expense.montant || 0)
  },0)


  return (
    <>
      <div className="shadow-lg rounded-xl overflow-hidden bg-white mt-8">
        {/* TABLEAU POUR AFFICHER LES VALEURS  */}
        <table className="min-w-full divide-y divide-gray-200">
          
          <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom de la dépense
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Montant (€)
                </th>
              </tr>
          </thead>
          <tbody>
            {filteredDatas.map((dataExpense) =>(

              <tr key={dataExpense.id} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> {dataExpense.nom} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> {dataExpense.date} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-semibold" > {dataExpense.montant}  </td>
              </tr>
            ) )}
          </tbody>
        
        </table>
        
      </div>
      <div className="flex justify-end mt-4 px-6">
        <h2 className="text-lg font-extrabold text-gray-800  p-3 rounded-lg shadow-md">
          Total : <span className="text-blue-700 ml-2">{parseFloat(expenseTotal)} €</span>
        </h2>
      </div>

    </>
  )
}

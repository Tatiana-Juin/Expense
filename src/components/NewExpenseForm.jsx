import React from 'react'


export default function NewExpenseForm({setDepenseEdit}) {
  return (
    <>
        <h2>Ajouter une taches</h2>
        <div>
          <form action="">
              {/* nom de la depense  */}
              <label htmlFor="nomExpense">Nom</label>
              <input type="text" name="nomExpense" id="" />

              {/* date */}
              <label htmlFor="
              dateExpense">Date</label>
              <input type="date" name="dateExpense" id="" />

              {/* Montant */}
              <label htmlFor="montantDepense">Montant</label>
              <input type="number" name="montantDepense" id="" />
              <div>
                  <button >Ajouter depense</button>
                  <button onClick={()=>setDepenseEdit(false)}>Annuler</button>
              </div>
              

          </form>
        </div>
       
    </>
  )
}

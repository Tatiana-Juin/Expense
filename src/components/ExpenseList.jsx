// import React from 'react'

export default function ExpenseList({datas,setDatas}) {
  return (
    <div>
      
      {datas.map((dataExpense) =>(
        <ul key={dataExpense.id}>
          <li > {dataExpense.nom} </li>
          <li> {dataExpense.date} </li>
          <li> {dataExpense.montant} </li>
        </ul>
      ) )}
      
    </div>
  )
}

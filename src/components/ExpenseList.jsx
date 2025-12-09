// import React from 'react'

export default function ExpenseList({datas,setDatas}) {
  return (
    <div>
      <ul>
      {datas.map((dataExpense) =>(
        
          <li key={dataExpense.id}> {dataExpense.nom} </li>
        
      ) )}
      </ul>
    </div>
  )
}

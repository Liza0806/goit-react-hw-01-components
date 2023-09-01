import {TransactionItem } from './TransactionItem'
import {
  Table,
TableHeader,
TableHeaderCell,
TableBody,
TableRow,
}
from './Transaction.styled'

export const TransactionHistory = ({transactions}) =>{
    return(
        <Table className="transaction-history">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Currency</TableHeaderCell>
          </TableRow>
        </TableHeader>
     
        <TableBody>
{ transactions.map(el =>( 
          <TransactionItem 
           key= {el.id}
           type= {el.type}
           amount ={el.amount}
           currency = {el.currency}
           />
          
 ))}
        </TableBody>
      </Table>  
    )
}


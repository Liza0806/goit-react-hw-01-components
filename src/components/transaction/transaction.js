import PropTypes from 'prop-types';
import {
  Table,
TableHeader,
TableHeaderCell,
TableBody,
TableRow,
TableCell
}
from './transaction.styled'

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
          <TableRow key={el.id}>
            <TableCell>{el.type}</TableCell>
            <TableCell>{el.amount}</TableCell>
            <TableCell>{el.currency}</TableCell>
          </TableRow>
          
 ))}
        </TableBody>
      </Table>  
    )
}

TransactionHistory.propTypes ={
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  id: PropTypes.string,
}
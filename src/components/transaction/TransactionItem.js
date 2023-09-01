import PropTypes from 'prop-types';
import {
TableRow,
TableCell
}
from './Transaction.styled'

export const TransactionItem = ({id, type, amount, currency}) => {
  return ( 
          <TableRow key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableRow>
          
  )
      
}

TransactionItem .propTypes ={
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  id: PropTypes.string,
}
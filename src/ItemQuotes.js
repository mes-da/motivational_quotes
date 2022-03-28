import React from 'react'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
 
  const ItemQuotes =({text ,author})=>{
      return(
        <div> <Item>{text}</Item> <p>Author:{author}</p> </div>
      )
  }



export default ItemQuotes
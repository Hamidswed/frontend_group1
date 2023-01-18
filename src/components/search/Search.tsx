import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';

  type PropType = {
    userInput: string;
    setUserInput: React.Dispatch<React.SetStateAction<string>>;
  };
  
  const Search = ({ userInput, setUserInput }: PropType) => {
    const dispatch = useDispatch();
    const countriesList = useSelector(
      (state: RootState) => state.product.products
    );
  
  return (
    <Box
    component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  )
}
export default Search

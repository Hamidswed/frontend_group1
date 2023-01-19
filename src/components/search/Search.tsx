import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
type PropType = {
  userInput: string
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
};
const Search = ({ userInput, setUserInput }: PropType) => {
   const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };
  return (  
 <Box
 component="form"
   sx={{
     '& > :not(style)': { m: 1, width: '150px' },
   }}
   noValidate
   autoComplete="off"
 >
       <TextField
        id="standard-basic"
        label="Search Products"
        variant="standard"
        value={userInput}
        onChange={inputHandler}
        type="search"/> 
 </Box>
  );
};

export default Search;

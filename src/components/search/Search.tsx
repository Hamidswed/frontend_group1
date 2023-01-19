import TextField from "@mui/material/TextField";

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
    <div>
       <TextField
        id="standard-basic"
        label="Search Products"
        variant="standard"
        value={userInput}
        onChange={inputHandler}
        type="search"/> 
     
    </div>
  );
};

export default Search;


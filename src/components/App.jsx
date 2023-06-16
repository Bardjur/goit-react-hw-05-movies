import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MagnifyingGlass } from  'react-loader-spinner'
import { Wrapper, Title2 } from "./App.styled";


const App = () => {

  return (
    <Wrapper>

      <ToastContainer autoClose={3000}/>
    </Wrapper>
  );
};

export default App

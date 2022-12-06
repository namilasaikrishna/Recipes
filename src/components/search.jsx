import React,{useState} from 'react'
import styled from "styled-components"
import{FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {

    const[input,setInput] = useState('')
    const navigate = useNavigate()

    const onChangeHandler = (e) =>{
        e.preventDefault()
        setInput(e.target.value)
        navigate('/searched/'+input)
    }

  return (
    <FormStyle>
    <FaSearch/>
    <input type='text' onChange={onChangeHandler} value={input}/>
    </FormStyle>
  )
}

const FormStyle = styled.form`
margin:1rem 18rem;
position:relative;
width:100%;
input{
    border:none;
    background:linear-gradient(35deg,#494949,#313131);
    font-size:1.5rem;
    color:white;
    padding:0.5rem 3rem;
    border:none;
    border-radius:1rem;
    outline:none;
}
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(100%,-50%);
    color:white;
}
`

export default Search

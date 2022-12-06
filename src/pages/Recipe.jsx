import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {useParams} from "react-router-dom"

function Recipe() {
const [show,setShow] = useState({})
  const REACT_API_KEY = '6d86df0659a1410f8c3ed730a8689706'

  const params = useParams({})

  const fetchDetails = async() =>{
    const response = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${REACT_API_KEY}`)
    const dataResults = await response.json()
    setShow(dataResults)
  }

  useEffect(()=>{fetchDetails()},[params.name])

  return (
    <DetailWrapper>
    <div>
    <h2>{show.title}</h2>
    <img src={show.image} alt=""/>
    </div>
    <Info>
    <Button>Instruction</Button>
    <Button>Ingredients</Button>
    </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;
.active{
  background:linear-gradient(35deg,#494949,#313131);
  color:white;
}
h2{
  margin-bottom:2rem;
}
li{
  font-size:1.2rem;
  line-height:2.5rem;
}
ul{
  margin-top:2rem;
}
`

const Button = styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
`
const Info = styled.div`
margin-left:10rem;
`

export default Recipe

import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link,useParams} from 'react-router-dom'

function Cuisine() {
  const REACT_API_KEY = '6d86df0659a1410f8c3ed730a8689706'
  const[cousine,setCousine] = useState([])

  let params = useParams()

  const getCousines = async(name) =>{
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_API_KEY}&cuisine=${name}`)
    const data = await response.json()
    setCousine(data.results)
  }

  useEffect(()=>{getCousines(params.type)},[params.type])
  
  return (
    <Grid>
    {cousine.map((item)=>{
      return(
        <Card key={item.id}>
        <img src={item.image} alt=""/>
        <h4>{item.title}</h4>
        </Card>
      )
    })}
    </Grid>
  )
}

const Grid = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(10rem,1fr));
grid-gap:3rem;
`
const Card = styled.div`
img{
  width:100%;
  border-radius:2rem;
}
a{
  text-decoration:none;
}
p{
  text-align:center;
  padding:1rem;
}
`

export default Cuisine

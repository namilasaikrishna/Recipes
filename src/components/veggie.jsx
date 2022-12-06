import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {Splide,SplideSlide} from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css';

function Veggie() {
  const REACT_API_KEY = '6d86df0659a1410f8c3ed730a8689706'
  const[veggie,setVeggie] = useState([])
   useEffect(()=>{getPopular()},[])

   const getPopular = async () =>{
       const check = localStorage.getItem('veggie')

       if(check){
           setVeggie(JSON.parse(check))
       }
       else{
           const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${REACT_API_KEY}&number=9&tags=vegetarian`)
           const data =await response.json()
           localStorage.setItem("veggie",JSON.stringify(data.recipes))
           setVeggie(data.recipes)
           
       }
       
   }


 return (
   
           <Wrapper>
           <h3>veggie popular picks</h3>
           <Splide options={
               {
                   perPage:3,
                   Arrow:false,
                   pagination:false,
                   drag:'free',
                   gap:'5rem'


               }
           }>
           {veggie.map((recipe)=>{
               return(
                   <SplideSlide key={recipe.id}>
                   <Card key={recipe.id}>
                   <p>{recipe.title}</p>
                   <img src={recipe.image} alt="recipes"/>
                   <Gradient/>
                   </Card>
                   </SplideSlide>
               )
           })}
           </Splide>
           </Wrapper>
       )
}

const Wrapper = styled.div`
margin:4rem 0 rem;
`
const Card = styled.div`
min-heigth:25rem;
border-radius:2rem;
overflow:hidden;
position:relative;

img{
    border-radius:2rem;
   
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0;
    transform: translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:12px;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
}
`
const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`


export default Veggie

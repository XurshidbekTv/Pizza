import './App.css';
import React from 'react';
const pizzaData=[
  {
    name:'Focaccia',
    ingredients:"Bred whith italian olive oil end rosemary",
    pirce:13,
    photoName:"img/focaccia.jpg",
    soldOut:false
  },
  {
    name:'Funghi',
    ingredients:"Bred whith italian olive oil end rosemary",
    pirce:14,
    photoName:"img/funghi.jpg",
    soldOut:false
  },
  {
    name:'Margherita',
    ingredients:"Bred whith italian olive oil end rosemary",
    pirce:11,
    photoName:"img/margherita.jpg",
    soldOut:false
  },
  {
    name:'Prosciutto',
    ingredients:"Bred whith italian olive oil end rosemary",
    pirce:9,
    photoName:"img/prosciutto.jpg",
    soldOut:false
  },
  {
    name:'Salamino',
    ingredients:"Bred whith italian olive oil end rosemary",
    pirce:8,
    photoName:"img/salamino.jpg",
    soldOut:false
  },
  {
    name:'Spinaci',
    ingredients:"Bred whith italian olive oil end rosemary",
    pirce:6,
    photoName:"img/spinaci.jpg",
    soldOut:true
  }
]

function App() {
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}


function Header(){
  const style={}
  return(
    <h1 style={style}>Fast React Pizza Co.</h1>
  )
}
function Menu(){
  const pizzas=pizzaData;
  const numPizzas=pizzas.length;
  return(
    <div className='menu'>
      <h2>Our menu</h2>
    {numPizzas>0 ? (<>
    <p>Authentic Italian cunisene. 6 creativ dishes to chose from . All from our stone oven all orgenic, all delicous</p>
      <ul className='pizzas'>      
      {pizzas.map((item)=>(<Pizza pizza={item} key={item.name}/>))}
    </ul>
    </>) : (<p>We're still working on our menu. Please come back later :)</p>)}
    </div>
  )
}
function Footer(){
  const hour= new Date().getHours();
  const openHour =8;
  const closeHour=22;
  const isOpen = hour>=openHour && hour<=closeHour;
  console.log(isOpen)
  // if(hour >= openHour && hour <= closeHour) alert(" We're currently open!");
  // else alert("Sorry we're closed");

  return(
    <footer className='footer'>
    
      {isOpen ? ( <Order openHour={openHour} closeHour={closeHour}/>):(<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>)}
    </footer>
  )
}
function Order({closeHour, openHour}){
  return(
    <div className='order'>
          <p>
            We're open  {openHour}:00 to {closeHour}:00 Come visit us or order
          </p>
          <button className='btn'>Order</button>
    </div>
  )
}
function Pizza({pizza}){
  // if(pizza.soldOut) return null;
  return(
    <li className={`pizza d-flex flex-wrap ${pizza.soldOut ? "sold-out":''}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <p className='p-3 bg-body-secondary border-2 rounded'>{pizza.name}</p>
      <p className='p-3 border-bottom'>{pizza.ingredients}</p>
      
      {
        pizza.soldOut ?(<span className='px-3 rounded bg-danger'>SOLD OUT</span>):(<span className='px-5 border-2 bg-info rounded'>{pizza.pirce}</span>)
      }
    </li>
  )
}
export default App;

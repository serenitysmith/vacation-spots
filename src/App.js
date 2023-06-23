import Header from './components/Header/header'

import Cards from './components/Cards/cards'
import { vacationSpots } from './data';

import './App.css';
export default App;

function App() {
const vaca = vacationSpots.map(item => {
return (
  <Cards
  key={item.idx}
  
  {...item}/>
)
})
 
  return (
    <div>
         <Header />
<section className='vacation-spots'>{vaca}</section>
    </div>
  )

  }



  // export default function BlogList(props) {
  //   return (
  //     props.data.map((val, idx) => {
  //         return <BlogPost key={idx} {...val}></BlogPost>
  //     })
  //   )
  // }
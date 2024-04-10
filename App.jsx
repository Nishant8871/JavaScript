import Food from "./Food";
import Footer from "./Footer";
import Header from "./Header";
import Card from './Card.jsx';
import Card1 from './Card1.jsx'
import Condprops from "./Condprops.jsx";
import List from "./List.jsx";
import Click from './Click.jsx'
import Use from './Use'
import MyComponent from './MyComponent'
import ColorPicker from './ColorPicker'

function App(){
    const fruits=[{id:1,name:"apple",calories:95},
                  {id:2,name:"orange",calories:45},
                  {id:3,name:"banana",calories:105},
                  {id:4,name:"coconut",calories:159},
                  {id:5,name:"pineapple",calories:37}
                ]
    const vegatable=[ {id:1,name:"potatoes",calories:110},
                      {id:2,name:"celery",calories:15},
                      {id:3,name:"carrots",calories:25},
                      {id:4,name:"corn",calories:63},
                      {id:5,name:"broccoli",calories:50}
                    ]
  
  return(
    <>
     <Header/>
    <Food/>
    <Footer/>
    <Card name="nishanth" about="This is a page"/>
    <Card /> 
    <Condprops isLoggedIn={true} username="nishanth"/>
    <Condprops isLoggedIn={false}/>
    <List category="fruits" items={fruits}/>
    <Click/>
    <Use/>
    <MyComponent/>
    <ColorPicker/>
    {/* <Card1 name={12} about="djbj" /> */}
    
    </>
  )
}

export default App;
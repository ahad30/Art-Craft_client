import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyListItems = () => {
const {user} = useContext(AuthContext)
const [items , setItems] = useState([]);

useEffect(() => {
   fetch(`http://localhost:5000/artCraft/${user?.email}`)
   .then((response) => response.json())
   .then((data) => {
        console.log(data)
  })

  
}, []);



  return (
    <div>MyListItems</div>
  )
}

export default MyListItems;
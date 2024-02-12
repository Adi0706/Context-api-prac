import React from 'react' ; 
import Context from '../Context/Context';


const UserProviderContext = ({children})=>{

const [cart , setCart] = React.useState([]) ; // setting particular values for accessing ...
//and modifyiing the state of cart in other components ...

    return(
        <UserProviderContext.Provider value={{cart,setCart}}>
            {children}
        </UserProviderContext.Provider>
    ) // genereic way to provide child components as it is from the other components 

}


export default UserProviderContext;
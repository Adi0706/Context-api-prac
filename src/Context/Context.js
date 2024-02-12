import React from "react" ; 

//context or global variable ( in a way )


const NewContext = createContext() ; // or React.createContext() ;
//once we wrap our components with this NewContext --> the NewContext becomes an provider



export default NewContext;
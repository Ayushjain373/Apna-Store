import { useContext, useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useProduct } from "./Productcontext";

import reducer from "../Reducer/FilterReducer";
 const FilterContext = createContext();

 const initialState = {

    filter_products: [],
    all_products:[],
    grid_view: true,
    list_view: false,
    sorting_value:"lowest",
    filters:{
        text:"",
        category:"all",
        company:"all",
        colors:"all",
        maxPrice:0,
        price:0,
        minPrice:0,

    }
 };

const FilterContextProvider = ({children}) =>{

    const {products} = useProduct()


    const [state,dispatch] = useReducer(reducer, initialState)


     
    useEffect(()=>{

        dispatch({type:"Load_Filter_Products",payload:products})

    },[products])


    const removeFilter = ()=>{

        console.log("click")

        dispatch({type:"CLEAR_FILTERS"})
     }

    ///// to set the grid view //////
    const setGridView = (ans)=>{

        return dispatch({type: "Set_GridView"})
    }
    const setListView = ()=>{

        return dispatch({type: "Set_ListView"})
    }

    ////sorting////
    const sorting = (e)=>{

        let userValue = e.target.value;

        dispatch({type:"Get_Sort_Value",payload: userValue})
       



    }

    

    //// search functionality/////

    const updateFilter = (e)=>{

        let name = e.target.name;
        let value = e.target.value;

      



        dispatch({type:"updateFilterValue",payload:{name,value}})

    }


     /// to clear filter

   
    useEffect(()=>{

        dispatch({type:"update_Filters"})

        dispatch({type:"Sorting_Products"})
        

    },[state.sorting_value,state.filters])

    return (
    <FilterContext.Provider value={{...state, setGridView,setListView,sorting, updateFilter,removeFilter}}>{children}</FilterContext.Provider>
    );

}




 const useFilterContext = ()=>{
    return useContext(FilterContext)
}

 

export  {FilterContext , FilterContextProvider, useFilterContext}
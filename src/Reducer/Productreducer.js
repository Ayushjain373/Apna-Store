import React from 'react'

const Productreducer = (state,action) => {


    switch(action.type)
    {
        case "Set_Loading":
           return{
            ...state,
            isLoading:true,

           }
        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        case "Set_Api_Data":
            const featureData = action.payload.filter((ele)=>{

                return ele.featured===true;

            });

            return {
                ...state,
                isLoading:false,
                isError:false,
                products: action.payload,
                featureproducts: featureData
            }
        case "setSingle_loading":
            return{
                ...state,
                isSingleLoading:true,
            }
        case "Set_Single_Product":
            return{
                ...state,
                isSingleLoading:false,
                singleProduct: action.payload,
            }
        case "Setsingle_error":
            return{
                ...state,
                isSingleLoading:false,
                isError:true,
            }

        default:
            return state;

    }
  
}

export default Productreducer
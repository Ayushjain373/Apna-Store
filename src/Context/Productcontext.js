import { useContext, useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import axios from "axios";
import reducer from "../Reducer/Productreducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureproducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

/// create  amazon
// provider jaise deleivery banda cahiye jo order dege
//consumer  item jo verify krke lege scan krke
/// we use contextAPI

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // dispatch- aagar kuch kaam krwana ho toh dispatch ko bolege ye kaam krake do and dispatch ke pass 2 boy wo unse kaam krwake dega ye kaam action and method karega

  const getProducts = async (url) => {
    dispatch({ type: "Set_Loading" });

    try {
      const res = await axios.get(url);

      const products = await res.data;

      dispatch({ type: "Set_Api_Data", payload: products });
    } catch (error) {
      dispatch({ type: "API_Error" });
    }
  };

  ///// 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "setSingle_loading" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;

      console.log(singleProduct)

      dispatch({ type: "Set_Single_Product", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "Setsingle_error" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  // is function ke  aandar consumer and provider hoga

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  ); // value hmara product hai jo deliever krega hmara product jha bhi call hoga
}; /// CHILD yha app components

//// custom hook bna rhe hai because every jagah hme usecontext import krna apd rha hai

const useProduct = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProduct };

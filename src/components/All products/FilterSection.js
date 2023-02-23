import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../../Context/Filter_Context';
import {BsCheck} from "react-icons/bs"
import FormatPrice from '../FormatPrice';
import {Button} from "../../styles/Button"
const FilterSection = () => {


   const getUniqueData=(data,property)=>{

    let new_val = data.map((curele)=>{


      /// aase bhi kr skte hai but hmmne same function ki need category and company and co,lors ke liye chaiye toh hm 3 baar function nhi likhege 
      // to isliye dusra method use krege
      //  return curele.category;

      //old method
      ///  ye string given hai isliye bracket lagaya hai


      // new method
      return curele[property]; /// array me string pass kri hai
    });
     
    if(property==="colors")
    {
      return (new_val  = ["all",... new Set([].concat(...new_val))])

       /// or we can use here flat method 

      //  new_val = new_val.flat();
      // and ye 2d array 1 d array me ho jaayga and fir set me daldege and duplicate remove ho jaayge

      }else{

      return (new_val = ["all",...new Set(new_val)])
    }

   

    
   }
  const {filters:{text,colors,category,maxPrice,price,minPrice,removeFilter},updateFilter,all_products} = useFilterContext()

  const categoryOnlyData = getUniqueData(all_products,"category")
  const companyData = getUniqueData(all_products,"company")
  const colorData = getUniqueData(all_products,"colors")

 


  return (
   <>
     <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e)=>e.preventDefault()}>

          <input type="text" name='text' value={text} onChange={updateFilter} placeholder="Seacrh"/>
        </form>


      </div>

      <div className="filter-category">
        <h3>Category</h3>

        <div>{categoryOnlyData.map((curele,index)=>{
          
          return <button key={index} type="button" name="category"    className={curele === category ? "active" : ""} value={curele} onClick={updateFilter}>
          {curele}
            
          </button>


        })}</div>

      </div>

      <div className="fiter-company">
        <h3>Company</h3>
        <form action="">
          <select name="company" id="company" className='filter-company--select' onClick={updateFilter}>

            {companyData.map((ele,id)=>{

               return (
                 
                <option value={ele} key={id} name="company">{ele}</option>
               );

            })}
          </select>
        </form>
      </div>


      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
           {
             colorData.map((curCol,ind)=>{

              if(curCol==="all")
              {
                return (
                  
                  <button key={ind}  type="button" name="colors" value={curCol} className='color-all--style'  onClick={updateFilter}>All</button>
                 )
              }
               
               return (
                  
                <button key={ind}  type="button" name="colors" value={curCol} className={colors===curCol?"btnStyle active":"btnStyle"} style={{
                  backgroundColor:curCol
                }} onClick={updateFilter}>{colors===curCol? <BsCheck className='checkstyle'/>:null}</button>
               )
             })
           }
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p><FormatPrice price={price}/></p>

         
         <input  type="range" name="price" min={minPrice} max = {maxPrice} value={price}  onChange={updateFilter} />
         
      </div>


      <div className="filter-clear">
        <Button className='btn' onClick={removeFilter}>Clear Filter</Button>
      </div>
     </Wrapper>
   </>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkstyle{
    font-size: 2rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection
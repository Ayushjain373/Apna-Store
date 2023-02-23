import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../Context/Filter_Context";
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import Sort from "./Sort";

const Products = () => {

  const {filter_products} = useFilterContext();


  return <Wrapper>

    <div className="container grid grid-filter-column">
      <div>
        <FilterSection/>
      </div>

      <section className="product-view--sort">

        <div className="sort-filters">
          <Sort/>
        </div>

        <div className="main-products">
          <ProductList/>
        </div>
      </section>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;

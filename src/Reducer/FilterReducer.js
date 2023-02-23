const FilterReducer = (state, action) => {
  switch (action.type) {
    case "Load_Filter_Products":
      let priceArray = action.payload.map((curele) => {
        return curele.price;
      });

      // const maxPrice = Math.max.apply(null,priceArray)

      const maxPrice = priceArray.reduce(
        (initalvalue, curElem) => Math.max(initalvalue, curElem),
        0
      );
     
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          price: maxPrice,
        },
      };
    case "Set_GridView":
      return {
        ...state,
        grid_view: true,
        list_view: false,
      };
    case "Set_ListView":
      return {
        ...state,
        grid_view: false,
        list_view: true,
      };
    case "Get_Sort_Value":
      // let userValue = document.getElementById("sort");
      // let sort_value = userValue.options[userValue.selectedIndex].value;
      // console.log(sort_value)
      return {
        ...state,
        sorting_value: action.payload,
      };
    case "Sorting_Products":
      let newSortData;

      const { filter_products } = state;
      let tempSortProduct = [...filter_products];

      const sortingProds = (a, b) => {
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }

        if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProds);
      return {
        ...state,
        filter_products: newSortData,
      };
    case "updateFilterValue":
      const { name, value } = action.payload;

    

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "update_Filters":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, colors, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category === category
        );
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (colors !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(colors)
        );
      }

      if (price) {
        tempFilterProduct = tempFilterProduct.filter((curele) => {
          return curele.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    case "CLEAR_FILTERS":
    
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          colors: "all",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      };

    default:
      return {...state};
  }
};

export default FilterReducer;

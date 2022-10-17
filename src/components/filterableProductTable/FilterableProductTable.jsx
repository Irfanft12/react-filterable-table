import { useState } from 'react';
import SearchBar from "../searchBar/SearchBar"
import ProductTable from "../productTable/ProductTable"

import "./filterableProductTable.css"

export default function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
  
    return (
      <>
        <SearchBar
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly} />
          <hr />
        <ProductTable 
          products={products} 
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </>
    );
  }
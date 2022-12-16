import ProductForm from './components/ProductForm';
import Products from './components/Products';

const App = () => {
  return <>
    <ProductForm />
    <table width={"100%;"}>
    <tr width={"100%;"}style={{backgroundColor:"#581845", textAlign:"center"}} >
        <td width={"20%;"}  >
          <h3>NAME</h3>
        </td>
        <td width={"15%;"} >
          <p>Description</p>
        </td>
        <td width={"10%;"}>
          <p>Brand</p>
        </td>
        <td width={"5%;"}>
          <p>Price</p>
        </td>
        <td width={"5%;"}>
          <p>Stock</p>
        </td>
        <td width={"40%;"}>
            Actions
        </td>
        
      </tr>
    </table>
    <Products />
    
  </>;
}

export default App

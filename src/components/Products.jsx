import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, getProducts, updateProduct } from "../api/productsApi";

const Products = () => {
  const {
    isLoading,
    data: products,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: (data) => data.sort((a, b) => b.id - a.id),
  });
  const queryClient = useQueryClient();

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>{error.message}</div>;
  
  return products.map((product) => (
    
      
    <div key={product.id} style={{textAlign:"center"}} >
      <tr>
        <td width={"20%;"} style={{backgroundColor:"#C70039"}}>
          <h3>{product.name}</h3>
        </td>
        <td width={"15%;"} style={{backgroundColor:"#900C3F"}}>
          <p>{product.description}</p>
        </td>
        <td width={"10%;"} style={{backgroundColor:"#C70039"}} >
          <p>{product.brand}</p>
        </td>
        <td width={"5%;"} style={{backgroundColor:"#900C3F"}}>
          <p>{product.price}</p>
        </td>
        <td width={"5%;"} style={{backgroundColor:"#C70039"}}>
          <p>{product.stock}</p>
        </td>
        <td width={"15%;"} style={{backgroundColor:"#900C3F"}}>
          <button style={{width:"100%"}}
          onClick={() => {
            editProductMutation.mutate(product.id);
          }}
          >
            Edit
            </button>
        </td>
        <td width={"15%;"} style={{backgroundColor:"#C70039"}}>
          <button style={{width:"100%"}} 
          onClick={() => {
            deleteProductMutation.mutate(product.id);
          }} 
          >
            Delete
            </button>
        </td>
        <td width={"10%;"} style={{backgroundColor:"#900C3F"}}>
            <input
            type="checkbox"
            checked={product.inStock}
            id={product.id}
            onChange={(e) => {
              console.log({
                ...product,
                inStock: e.target.checked,
              });
              updateProductMutation.mutate({
                ...product,
                inStock: e.target.checked,
              });
            }}
          />
          <label htmlFor={product.id}>In Stock</label>
        </td>
        
      </tr>
    </div>
    
  ));
  
};

export default Products;

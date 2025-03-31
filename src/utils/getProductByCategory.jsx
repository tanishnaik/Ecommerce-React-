export const getProductByCategory=(products,category)=>{
    return category.toLowerCase() === "all" ?products :products.filter(
        (product) =>
          product.category.name.toLowerCase() === category.toLowerCase()
      );
}
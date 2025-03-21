export const getTotalCartAmount=(cart)=>{
    cart?.lenght>0 && cart.reduce((acc,curr)=>acc +curr.price,0);
}
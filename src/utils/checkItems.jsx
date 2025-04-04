export const checkitems = (whishlist, id) => {
  return (
    whishlist?.length > 0 &&
    whishlist.some((checkWishlist) => checkWishlist.id === id)
  );
};

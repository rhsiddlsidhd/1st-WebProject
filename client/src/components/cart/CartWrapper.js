import CartList from "./CartList";
import Purchase from "./Purchase";

const CartWrapper = ({
  handleDeleteItem,
  setIsAllChecked,
  savedItem,
  setSavedItem,
  selectedItems,
  setSelectedItems,
}) => {
  return (
    <div className="body__div--cart-div-content-flex">
      <CartList
        savedItem={savedItem}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        setSavedItem={setSavedItem}
        setIsAllChecked={setIsAllChecked}
        handleDeleteItem={handleDeleteItem}
      />
      <Purchase savedItem={savedItem} />
    </div>
  );
};

export default CartWrapper;

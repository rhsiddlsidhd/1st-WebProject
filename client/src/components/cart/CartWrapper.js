import CartList from "./CartList";
import Purchase from "./Purchase";

const CartWrapper = ({
  totalPrice,
  handleDeleteItem,
  setIsAllChecked,
  savedItem,
  setSavedItem,
  selectedItems,
  setSelectedItems,
  totalPaymentAmount,
  deliveryFee,
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
      <Purchase
        savedItem={savedItem}
        totalPrice={totalPrice}
        totalPaymentAmount={totalPaymentAmount}
        deliveryFee={deliveryFee}
        selectedItems={selectedItems}
      />
    </div>
  );
};

export default CartWrapper;

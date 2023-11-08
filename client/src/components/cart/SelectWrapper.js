const SelectWrapper = ({
  savedItem,
  isAllChecked,
  selectedItems,
  setIsAllChecked,
  setSelectedItems,
}) => {
  // 전체 선택
  const handleAllChecked = (isChecked) => {
    if (isChecked) {
      setSelectedItems(savedItem.map((item) => item.id));
    } else {
      const allDeselected =
        selectedItems.length === savedItem.length &&
        !savedItem.every((item) => selectedItems.includes(item.id));
      if (!allDeselected) {
        setSelectedItems([]);
      }
    }
    setIsAllChecked(isChecked);
  };

  return (
    <div className="div__div--select-display">
      <label className="checkbox-container" for="checkbox-all">
        <input
          type="checkbox"
          className="cart-checkbox"
          id="check-all"
          checked={isAllChecked}
          onChange={(e) => handleAllChecked(e.target.checked)}
        />
        <span className="checkmark">
          <i className="fa-solid fa-check"></i>
        </span>
      </label>
      <p className="div__p--select-all-text">전체선택</p>
      <button className="div__button--select-delete-button">선택삭제</button>
    </div>
  );
};

export default SelectWrapper;

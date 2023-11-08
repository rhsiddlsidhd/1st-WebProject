// function Checkbox({ children, disabled, checked, onChange }) {
//   return (
//     <label>
//       <input
//         type='checkbox'
//         disabled={disabled}
//         checked={checked}
//         onChange={({ target: { checked } }) => onChange(checked)}
//       />
//       {children}
//     </label>
//   );
// }

// export default Checkbox;

const CheckBox = ({ category, handleCheckboxChange, selectedCategories }) => {
  return (
    <div>
      {category.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type='checkbox'
              value={item.id}
              onChange={handleCheckboxChange}
              checked={selectedCategories.includes(item.id)}
            />
            {item.name}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default CheckBox;

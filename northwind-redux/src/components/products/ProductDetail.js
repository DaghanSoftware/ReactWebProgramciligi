import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";
const ProductDetail = ({categories, product, onSave, onChange}) => {
  return (
    <div>
      <form onSubmit={onSave}>
        <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
        <TextInput
          name="ProductName"
          label="Product Name"
          value={product.ProductName}
          onchange={onChange}
          error="hata"
        ></TextInput>

        <SelectInput
          name="categoryId"
          label="Category"
          value={product.categoryId || ""}
          defaultOption="Seçiniz"
          options={categories.map((category) => ({
            value: category.CategoryID,
            text: category.CategoryName,
          }))}
          onChange={onChange}
          error="Hata"
        ></SelectInput>

        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
};
export default ProductDetail;

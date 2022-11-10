import React from "react";
import TextInput from "../toolbox/TextInput";

const ProductDetail = (categories, product, onSave, onChange) => {
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

        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
};
export default ProductDetail;

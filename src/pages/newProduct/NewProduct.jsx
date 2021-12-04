import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nuevo Producto</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Nombre</label>
          <input type="text" placeholder="Ingrese el nombre del producto" />
        </div>
        <div className="addProductItem">
          <label>Disponibles</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Tamaño</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Estado</label>
          <select name="active" id="active">
            <option value="yes">Activo</option>
            <option value="no">Inactivo</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Imagen</label>
          <input type="file" id="file" />
        </div>
        <button className="addProductButton">Crear</button>
      </form>
    </div>
  );
}

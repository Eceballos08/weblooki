import "./ofertarCita.css";

export default function OfertarCita() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Ofertar Cita</h1>
      <form className="newUserForm">
      <div className="newUserItem">
          <label>Nombre de la cita</label>
          <input type="text" placeholder="Ingrese una breve descripción de la cita" />
        </div>
        <div className="newUserItem">
          <label>Tipo de cita</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Keratina</option>
            <option value="no">Cirugía capilar</option>
            <option value="yes">Hidratación</option>
            <option value="no">Botox capilar</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Descripción</label>
          <input type="text" placeholder="Ingrese una desripción detallada de la cita que se va a ofertar" />
        </div>
        <div className="newUserItem">
          <label>Precio</label>
          <input type="text" placeholder="$00.000" />
        </div>
        <button className="newUserButton">Crear cita</button>
      </form>
    </div>
  );
}

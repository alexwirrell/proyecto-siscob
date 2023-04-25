class cecoService {
  constructor() {
    // Definir la URL base de la API RESTful creada con PostgREST
    this.API_BASE_URL = "http://localhost:3000";
    this.headers = {
      'Content-Type': 'application/json',
      'Prefer': 'return=representation' //Para que PostgREST devuelva la representación completa del objeto creado en la respuesta.
    }
  }

  // Función para obtener la lista de registros (READ)
  async obtenerRegistros() {
    const response = await fetch(`${this.API_BASE_URL}/centrocosto`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    const registroArray = await response.json();
    return registroArray;
  }

  // Función para crear un nuevo registro
  async crearRegistro(registro) {
    const response = await fetch(`${this.API_BASE_URL}/centrocosto`, {
      method: 'POST',
      body: JSON.stringify(registro),
      headers: this.headers
    });
    const registroCreado = await response.json();
    return registroCreado;
  }

  // Función para actualizar los datos de un registro existente
  async actualizarRegistro(id, registro) {
    //Ejemplo: http://localhost:3000/centrocosto?cc_cod=eq.0002
    const response = await fetch(`${this.API_BASE_URL}/centrocosto?cc_cod=eq.${id}`, {
      method: 'PATCH',
      body: JSON.stringify(registro),
      headers: this.headers
    });
    const registroActualizado = await response.json();
    return registroActualizado;
  }
  
  // Función para eliminar un registro existente
  async eliminarRegistro(delRegistros) {
    //Ejemplo: http://localhost:3000/centrocosto?cc_cod=in.(0030,0022,0021)
    const response = await fetch(`${this.API_BASE_URL}/centrocosto?cc_cod=in.(${delRegistros})`, {
      method: 'DELETE',
      headers: this.headers
    });
    const resultado = await response.json();
    return resultado;
  }
}

export { cecoService };

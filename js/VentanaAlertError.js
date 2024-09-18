function showAlert() {
    // Crea una alerta Bootstrap centrada con un ancho de 400px
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show alert-custom';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
      <h4 class="alert-heading">¡Error!</h4>
      <p class="alert-body">El usuario o contraseña no son correctos!!!. Vuelve a intentar.</p>
      <hr>
      <button type="button" class="btn btn-primary" onclick="closeAlert()">OK</button>
    `;
    
    // Agrega la alerta al contenedor especificado
    var alertContainer = document.getElementById('alert-container');
    alertContainer.appendChild(alertDiv);
  }
  
  function closeAlert() {
    // Remueve la alerta del DOM al presionar el botón OK
    var alertDiv = document.querySelector('.alert');
    alertDiv.parentNode.removeChild(alertDiv);
  }
  
  
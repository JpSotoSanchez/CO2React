import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <div className="container">
        <h1 className="display-4 text-danger">404 - Página no encontrada</h1>
        <p className="lead text-muted mb-4">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <Link to="/home" className="btn btn-primary btn-lg">
          Volver a la Página Principal
        </Link>
      </div>
    </div>
  );
}

export default Error;

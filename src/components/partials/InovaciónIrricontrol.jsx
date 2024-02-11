import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../css/styles.css";

function InovaciónIrricontrol() {
  return (
    <div className="container mt-5 pb-5">
      <div className="flex-column d-flex justify-content-center align-items-center">
        <div className="p-5 text-center flex-column d-flex justify-content-center align-items-center">
          <p className="section3">Acerca de:</p>
          <h2 className="titleSection">
            <span className="colorLetter">Una gestión sustentable</span> de los
            recursos agua y energía en el riego agrícola de precisión.
          </h2>
        </div>

        <img src="img/core-img/decor22.png" alt="" />
      </div>
      <div className="row mt-4">
        <div className="col-12 col-sm-6 col-lg-4">
          <Card border="light">
            <Card.Body>
              <img
                src="img/bg-img/9-1.jpg"
                alt="problema"
                className="imgCard"
              />
              <div className="bg-icon d-flex justify-content-center align-items-center">
                <img
                  src="img/core-img/gota.png"
                  alt="iconGota"
                  className="icon"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h3 className="nameCard">Problema</h3>
              </div>

              <Card.Text className="mt-4 textCard">
                El riego agrícola es manejado de acuerdo con observaciones
                empíricas percibidas de las necesidades hídricas del cultivo. Se
                realizan aplicaciones de agua en exceso, por pretender disminuir
                un riesgo considerado mayor asimilado a la escasez (sequía). Dos
                problemas: 1) Derrochar agua (m3) y energía (kwts), y 2)
                Disminuir productividad (kgs) por saturación que reduce
                fotosíntesis.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <Card border="light">
            <Card.Body>
              <img
                src="img/bg-img/9-1.jpg"
                alt="problema"
                className="imgCard"
              />
              <div className="bg-icon d-flex justify-content-center align-items-center">
                <img
                  src="img/core-img/lupa.png"
                  alt="iconLupa"
                  className="icon"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h3 className="nameCard">Oportunidad</h3>
              </div>

              <Card.Text className="mt-4 textCard">
                La producción mundial de alimentos exige agricultura con
                sostenibilidad, aplicando datos en tiempo real provenientes del
                suelo, del cultivo y del ambiente. Oportunidad de las Agtech
                para mejorar la eficiencia y la productividad, contribuyendo con
                gestión responsable del recurso hídrico, en mitigación al cambio
                ambiental.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <Card border="light">
            <Card.Body>
              <img
                src="img/bg-img/9-1.jpg"
                alt="problema"
                className="imgCard"
              />
              <div className="bg-icon d-flex justify-content-center align-items-center">
                <img
                  src="img/core-img/planta.png"
                  alt="iconPlanta"
                  className="icon"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h3 className="nameCard">Solución y Valor</h3>
              </div>

              <Card.Text className="mt-4 textCard">
                Al calcular la Huella Hídrica medimos la eficiencia y viabilidad
                productiva en el uso de agua aplicada (Huella Hídrica Azul y
                Verde), con reglas de la Water Footprint Network; y basados en
                nuestra medición del BH FAO-56 Irricontrol, accedemos a conocer
                el real destino del agua para obtener información que nos
                permita conducir la conservación del recurso agua.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default InovaciónIrricontrol;

import Form from "react-bootstrap/Form";
import "../../css/styles.css";

function ContactUs() {
  return (
    <div
      className="d-flex flex-column px-5 form w-100 mt-5"
      id="sectionContact"
    >
      <div className="container px-0 ">
        <Form className="fs-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Form.Group className="mb-3 border-bottom" controlId="example">
                <Form.Label className="mt-5">Nombre completo *</Form.Label>
                <Form.Control
                  required
                  name="user_name"
                  className=" border-0 formControl"
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3 border-bottom" controlId="example">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  required
                  name="user_email"
                  className=" border-0 formControl"
                  type="email"
                />
              </Form.Group>
              <Form.Group className="mb-3 border-bottom" controlId="example">
                <Form.Label>Teléfono *</Form.Label>
                <Form.Control
                  name="user_phone"
                  className=" border-0 formControl"
                  type="phone"
                />
              </Form.Group>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Form.Group className="mb-3 border-bottom" controlId="example">
                <Form.Label className="mt-5">Asunto *</Form.Label>
                <Form.Control
                  name="subject"
                  className="border-0  formControl"
                  type="subject"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="example">
                <Form.Label className="comment-label">Comentario *</Form.Label>
                <Form.Control name="message" required as="textarea" rows={5} />
              </Form.Group>
            </div>
            <div className="col-0 col-md-6" />
            <div className="col-12 col-md-6">
              <div className="form-check fs-6">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  required
                />
                <label className="form-check-label " htmlFor="flexCheckDefault">
                  Acepta las políticas de privacidad?
                </label>
              </div>
              <Form.Group className="d-flex justify-content-sm-end justify-content-center mt-5">
                <button
                  className="btn btn-primary mb-5"
                  type="submit"
                  value="Send"
                >
                  Enviar
                </button>
              </Form.Group>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ContactUs;

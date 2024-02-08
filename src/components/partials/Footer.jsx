import "../../css/footer.css";

function Footer() {
  return (
    <>
      <div className="p-5" id="sectionFooter">
        <div className="row">
          <div className="col-6">
            <h5 className="mt-3"> 2024 | info@irricontrol.com.uy</h5>
          </div>
          <div className="col-6">
            <div className="mt-3 gap-3 d-flex justify-content-end">
              <h4>
                <i class="bi bi-instagram"></i>
              </h4>
              <h4>
                <i class="bi bi-whatsapp"></i>
              </h4>
              <h4>
                <i class="bi bi-twitter"></i>
              </h4>
              <h4>
                <i class="bi bi-facebook"></i>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

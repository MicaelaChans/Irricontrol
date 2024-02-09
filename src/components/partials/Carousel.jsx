import Carousel from "react-bootstrap/Carousel";

function TheCarousel() {
  return (
    <div className="containerCarousel">
      <Carousel>
        <Carousel.Item>
          <video
            loop=""
            muted={true}
            autoPlay={true}
            src="img/riego5.mp4"
          ></video>
          <Carousel.Caption className="">
            <h3>Holi</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video
            loop=""
            muted={true}
            autoPlay={true}
            src="img/riego5.mp4"
          ></video>
          <Carousel.Caption>
            <h3>Que que</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video
            loop=""
            muted={true}
            autoPlay={true}
            src="img/riego5.mp4"
          ></video>
          <Carousel.Caption>
            <h3>Pa Pa</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default TheCarousel;

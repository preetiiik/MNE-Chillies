import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import image from "../assets/images/image-as.png";

import "../styles/Whoweare.css";

function WhoAreWe() {
  return (
    <section className="who-we-are">
      <div className="container">
      <div className="who-container">

        <div className="who-content">

          <span
            className="section-tag"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            OUR HERITAGE
          </span>

          <h2
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="800"
          >
            Who Are We?
          </h2>

          <p
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            MNE is a trusted name in premium red chili sourcing,
            processing, and export. We deliver high-quality chillies
            with strict quality control, traceability, and long-standing
            farmer partnerships.
          </p>

          <div className="who-gallery">

            <div
              className="gallery-item"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
            >
              <img src={img1} alt="Farm" />
              <span>Farm</span>
            </div>

            <div
              className="gallery-item"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="700"
            >
              <img src={img2} alt="Process" />
              <span>Process</span>
            </div>

            <div
              className="gallery-item"
              data-aos="fade-up"
              data-aos-delay="750"
              data-aos-duration="700"
            >
              <img src={img3} alt="Product" />
              <span>Product</span>
            </div>

          </div>

          <a
            href="#"
            className="read-more"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="700"
          >
            Read More →
          </a>

        </div>

        <div
          className="who-image"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >

          <div className="corner top"></div>

          <img src={image} alt="Chillies" />

          <div className="corner bottom"></div>

        </div>

      </div>
      </div>
    </section>
  );
}

export default WhoAreWe;
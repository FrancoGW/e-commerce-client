import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            molestiae maiores praesentium mollitia quas aperiam accusamus
            eligendi officia laboriosam. Provident quaerat asperiores aliquid
            qui velit quae perferendis tempore optio corporis.
          </p>
          <div className="ctas">
              <div className="banner-cta">Read More</div>
              <div className="banner-cta v2">Shop Mow</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;

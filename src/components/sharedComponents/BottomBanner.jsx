import React from "react";
import data from "../../data.json";

export default function BottomBanner(props) {
  console.log(data);
  return (
    <section className="bottomBanner">
      <picture className="bottomBanner__image">
        <source
          media="(min-width:650px)"
          srcSet="assets/shared/tablet/image-best-gear.jpg"
        />
        <source
          media="(min-width:1200px)"
          srcSet="assets/shared/mobile/image-best-gear.jpg"
        />
        <img
          src="assets/shared/mobile/image-best-gear.jpg"
          alt="Person using our Mark 2 headphones"
        />
      </picture>

      {/* <img
        className="bottomBanner__image"
        src="./assets/shared/mobile/image-best-gear.jpg"
        srcSet="./assets/shared/mobile/image-best-gear.jpg 654w,
                ./assets/shared/tablet/image-best-gear.jpg 1378w,
                ./assets/shared/desktop/image-best-gear.jpg 540w"
        sizes="(max-width: 650px) 80vw,
                (min-width: 650px) 80vw,
                (min-width: 1200px) 30vw"
        alt="Person using our Mark 2 heaphones"
      /> */}
      <div className="bottomBanner__description">
        <h3 className="bottomBanner__title">
          Bringing you the <span>best</span> audio gear
        </h3>
        <p className="bottomBanner__text">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}
// react-imgix

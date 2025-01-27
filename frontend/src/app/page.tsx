"use client";

import React, { useEffect } from "react";

export default function Home() {
  const ScriptTagComponent = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src =
        "../d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c84f1e.js?site=631a8e22c06cc03d5f88ec76";
      script.type = "text/javascript";
      script.integrity = "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=";
      script.crossOrigin = "anonymous";
      script.async = true;

      document.body.appendChild(script);

      return () => {
        // Clean up by removing the script when the component is unmounted
        document.body.removeChild(script);
      };
    }, []);

    return null; // This component doesn't render anything visible
  };

  const WebflowScriptLoader = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src =
        "../assets.website-files.com/631a8e22c06cc03d5f88ec76/js/webflow.d2a4a6aa9.js";
      script.type = "text/javascript";
      document.body.appendChild(script);

      return () => {
        // Cleanup the script when the component unmounts
        document.body.removeChild(script);
      };
    }, []);

    return null; // No visual component, purely for script loading
  };

  return (
    <>
      <div className="global-css html-embed css w-embed">
        <style>
          {`
          .stroke-heading {
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: white;
          }

          .marquee-track,
          .marquee-2,
          .marquee-3 {
            position: absolute;
            white-space: nowrap;
            width: 100%;
            will-change: transform;
          }

          .marquee-track {
            animation: marquee-track 40s linear infinite !important;
          }

          .marquee-2 {
            animation: marquee-2 40s linear infinite !important;
          }

          .marquee-3 {
            animation: marquee-3 40s linear infinite !important;
          }

          @keyframes marquee-track {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0%);
            }
          }

          @keyframes marquee-2 {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0%);
            }
          }

          @keyframes marquee-3 {
            from {
              transform: translateX(50%);
            }
            to {
              transform: translateX(0%);
            }
          }
        `}
        </style>
      </div>
      <div className="header-navigation">
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navigation w-nav"
        >
          <div className="nav-mobile-container">
            <a href="#" className="nav-mobile-logo w-inline-block">
              <img
                src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b4c50561f2b1920b2f476_ROCKET FUEL (1).webp"
                loading="lazy"
                width="48"
                srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b4c50561f2b1920b2f476_ROCKET%20FUEL%20(1)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b4c50561f2b1920b2f476_ROCKET%20FUEL%20(1)-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b4c50561f2b1920b2f476_ROCKET%20FUEL%20(1).webp 1073w"
                sizes="(max-width: 479px) 37vw, (max-width: 991px) 125px, 100vw"
                alt=""
                className="logo-mark"
              />
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="nav-menu-left">
                <a href="#" className="nav-link w-nav-link">
                  SHOP ALL
                </a>
                <a href="#" className="nav-link w-nav-link">
                  MENU
                </a>
              </div>
              <a href="#" className="logo-link-middle w-inline-block">
                <img
                  src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b4c50561f2b1920b2f476_ROCKET FUEL (1).webp"
                  loading="lazy"
                  width="48"
                  srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b4c50561f2b1920b2f476_ROCKET%20FUEL%20(1)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b4c50561f2b1920b2f476_ROCKET%20FUEL%20(1)-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b4c50561f2b1920b2f476_ROCKET%20FUEL%20(1).webp 1073w"
                  sizes="(max-width: 991px) 100vw, 125px"
                  alt=""
                  className="logo-mark"
                />
              </a>
              <div className="nav-menu-right">
                <a href="#" className="nav-link w-nav-link">
                  ABOUT
                </a>
                <a href="#" className="nav-link w-nav-link">
                  MERCH
                </a>
                <div className="cart is--desktop">
                  <div className="cart-left">
                    <div className="text-block-2">0</div>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b53dbd0d6324c142c799c_Untitled design (10).webp"
                      loading="lazy"
                      data-w-id="61e4f082-9779-f157-81bb-11c3602c308c"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b53dbd0d6324c142c799c_Untitled%20design%20(10)-p-500.png 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b53dbd0d6324c142c799c_Untitled%20design%20(10).webp 1200w"
                      sizes="(max-width: 991px) 100vw, 45px"
                      alt=""
                      className="bar-cart__image"
                    />
                  </div>
                </div>
              </div>
            </nav>
            <div className="mobile-right-nav">
              <div className="menu-button w-nav-button">
                <div className="icon w-icon-nav-menu"></div>
              </div>
              <div className="cart is--mobile">
                <div className="cart-left">
                  <div className="text-block-2">0</div>
                  <img
                    src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b53dbd0d6324c142c799c_Untitled design (10).webp"
                    loading="lazy"
                    data-w-id="5b7b2f0d-74e6-dd6c-8eeb-5eefcc3ee0bb"
                    srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b53dbd0d6324c142c799c_Untitled%20design%20(10)-p-500.png 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b53dbd0d6324c142c799c_Untitled%20design%20(10).webp 1200w"
                    sizes="(max-width: 479px) 12vw, (max-width: 991px) 40px, 100vw"
                    alt=""
                    className="bar-cart__image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="_8-bit-bg"></div>
        <div className="swirl-bg"></div>
        <div className="hero-wrapper">
          <div className="hero-container">
            <div className="hero-container-content">
              <div
                data-w-id="35005f04-8b88-11a9-b0f2-674e89d72803"
                className="hero-content-block is--left"
              >
                <div className="hero-content-block-left-inner">
                  <h1 className="heading is-xxlarge">Refuel your ship</h1>
                  <p className="sub-paragraph">
                    Native ingredients in the form of loveable fast food.
                  </p>
                  <div className="btn-container">
                    <a href="#" className="btn-link-block w-inline-block">
                      <div className="button">
                        <div className="_8-bit-btn-bg"></div>
                        <div className="btn__text">SHOP</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-w-id="1526f0a5-46a0-eb24-a254-618ec57f5d7d"
                className="hero-content-block is--right"
              >
                <img
                  className="hand-burger__image is--mobile"
                  src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c7b6892aded470d268bc9_Untitled design (21).webp"
                  width="1299"
                  alt=""
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(-180deg) rotateZ(0deg) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(-180deg) rotateZ(0deg) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(-180deg) rotateZ(0deg) skew(0, 0)",
                    transform:
                      "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(-180deg) rotateZ(0deg) skew(0, 0)",
                    transformStyle: "preserve-3d",
                  }}
                  sizes="(max-width: 479px) 94vw, 100vw"
                  data-w-id="353dbec0-348a-98c5-e1ef-d3a4ebd687d4"
                  loading="lazy"
                  srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c7b6892aded470d268bc9_Untitled%20design%20(21)-p-500.webp 500w, 
               https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c7b6892aded470d268bc9_Untitled%20design%20(21)-p-800.webp 800w, 
               https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c7b6892aded470d268bc9_Untitled%20design%20(21)-p-1080.webp 1080w, 
               https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c7b6892aded470d268bc9_Untitled%20design%20(21).webp 1200w"
                />
                <img
                  className="hand-burger__image is--desktop"
                  src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c791b60e214a5752cc65b_Add a heading (2560 × 1400 px) (1).webp"
                  width="1299"
                  alt=""
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 47vw, 48vw"
                  data-w-id="0dbcdeff-dbee-2adb-fc29-9dbfddb9af14"
                  loading="lazy"
                  srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c791b60e214a5752cc65b_Add%20a%20heading%20(2560%20%C3%97%201400%20px)%20(1)-p-500.webp 500w, 
               https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c791b60e214a5752cc65b_Add%20a%20heading%20(2560%20%C3%97%201400%20px)%20(1)-p-800.webp 800w, 
               https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c791b60e214a5752cc65b_Add%20a%20heading%20(2560%20%C3%97%201400%20px)%20(1)-p-1080.webp 1080w, 
               https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c791b60e214a5752cc65b_Add%20a%20heading%20(2560%20%C3%97%201400%20px)%20(1).webp 1594w"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro">
        <div className="delivery-image">
          <img
            src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c80ebd267b12df5daef4e_Untitled design (23).webp"
            loading="lazy"
            srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c80ebd267b12df5daef4e_Untitled%20design%20(23)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c80ebd267b12df5daef4e_Untitled%20design%20(23)-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c80ebd267b12df5daef4e_Untitled%20design%20(23)-p-1080.webp 1080w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c80ebd267b12df5daef4e_Untitled%20design%20(23).webp 1200w"
            sizes="(max-width: 479px) 125px, (max-width: 1919px) 185px, 305px"
            alt=""
            className="delivery__image"
          />
        </div>
        <div className="intro-wrapper">
          <div className="intro-container">
            <div className="intro-content">
              <div className="intro-grid-container">
                <div
                  data-w-id="0688a9d3-7269-96ef-f6f4-dfb5d7d38654"
                  className="w-layout-grid intro-grid"
                >
                  <div
                    id="w-node-_2ec3dbb3-f750-8651-a1bb-6750d3e7fa91-8788ec77"
                    className="intro-grid-block is--one"
                  >
                    <div
                      style={{
                        WebkitTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="floating-image is--two"
                    >
                      <div className="_8-bit-sauce is--two">
                        <img
                          src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd6021b9cda7c60cc2ddb_12 (1)_cleanup.webp"
                          loading="lazy"
                          srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd6021b9cda7c60cc2ddb_12%20(1)_cleanup-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd6021b9cda7c60cc2ddb_12%20(1)_cleanup-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd6021b9cda7c60cc2ddb_12%20(1)_cleanup-p-1080.webp 1080w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd6021b9cda7c60cc2ddb_12%20(1)_cleanup.webp 1200w"
                          sizes="(max-width: 479px) 80px, 105px"
                          alt=""
                          className="sauce__image"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        WebkitTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", // Corrected to 'msTransform'
                      }}
                      className="floating-image is--two"
                    >
                      <div className="_8-bit-sauce is--one">
                        <img
                          src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd5eb77b6832062974279_12 (2) (1).webp"
                          loading="lazy"
                          srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd5eb77b6832062974279_12%20(2)%20(1)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd5eb77b6832062974279_12%20(2)%20(1)-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd5eb77b6832062974279_12%20(2)%20(1)-p-1080.webp 1080w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd5eb77b6832062974279_12%20(2)%20(1).webp 1200w"
                          sizes="(max-width: 479px) 100vw, 105px"
                          alt=""
                          className="sauce__image"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        WebkitTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="floating-image is--two"
                    >
                      <div className="_8-bit-fries">
                        <img
                          src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd27875a7c12c3006d617_TIME 2 Refuel (1).webp"
                          loading="lazy"
                          alt=""
                          className="fries__images"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        WebkitTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", // Corrected to 'msTransform'
                      }}
                      className="floating-image is--two"
                    >
                      <div className="_8-bit-drink">
                        <img
                          src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd2fa757f6677b967907a_TIME 2 Refuel (2).webp"
                          loading="lazy"
                          alt=""
                          className="drink__iimage"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        WebkitTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", // Corrected to 'msTransform'
                      }}
                      className="floating-image is--two"
                    >
                      <div className="_8-bit-burgers">
                        <img
                          src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd140bc22fc5b990eebee_TIME 2 Refuel.webp"
                          loading="lazy"
                          srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd140bc22fc5b990eebee_TIME%202%20Refuel-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd140bc22fc5b990eebee_TIME%202%20Refuel-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd140bc22fc5b990eebee_TIME%202%20Refuel-p-1080.webp 1080w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631bd140bc22fc5b990eebee_TIME%202%20Refuel.webp 1200w"
                          sizes="(max-width: 479px) 55px, (max-width: 1279px) 80px, (max-width: 1439px) 6vw, 80px"
                          alt=""
                          className="burger__image"
                        />
                      </div>
                    </div>
                    <div className="_8-bit-bg"></div>
                    <div className="stars-bg">
                      <div
                        data-w-id="9998593c-9966-044f-e35f-599aa393e2cc"
                        className="intro-grid-left-inner"
                      >
                        <div className="inner-grid-block-left">
                          <div className="speech-bubble">
                            <a
                              href="#"
                              className="speech-link-block w-inline-block"
                            >
                              <img
                                src="../assets.website-files.com/631a8e22c06cc03d5f88ec76/631b9a8f3a6744848ab99573_ezgif.com-gif-maker%20(2).gif"
                                loading="eager"
                                data-w-id="8d58cb7a-0ead-a0e1-7a57-037cab026b4d"
                                alt=""
                                className="speech-bubble__image"
                              />
                            </a>
                          </div>
                        </div>
                        <div
                          data-w-id="9ebac82f-b130-07d0-62d9-37b83a6902f0"
                          style={{
                            WebkitTransform:
                              "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            MozTransform:
                              "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            msTransform:
                              "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            transform:
                              "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className="inner-grid-block-right is--float"
                        >
                          <div
                            data-w-id="a202533c-eeb6-b450-f213-abe1c255325b"
                            className="inner-grid-block-right"
                          >
                            <img
                              src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c7c287a1cf65feee07098_Untitled design (22).webp"
                              loading="eager"
                              srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c7c287a1cf65feee07098_Untitled%20design%20(22)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c7c287a1cf65feee07098_Untitled%20design%20(22).webp 1012w"
                              sizes="(max-width: 479px) 44vw, (max-width: 991px) 150px, (max-width: 1919px) 195px, 275px"
                              alt=""
                              className="spaceman__image"
                            />
                            <img
                              src="../assets.website-files.com/631a8e22c06cc03d5f88ec76/631c7be2341fb50e887e13cf_ezgif.com-gif-maker%20(5).gif"
                              loading="eager"
                              alt=""
                              className="rocket-image"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="moon-container">
                        <img
                          src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b9129c0172f2446f3dc27_Add a heading (3).webp"
                          loading="eager"
                          data-w-id="75ca43f6-0f16-0799-7669-4025230e42f0"
                          srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b9129c0172f2446f3dc27_Add%20a%20heading%20(3)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b9129c0172f2446f3dc27_Add%20a%20heading%20(3)-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b9129c0172f2446f3dc27_Add%20a%20heading%20(3)-p-1080.webp 1080w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631b9129c0172f2446f3dc27_Add%20a%20heading%20(3).webp 1924w"
                          sizes="(max-width: 479px) 45vw, (max-width: 991px) 300px, (max-width: 1919px) 350px, 750px"
                          alt=""
                          className="moon__image"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-_4d81f26d-479b-c7e9-990a-2c766d9b3662-8788ec77"
                    className="intro-grid-block is--two"
                  >
                    <div className="btn-container is--intro">
                      <a
                        href="#"
                        className="btn-link-block is--intro w-inline-block"
                      >
                        <div className="button is--intro">
                          <div className="_8-bit-btn-bg is--intro"></div>
                          <img
                            src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c819997fa662e92d1fde0_Doordash+Logo+White.webp"
                            loading="lazy"
                            srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c819997fa662e92d1fde0_Doordash%2BLogo%2BWhite-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c819997fa662e92d1fde0_Doordash%2BLogo%2BWhite-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c819997fa662e92d1fde0_Doordash%2BLogo%2BWhite.webp 1138w"
                            sizes="(max-width: 1279px) 55px, (max-width: 1439px) 4vw, 55px"
                            alt=""
                            className="doordash__logo"
                          />
                          <div className="btn__text is--intro">DOORDASH</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    id="w-node-_9e30721b-cbb6-eb9d-acc9-4736358e28fd-8788ec77"
                    className="intro-grid-block is--three"
                  >
                    <div className="_8-bit-btn-bg is--intro"></div>
                    <div className="grid-content">
                      <h1 className="heading is--medium is--two">
                        CHeck out the rocket menu
                      </h1>
                      <p className="sub-paragraph is--center">
                        Find out what your refueling with tonight!
                      </p>
                    </div>
                    <div className="grid-inner-content-three">
                      <div
                        data-w-id="742f60ed-f2d3-0f54-927e-b25bd792bcd7"
                        className="fries-container"
                      >
                        <div
                          style={{
                            WebkitTransform:
                              "translate3d(0, 476px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            MozTransform:
                              "translate3d(0, 476px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            msTransform:
                              "translate3d(0, 476px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            transform:
                              "translate3d(0, 476px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className="spaceman-bg"
                        ></div>
                        <img
                          src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c8557139d2865522a4d01_dfg.webp"
                          loading="eager"
                          style={{
                            WebkitTransform:
                              "translate3d(0, 476px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            MozTransform:
                              "translate3d(0, 476px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            msTransform:
                              "translate3d(0, 476px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            transform:
                              "translate3d(0, 476px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c8557139d2865522a4d01_dfg-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c8557139d2865522a4d01_dfg.webp 776w"
                          sizes="(max-width: 479px) 41vw, (max-width: 991px) 200px, (max-width: 1919px) 250px, 350px"
                          alt=""
                          className="drink__image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="_8-bit-bg"></div>
        <div className="swirl-bg"></div>
        <div className="products-wrapper">
          <div className="products-container">
            <div className="testimonial-container">
              <div className="slider-heading">
                <div className="products-heading-inner">
                  <h1 className="heading is--medium is--three">
                    Choose your fighter
                  </h1>
                  <p className="sub-paragraph is--products">
                    Juicy flavors and bold ingredients combine for a killer meal
                    every time.
                  </p>
                </div>
              </div>
              <div
                data-delay="4000"
                data-animation="slide"
                className="product-slider w-slider"
                data-autoplay="false"
                data-easing="ease-out-quint"
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-autoplay-limit="0"
                data-nav-spacing="3"
                data-duration="1000"
                data-infinite="true"
              >
                <div className="product-slider-mask w-slider-mask">
                  <div className="product-slide w-slide">
                    <div className="product-card">
                      <div className="product-image-box">
                        <div
                          data-w-id="87f26328-8558-057f-165a-b36896234e82"
                          style={{
                            WebkitTransform:
                              "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            MozTransform:
                              "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            msTransform:
                              "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            transform:
                              "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          }}
                          className="order-now"
                        >
                          <a
                            href="#"
                            className="product-order-link-block w-inline-block"
                          >
                            <img
                              src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd.webp"
                              loading="lazy"
                              srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd.webp 1049w"
                              sizes="150px"
                              alt=""
                              className="order-now__image"
                            />
                          </a>
                        </div>
                        <div className="burger-container">
                          <img
                            src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9bac77b6835260a06047_Untitled design (27).webp"
                            loading="eager"
                            srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9bac77b6835260a06047_Untitled%20design%20(27)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9bac77b6835260a06047_Untitled%20design%20(27)-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9bac77b6835260a06047_Untitled%20design%20(27).webp 1000w"
                            sizes="(max-width: 479px) 84vw, (max-width: 767px) 342px, (max-width: 991px) 362px, (max-width: 1919px) 292px, 392px"
                            alt=""
                            className="burger__product-image"
                          />
                        </div>
                      </div>
                      <div className="wave">
                        <img
                          src="../assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2).png"
                          loading="lazy"
                          width="598"
                          srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-500.png 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-800.png 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-1080.png 1080w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-1600.png 1600w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2).png 1978w"
                          sizes="(max-width: 479px) 84vw, (max-width: 767px) 395px, (max-width: 991px) 415px, (max-width: 1919px) 345px, 445px"
                          alt=""
                          className="wave__image"
                        />
                      </div>
                      <div className="product-content">
                        <div className="product-inner">
                          <div className="test-inner-left">
                            <div className="product-name">
                              ROcket Burger
                              <span className="text-span-36"></span>
                            </div>
                            <p className="paragraph is--white-bg">$8.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-slide w-slide">
                    <div className="product-card">
                      <div className="product-image-box">
                        <div className="order-now">
                          <a href="#" className="w-inline-block">
                            <img
                              src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd.webp"
                              loading="lazy"
                              srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd.webp 1049w"
                              sizes="150px"
                              alt=""
                              className="order-now__image"
                            />
                          </a>
                        </div>
                        <div className="burger-container">
                          <img
                            src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afd1b6e4ae803e7c12e_15.webp"
                            loading="eager"
                            srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afd1b6e4ae803e7c12e_15-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afd1b6e4ae803e7c12e_15-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afd1b6e4ae803e7c12e_15.webp 1000w"
                            sizes="(max-width: 479px) 84vw, (max-width: 767px) 342px, (max-width: 991px) 362px, (max-width: 1919px) 292px, 392px"
                            alt=""
                            className="burger__product-image"
                          />
                        </div>
                      </div>
                      <div className="wave">
                        <img
                          src="../assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2).png"
                          loading="lazy"
                          srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-500.png 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-800.png 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-1080.png 1080w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-1600.png 1600w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2).png 1978w"
                          sizes="(max-width: 479px) 84vw, (max-width: 767px) 395px, (max-width: 991px) 415px, (max-width: 1919px) 345px, 445px"
                          alt=""
                          className="image-9"
                        />
                      </div>
                      <div className="product-content">
                        <div className="product-inner">
                          <div className="test-inner-left">
                            <div className="product-name">
                              Rocket Rings
                              <span className="text-span-36"></span>
                            </div>
                            <p className="paragraph is--white-bg">$8.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-slide w-slide">
                    <div className="product-card">
                      <div className="product-image-box">
                        <div className="order-now">
                          <a href="#" className="w-inline-block">
                            <img
                              src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd.webp"
                              loading="lazy"
                              srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd.webp 1049w"
                              sizes="150px"
                              alt=""
                              className="order-now__image"
                            />
                          </a>
                        </div>
                        <div className="burger-container">
                          <img
                            src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afdd267b10233dc8e1d_12.webp"
                            loading="lazy"
                            srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afdd267b10233dc8e1d_12-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afdd267b10233dc8e1d_12-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afdd267b10233dc8e1d_12.webp 1000w"
                            sizes="(max-width: 479px) 84vw, (max-width: 767px) 342px, (max-width: 991px) 362px, (max-width: 1919px) 292px, 392px"
                            alt=""
                            className="burger__product-image"
                          />
                        </div>
                      </div>
                      <div className="wave">
                        <img
                          src="../assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2).png"
                          loading="lazy"
                          srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-500.png 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-800.png 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-1080.png 1080w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-1600.png 1600w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2).png 1978w"
                          sizes="(max-width: 479px) 84vw, (max-width: 767px) 395px, (max-width: 991px) 415px, (max-width: 1919px) 345px, 445px"
                          alt=""
                          className="image-10"
                        />
                      </div>
                      <div className="product-content">
                        <div className="product-inner">
                          <div className="test-inner-left">
                            <div className="product-name">
                              Rocket Fries
                              <span className="text-span-36"></span>
                            </div>
                            <p className="paragraph is--white-bg">$8.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-slide w-slide">
                    <div className="product-card">
                      <div className="product-image-box">
                        <div className="order-now">
                          <a href="#" className="w-inline-block">
                            <img
                              src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd.webp"
                              loading="lazy"
                              srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd.webp 1049w"
                              sizes="150px"
                              alt=""
                              className="order-now__image"
                            />
                          </a>
                        </div>
                        <div className="burger-container">
                          <img
                            src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afefddd92be6c367db0_9.webp"
                            loading="eager"
                            srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afefddd92be6c367db0_9-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afefddd92be6c367db0_9-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afefddd92be6c367db0_9.webp 1000w"
                            sizes="(max-width: 479px) 84vw, (max-width: 767px) 342px, (max-width: 991px) 362px, (max-width: 1919px) 292px, 392px"
                            alt=""
                            className="burger__product-image"
                          />
                        </div>
                      </div>
                      <div className="wave">
                        <img
                          src="../assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2).png"
                          loading="lazy"
                          srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-500.png 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-800.png 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-1080.png 1080w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-1600.png 1600w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2).png 1978w"
                          sizes="(max-width: 479px) 84vw, (max-width: 767px) 395px, (max-width: 991px) 415px, (max-width: 1919px) 345px, 445px"
                          alt=""
                          className="image-11"
                        />
                      </div>
                      <div className="product-content">
                        <div className="product-inner">
                          <div className="test-inner-left">
                            <div className="product-name">
                              spaceship Burger
                              <span className="text-span-36"></span>
                            </div>
                            <p className="paragraph is--white-bg">$8.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-slide w-slide">
                    <div className="product-card">
                      <div className="product-image-box">
                        <div className="order-now">
                          <a href="#" className="w-inline-block">
                            <img
                              src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd.webp"
                              loading="lazy"
                              srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9301f4e15138d1d5114d_sfzd.webp 1049w"
                              sizes="150px"
                              alt=""
                              className="order-now__image"
                            />
                          </a>
                        </div>
                        <div className="burger-container">
                          <img
                            src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afd139d2832042bc12f_10.webp"
                            loading="lazy"
                            srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afd139d2832042bc12f_10-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afd139d2832042bc12f_10-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631c9afd139d2832042bc12f_10.webp 1000w"
                            sizes="(max-width: 479px) 84vw, (max-width: 767px) 342px, (max-width: 991px) 362px, (max-width: 1919px) 292px, 392px"
                            alt=""
                            className="burger__product-image"
                          />
                        </div>
                      </div>
                      <div className="wave">
                        <img
                          src="../assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2).png"
                          loading="lazy"
                          srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-500.png 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-800.png 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-1080.png 1080w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2)-p-1600.png 1600w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631d3d4034ed9e3d75b55642_631c9dca728e6435ce51938b_Untitled%20design%20(28)%20(1)%20(1)%20(2).png 1978w"
                          sizes="(max-width: 479px) 84vw, (max-width: 767px) 395px, (max-width: 991px) 415px, (max-width: 1919px) 345px, 445px"
                          alt=""
                          className="image-12"
                        />
                      </div>
                      <div className="product-content">
                        <div className="product-inner">
                          <div className="test-inner-left">
                            <div className="product-name">
                              Planet Burger
                              <span className="text-span-36"></span>
                            </div>
                            <p className="paragraph is--white-bg">$8.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left-arrow-2 w-slider-arrow-left">
                  <div className="icon-2 w-embed">
                    <svg
                      width="420"
                      height="420"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.828 12.0001L14.657 14.8281L13.243 16.2431L9 12.0001L13.243 7.75708L14.657 9.17208L11.828 12.0001Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="right-arrow-2 w-slider-arrow-right">
                  <div className="icon-2 w-embed">
                    <svg
                      width="420"
                      height="420"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1718 12.0001L9.34277 9.17208L10.7568 7.75708L14.9998 12.0001L10.7568 16.2431L9.34277 14.8281L12.1718 12.0001Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="slide-nav-hidden w-slider-nav w-round"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee">
        <div className="_8-bit-bg"></div>
        <div className="marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-content is--two">
              <div className="marquee-inner">
                <div className="marquee-inner-container is--two is--main">
                  <div className="marquee-2 is--three">
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c1afbf11242b_8.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c1afbf11242b_8-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c1afbf11242b_8.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c16ca211242a_1.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c16ca211242a_1-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c16ca211242a_1.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7743ea9a3d846a5ee_5.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7743ea9a3d846a5ee_5-p-500.png 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7743ea9a3d846a5ee_5.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7728e648e1351b258_4.webp"
                      loading="lazy"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7728e648e1351b258_4.webp"
                      loading="lazy"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7bc22fc1459188c50_9.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7bc22fc1459188c50_9-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7bc22fc1459188c50_9.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7bc22fc1459188c50_9.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7bc22fc1459188c50_9-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7bc22fc1459188c50_9.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca19592aded227328a671_Untitled design (29).webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca19592aded227328a671_Untitled%20design%20(29)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca19592aded227328a671_Untitled%20design%20(29).webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c16ca211242a_1.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c16ca211242a_1-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c16ca211242a_1.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7743ea9a3d846a5ee_5.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7743ea9a3d846a5ee_5-p-500.png 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7743ea9a3d846a5ee_5.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7728e648e1351b258_4.webp"
                      loading="lazy"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca1c7139d281e202c0ff0_Untitled design (30).webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca1c7139d281e202c0ff0_Untitled%20design%20(30)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca1c7139d281e202c0ff0_Untitled%20design%20(30).webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7728e648e1351b258_4.webp"
                      loading="lazy"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7743ea9a3d846a5ee_5.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7743ea9a3d846a5ee_5-p-500.png 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7743ea9a3d846a5ee_5.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7d44a434b35890379_7.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7d44a434b35890379_7-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7d44a434b35890379_7.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f706796a61614e26cc_3.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f706796a61614e26cc_3-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f706796a61614e26cc_3.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca1c7139d281e202c0ff0_Untitled design (30).webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca1c7139d281e202c0ff0_Untitled%20design%20(30)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca1c7139d281e202c0ff0_Untitled%20design%20(30).webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c16ca211242a_1.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c16ca211242a_1-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c16ca211242a_1.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7743ea9a3d846a5ee_5.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7743ea9a3d846a5ee_5-p-500.png 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7743ea9a3d846a5ee_5.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7bc22fc1459188c50_9.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7bc22fc1459188c50_9-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7bc22fc1459188c50_9.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7d267b1210fdce5ae_2.webp"
                      loading="lazy"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f706796a61614e26cc_3.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f706796a61614e26cc_3-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f706796a61614e26cc_3.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c1afbf11242b_8.webp"
                      loading="lazy"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c1afbf11242b_8-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f775a7c1afbf11242b_8.webp 500w"
                      sizes="(max-width: 479px) 75px, (max-width: 1279px) 95px, (max-width: 1439px) 7vw, 95px"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ca0f7728e648e1351b258_4.webp"
                      loading="lazy"
                      alt=""
                      className="planet__image"
                    />
                    <h1 className="stroke-heading is--planets">FUel Up</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="extra">
        <div className="extra-wrapper">
          <div className="extra-container">
            <div className="extra-grid-container">
              <div className="w-layout-grid extra-grid">
                <div
                  id="w-node-_573ec4f8-fecf-baa5-6f4d-c2396ac8a92a-8788ec77"
                  className="extra-grid-block is--one"
                >
                  <div className="_8-bit-bg"></div>
                  <div className="grid-inner-block">
                    <div className="inner-grid-content">
                      <div className="story-heading">
                        <a href="#" className="w-inline-block w-lightbox">
                          <img
                            src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cb8fe279824050dcbc177_Untitled design (31).webp"
                            loading="lazy"
                            alt=""
                            className="play-button"
                          />
                          <script type="application/json" className="w-json">
                            {JSON.stringify({
                              items: [
                                {
                                  url: "https://www.youtube.com/watch?v=cGz7GeFKeXY",
                                  originalUrl:
                                    "https://www.youtube.com/watch?v=cGz7GeFKeXY",
                                  width: 940,
                                  height: 528,
                                  thumbnailUrl:
                                    "https://i.ytimg.com/vi/cGz7GeFKeXY/hqdefault.jpg",
                                  html: `<iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FcGz7GeFKeXY%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DcGz7GeFKeXY&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FcGz7GeFKeXY%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" width="940" height="528" scrolling="no" title="YouTube embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>`,
                                  type: "video",
                                },
                              ],
                              group: "",
                            })}
                          </script>
                        </a>
                        <h1 className="heading is--medium is--four">
                          Our Story
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="story-image-container">
                    <img
                      src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cb5e8139d2842612d72f1_Untitled (1200 × 1200 px) (4).webp"
                      loading="lazy"
                      id="w-node-_87786e32-35ef-1d7a-821b-ac8ccca598f3-8788ec77"
                      srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cb5e8139d2842612d72f1_Untitled%20(1200%20%C3%97%201200%20px)%20(4)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cb5e8139d2842612d72f1_Untitled%20(1200%20%C3%97%201200%20px)%20(4)-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cb5e8139d2842612d72f1_Untitled%20(1200%20%C3%97%201200%20px)%20(4)-p-1080.webp 1080w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cb5e8139d2842612d72f1_Untitled%20(1200%20%C3%97%201200%20px)%20(4).webp 1200w"
                      sizes="(max-width: 479px) 96vw, (max-width: 991px) 46vw, (max-width: 1919px) 47vw, 48vw"
                      alt=""
                      className="store__image"
                    />
                  </div>
                </div>
                <div
                  id="w-node-d31f5977-2653-de63-7fc2-d01bda44f0a8-8788ec77"
                  className="extra-grid-block is--two"
                >
                  <div className="grid-inner-block">
                    <div className="merch-heading">
                      <h1 className="heading is--medium is--four">Merch</h1>
                    </div>
                  </div>
                  <img
                    src="../assets.website-files.com/631a8e22c06cc03d5f88ec76/631cd7eb92aded95fc2bb8c7_ezgif.com-gif-maker%20(12).gif"
                    loading="lazy"
                    id="w-node-d31f5977-2653-de63-7fc2-d01bda44f0aa-8788ec77"
                    alt=""
                    className="shirts__gif"
                  />
                  <div className="_8-bit-bg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer wf-section">
        <div className="social-wrapper">
          <a href="#" className="social-link w-inline-block">
            <img
              src="https://assets.website-files.com/61132e18712b0b04959a13ad/61132ea954635014c5dbf94e_Instagram.svg"
              loading="lazy"
              width="24"
              alt=""
              className="image-8"
            />
          </a>
          <a href="#" className="social-link w-inline-block">
            <img
              src="https://assets.website-files.com/61132e18712b0b04959a13ad/61132ead53ac64e0d1292887_Twitter.svg"
              loading="lazy"
              alt=""
              className="image-8"
            />
          </a>
          <a href="#" className="social-link w-inline-block">
            <img
              src="https://assets.website-files.com/61132e18712b0b04959a13ad/61132eb01bd86f5c435a59de_Whatsapp.svg"
              loading="lazy"
              alt=""
              className="image-8"
            />
          </a>
        </div>
        <div className="swirl-bg"></div>
        <div className="_8-bit-bg"></div>
        <div className="footer-navigation is--main">
          <div className="footer__container">
            <div className="w-layout-grid footer__grid is--first">
              <div
                id="w-node-_2283bff4-62b5-6298-d314-45784ffdc628-8788ec77"
                className="footer__link__column"
              >
                <div
                  id="w-node-_2283bff4-62b5-6298-d314-45784ffdc62e-8788ec77"
                  className="footer__link__column"
                >
                  <a href="#" className="nav-link is--footer">
                    SHOP ALL
                  </a>
                </div>
              </div>
              <div
                id="w-node-bdcd875a-ba35-a4d9-1ac5-0794740f83e4-8788ec77"
                className="footer__link__column"
              >
                <div
                  id="w-node-bdcd875a-ba35-a4d9-1ac5-0794740f83e5-8788ec77"
                  className="footer__link__column"
                >
                  <a href="#" className="nav-link is--footer">
                    NEW ARRIVALS
                  </a>
                </div>
              </div>
              <div
                id="w-node-_64f2fb7e-25fd-474f-0bee-2c82f7d0eb89-8788ec77"
                className="footer__link__column"
              >
                <div
                  id="w-node-_64f2fb7e-25fd-474f-0bee-2c82f7d0eb8a-8788ec77"
                  className="footer__link__column"
                >
                  <a href="#" className="nav-link is--footer">
                    MENU
                  </a>
                </div>
              </div>
              <div
                id="w-node-_678a2353-37b8-bb2a-2773-55e429e98b94-8788ec77"
                className="footer__link__column"
              >
                <div
                  id="w-node-_678a2353-37b8-bb2a-2773-55e429e98b95-8788ec77"
                  className="footer__link__column"
                >
                  <a href="#" className="nav-link is--footer">
                    ABOUT
                  </a>
                </div>
              </div>
              <div
                id="w-node-_282b9e28-94cc-610e-800f-4a14e977c3c0-8788ec77"
                className="footer__link__column"
              >
                <div
                  id="w-node-_282b9e28-94cc-610e-800f-4a14e977c3c1-8788ec77"
                  className="footer__link__column"
                >
                  <a href="#" className="nav-link is--footer">
                    MERCH
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_2283bff4-62b5-6298-d314-45784ffdc65f-8788ec77"
            className="footer-image"
          >
            <img
              src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cea8d1b6e4ae681ecb10b_Untitled (2880 × 1700 px) (4).webp"
              loading="eager"
              srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cea8d1b6e4ae681ecb10b_Untitled%20(2880%20%C3%97%201700%20px)%20(4)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cea8d1b6e4ae681ecb10b_Untitled%20(2880%20%C3%97%201700%20px)%20(4)-p-800.webp 800w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cea8d1b6e4ae681ecb10b_Untitled%20(2880%20%C3%97%201700%20px)%20(4)-p-1080.webp 1080w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cea8d1b6e4ae681ecb10b_Untitled%20(2880%20%C3%97%201700%20px)%20(4)-p-1600.webp 1600w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cea8d1b6e4ae681ecb10b_Untitled%20(2880%20%C3%97%201700%20px)%20(4)-p-2000.webp 2000w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cea8d1b6e4ae681ecb10b_Untitled%20(2880%20%C3%97%201700%20px)%20(4)-p-2600.webp 2600w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631cea8d1b6e4ae681ecb10b_Untitled%20(2880%20%C3%97%201700%20px)%20(4).webp 2880w"
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 96vw, (max-width: 2969px) 97vw, 2880px"
              alt=""
              className="footer__image is-desktop"
            />
            <img
              src="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ceda2d44a432dac8df2c3_Untitled design (34).webp"
              loading="lazy"
              srcSet="https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ceda2d44a432dac8df2c3_Untitled%20design%20(34)-p-500.webp 500w, https://assets.website-files.com/631a8e22c06cc03d5f88ec76/631ceda2d44a432dac8df2c3_Untitled%20design%20(34).webp 600w"
              sizes="(max-width: 479px) 94vw, 100vw"
              alt=""
              className="footer__image is--mobile"
            />
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <ScriptTagComponent />
      <WebflowScriptLoader />
    </>
  );
}

"use client";

import "./globals.css";
import React, { useEffect } from "react";

const AddWebflowClasses: React.FC = () => {
  useEffect(() => {
    const htmlElement = document.documentElement;
    const classPrefix = " w-mod-";

    // Add "w-mod-js" class to the html element
    htmlElement.className += `${classPrefix}js`;

    // Add "w-mod-touch" if the device supports touch
    if ("ontouchstart" in window) {
      htmlElement.className += `${classPrefix}touch`;
    }
  }, []);

  return null; // The component doesn't render anything visually
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-wf-domain="eatrocketfuel.webflow.io"
      data-wf-page="631a8e22c06cc0608788ec77"
      data-wf-site="631a8e22c06cc03d5f88ec76"
    >
      <head>
        <meta charSet="utf-8" />
        <title>Rocket Fuel</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link
          href="../assets.website-files.com/631a8e22c06cc03d5f88ec76/css/eatrocketfuel.webflow.aeb5e72de.css"
          rel="stylesheet"
          type="text/css"
        />
        <style>
          {`
        @media (min-width:992px) {
          html.w-mod-js:not(.w-mod-ix) [data-w-id="a202533c-eeb6-b450-f213-abe1c255325b"] {
            transform: translate3d(460px, 0, 0) scale3d(1, 1, 1);
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="8d58cb7a-0ead-a0e1-7a57-037cab026b4d"] {
            transform: translate3d(0, 0, 0) scale3d(0, 0, 1);
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="75ca43f6-0f16-0799-7669-4025230e42f0"] {
            transform: translate3d(0, 161px, 0) scale3d(1, 1, 1);
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="35005f04-8b88-11a9-b0f2-674e89d72803"] {
            opacity: 0;
            transform: translate3d(48px, 48px, 0) scale3d(1, 1, 1);
          }
          html.w-mod-js:not(.w-mod-ix) [data-w-id="1526f0a5-46a0-eb24-a254-618ec57f5d7d"] {
            transform: translate3d(800px, 0, 0) scale3d(1, 1, 1);
          }
        }

        @media (max-width:991px) and (min-width:768px) {
          html.w-mod-js:not(.w-mod-ix) [data-w-id="a202533c-eeb6-b450-f213-abe1c255325b"] {
            transform: translate3d(460px, 0, 0) scale3d(1, 1, 1);
          }
          /* Additional styles for this media query */
        }

        @media (max-width:767px) and (min-width:480px) {
          html.w-mod-js:not(.w-mod-ix) [data-w-id="9ebac82f-b130-07d0-62d9-37b83a6902f0"] {
            transform: translate3d(-500px, 0px, 0) scale3d(1, 1, 1) rotateY(-180deg);
            transform-style: preserve-3d;
          }
          /* Additional styles for this media query */
        }

        @media (max-width:479px) {
          html.w-mod-js:not(.w-mod-ix) [data-w-id="9ebac82f-b130-07d0-62d9-37b83a6902f0"] {
            transform: translate3d(-500px, 0px, 0) scale3d(1, 1, 1) rotateY(-180deg);
            transform-style: preserve-3d;
          }
          /* Additional styles for this media query */
        }
      `}
        </style>
        <AddWebflowClasses />
        <link
          href="../assets.website-files.com/631a8e22c06cc03d5f88ec76/631cf89760e214279134a3d6_dfg.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="../assets.website-files.com/631a8e22c06cc03d5f88ec76/631cf89906796a403253be3d_Untitled%20design%20(35).png"
          rel="apple-touch-icon"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

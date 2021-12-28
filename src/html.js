import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var customViewportCorrectionVariable = 'vh';

            function setViewportProperty(doc) {
              var prevClientHeight;
              var customVar = '--' + ( customViewportCorrectionVariable || 'vh' );
              function handleResize() {
                var clientHeight = doc.clientHeight;
                if (clientHeight === prevClientHeight) return;
                requestAnimationFrame(function updateViewportHeight(){
                  doc.style.setProperty(customVar, (clientHeight * 0.01) + 'px');
                  prevClientHeight = clientHeight;
                });
              }
              handleResize();
              return handleResize;
            }
            window.addEventListener('resize', setViewportProperty(document.documentElement));
        `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

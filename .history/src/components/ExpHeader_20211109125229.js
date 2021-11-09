import React from "react";
import './E'

export default function ExpHeader() {
  return (
    <div>
      <>
        <Wrapper>
          <Video autoPlay={true} loop={true}>
            <source
              data-src="/wp-content/uploads/2017/11/waka-aa.webm"
              type="video/webm"
              src="https://www.somoswaka.com/wp-content/uploads/2017/11/waka-aa.webm"
            />
            <source
              data-src="/wp-content/uploads/2017/11/waka-aa.mp4"
              type="video/mp4"
              src="https://www.somoswaka.com/wp-content/uploads/2017/11/waka-aa.mp4"
            />
          </Video>
        </Wrapper>
      </>
    </div>
  );
}

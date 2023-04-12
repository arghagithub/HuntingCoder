import React from "react";

const Fake = () => {
  return (
    <>
      <style jsx global>
        {`
            .fake{
                color:red;
            }
        `}
      </style>
      <div className="fake">It is a fake JavaScript</div>
    </>
  );
};

export default Fake;

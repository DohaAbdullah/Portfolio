import React from "react";

const PdfViewer = ({ pdf }) => {
  return (
    <div>
      <object
        data={`${process.env.PUBLIC_URL}/pdfs/${pdf}`}
        type="application/pdf"
        width="100%"
        height="600px"
      >
        <p>sorry </p>
      </object>
    </div>
  );
};

export default PdfViewer;

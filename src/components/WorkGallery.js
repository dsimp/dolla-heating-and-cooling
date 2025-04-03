import React from "react";

function WorkGallery() {
  const workImages = [
    "/assets/images/work1.jpg",
    "/assets/images/work2.jpg",
    "/assets/images/work3.jpg",
  ];

  return (
    <section>
      <h2>Our Work</h2>
      <div className="gallery">
        {workImages.map((image, index) => (
          <img key={index} src={image} alt={`Work ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default WorkGallery;

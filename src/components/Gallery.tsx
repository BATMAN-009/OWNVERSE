import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder gallery images with descriptions
  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800", alt: "Tech Conference Keynote" },
    { id: 2, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800", alt: "Workshop Session" },
    { id: 3, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800", alt: "Panel Discussion" },
    { id: 4, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800", alt: "University Lecture" },
    { id: 5, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800", alt: "Corporate Training" },
    { id: 6, src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800", alt: "Startup Pitch Event" },
    { id: 7, src: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800", alt: "Innovation Summit" },
    { id: 8, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800", alt: "Growth Marketing Workshop" }
  ];

  return (
    <section className="bg-background py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Glimpses of My Talks</h2>
          <p className="text-muted-foreground text-lg">
            Moments captured from conferences, workshops, and speaking engagements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg aspect-square relative"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4">
                {galleryImages[selectedImage].alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
const brands = [
    {
        image: '/brands/chrome.png',
        alt: 'Chrome Hearts',
        url: 'https://www.chromehearts.com'
    },
    {
        image: '/brands/denimTears.png',
        alt: 'Denim Tears',
        url: 'https://denimtears.com/do/'
    },
    {
        image: '/brands/erickemmanuel.png',
        alt: 'erick emmanuel',
        url: 'https://www.ericemanuel.com'  
    },
    {
        image: '/brands/essentials.png',
        alt: 'essentials',
        url: 'https://fearofgod.com/en-do'
    },
    {
        image: '/brands/galleryDept.png',
        alt: 'Gallery Dept',
        url: 'https://www.chromehearts.com'
    },
    {
        image: '/brands/NB.png',
        alt: 'New Balance',
        url: 'https://www.newbalance.com'
    },
    {
        image: '/brands/Nike.png',
        alt: 'Nike',
        url: 'https://www.nike.com/es/'
    },
    {
        image: '/brands/RHUDE.png',
        alt: 'RHUDE',
        url: 'https://rh-ude.com'
    },
    {
        image: '/brands/YZY.png',
        alt: 'Yezzy',
        url: 'https://www.adidas.com/us'
    },
    {
        image: '/brands/Godspeed.png',
        alt: 'Godspeed',
        url: 'https://www.godspeednewyork.com'
    },
    {
        image: '/brands/Hellstar_Logo.png',
        alt: 'Hellstar',
        url: 'https://www.hellstar.com'
    },
    {
        image: '/brands/AntiSocial.png',
        alt: 'Anti Social Club',
        url: 'https://www.antisocialsocialclub.com'
    },
]

export const Brands = () => {
  return (
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-6 pt-16 pb-12">
          <h2 className="font-bold text-5xl text-black">Brands available</h2>

          <p className="w-full max-w-2xl text-lg text-black">
              Discover our exclusive collection of clothing from top brands at unbeatable prices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 mt-8 justify-center">
              {brands.map((brand, index) => (
                  <a
                      key={index}
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center h-32 w-32 md:h-40 md:w-40 bg-gradient-to-b from-black/10 via-black/5 to-transparent px-6 py-4 rounded-lg hover:opacity-80"
                  >
                      <img
                          src={brand.image}
                          alt={brand.alt}
                          className="w-24 h-24 object-contain"
                      />
                  </a>
              ))}
          </div>
      </div>
  );
};

  
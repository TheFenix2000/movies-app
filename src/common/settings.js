export const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
        {
            breakpoint: 1780,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
        {
            breakpoint: 1670,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
        {
            breakpoint: 1500,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
        {
            breakpoint: 1270,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
}
$(document).ready(function () {
    carouselSliderHeader()
  
  
});
function carouselSliderHeader() {
    $(".carousel-container").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        nav : true,
        navText:[`<svg width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.19102 0.411892L9.80802 1.58789L2.23602 11.9999L9.80902 22.4119L8.19202 23.5879L0.19202 12.5879C-0.0629797 12.2369 -0.0629797 11.7629 0.19202 11.4119L8.19102 0.411892Z" fill="#fff"/>
        </svg>
        `, `<svg width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.80899 23.5881L0.191994 22.4121L7.76399 12.0001L0.190994 1.58811L1.80799 0.412109L9.80799 11.4121C10.063 11.7631 10.063 12.2371 9.80799 12.5881L1.80899 23.5881Z" fill="#fff"/>
        </svg>
        `],
        items: 1,
        dotsData: true,

    });
}
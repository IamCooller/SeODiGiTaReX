$(document).ready(function() {
    $('.results__slider_for').slick({
        arrows: false,
        centerMode: false,
        asNavFor: '.results__slider_nav'
    });
    $('.results__slider_nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.results__slider_for',
        dots: true,
        prevArrow: '<svg class="slick-prev" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="26" cy="26" r="26" fill="url(#paint0_linear)"/><path d="M23.3918 26.6798C23.1141 26.3951 22.958 26.0091 22.958 25.6066C22.958 25.2041 23.1141 24.8181 23.3918 24.5335L30.1848 17.5724C30.4547 17.2861 30.604 16.9027 30.6006 16.5047C30.5972 16.1067 30.4414 15.726 30.1667 15.4446C29.892 15.1632 29.5204 15.0035 29.132 15.0001C28.7435 14.9966 28.3693 15.1496 28.0899 15.4261L21.3013 22.3871C20.4681 23.2411 20 24.3991 20 25.6066C20 26.8141 20.4681 27.9721 21.3013 28.8261L28.0958 35.7871C28.3752 36.0636 28.7495 36.2166 29.1379 36.2131C29.5264 36.2097 29.898 36.0501 30.1727 35.7686C30.4474 35.4872 30.6032 35.1065 30.6065 34.7085C30.6099 34.3105 30.4606 33.9271 30.1907 33.6408L23.3918 26.6798Z" fill="white"/><defs><linearGradient id="paint0_linear" x1="21.7525" y1="-3.65625" x2="49.4762" y2="54.1139" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBF60"/><stop offset="1" stop-color="#FF8227"/></linearGradient></defs></svg>',
        nextArrow: '<svg class="slick-next" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="26" transform="matrix(-1 0 0 1 26 26)" fill="url(#paint0_linear)"/><path d="M28.6082 26.6798C28.8859 26.3951 29.042 26.0091 29.042 25.6066C29.042 25.2041 28.8859 24.8181 28.6082 24.5335L21.8152 17.5724C21.5453 17.2861 21.396 16.9027 21.3994 16.5047C21.4028 16.1067 21.5586 15.726 21.8333 15.4446C22.108 15.1632 22.4796 15.0035 22.868 15.0001C23.2565 14.9966 23.6307 15.1496 23.9101 15.4261L30.6987 22.3871C31.5319 23.2411 32 24.3991 32 25.6066C32 26.8141 31.5319 27.9721 30.6987 28.8261L23.9042 35.7871C23.6248 36.0636 23.2505 36.2166 22.8621 36.2131C22.4736 36.2097 22.102 36.0501 21.8273 35.7686C21.5526 35.4872 21.3968 35.1065 21.3935 34.7085C21.3901 34.3105 21.5394 33.9271 21.8093 33.6408L28.6082 26.6798Z" fill="white"/><defs><linearGradient id="paint0_linear" x1="21.7525" y1="-3.65625" x2="49.4762" y2="54.1139" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBF60"/><stop offset="1" stop-color="#FF8227"/></linearGradient> </defs>  </svg> ',
        focusOnSelect: true
    });

})
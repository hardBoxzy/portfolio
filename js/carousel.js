
    // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: true,
      slidesToShow: 2,
  slidesToScroll: 1,
    fade: false, 
    speed: 700,
    
      responsive: [
    {
      breakpoint: 768, // 画面幅が768px以下になったら
      settings: {
        arrows: false, // ドットナビゲーションを非表示にする
        slidesToShow: 1,   // 1分割（1枚表示）に変える
        slidesToScroll: 1  // 1枚ずつスクロールする
      }
    }
  ]
  });
  

//  $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });
		
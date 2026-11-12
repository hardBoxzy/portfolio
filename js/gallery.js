// サムネイルギャラリー：クリックしたサムネの画像を下に大きく表示する
$(function () {
  $('.gallery').each(function () {
    var $gallery = $(this);
    var $mainImg = $gallery.find('.gallery-main-img');
    var $caption = $gallery.find('.gallery-caption');

    $gallery.on('click', '.gallery-thumb', function () {
      var $thumb = $(this);
      var $img = $thumb.find('img');
      var label = $thumb.attr('title') || $img.attr('alt') || '';

      $gallery.find('.gallery-thumb').removeClass('is-active');
      $thumb.addClass('is-active');

      $mainImg.attr({ src: $img.attr('src'), alt: label });
      $caption.text(label);
    });
  });
});

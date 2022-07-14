$(function () {
  $('.sale').slick({
    infinite: true, //양방향 무한 모션
    autoplay: true, //자동 스크롤 사용 여부
    autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    slidesToShow: 4, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    arrows: false,
    dots: true
  });
});
$(function () {
  $('#jeonghan').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4'],
    responsiveWidth: 1000,
    afterLoad: function (anchorLink, index) {
      console.log('현재 영역의 번호는' + index);
          // 숫자 네비 active 처리
    $('.custom-nav li').removeClass('active');
    $('.custom-nav li[data-index="' + index + '"]').addClass('active');
    }
  });

  $('.custom-nav li').on('click', function () {
    var index = $(this).data('index');
    $.fn.fullpage.moveTo(index);
  });

  // GoTop 클릭 시 맨 위 섹션으로 이동
  $('.gotop').on('click', function () {
    $.fn.fullpage.moveTo(1);
  });

  // 슬라이드 썸네일 클릭 시 해당 모달 열기
  $('.swiper-slide').on('click', function () {
    $('.custom-nav').addClass('on')
    var id = $(this).data('id');
    $('.modal').hide().removeClass('show');
    var targetModal = $('.modal[data-id="' + id + '"]');
    targetModal.fadeIn(500, function () {
      $(this).addClass('show');
    });
  });

  // 모달 닫기 버튼
  $('.close').on('click', function () {
    $('.custom-nav').removeClass('on')
    var modal = $(this).closest('.modal');
    modal.removeClass('show');

    setTimeout(function () {
      modal.fadeOut(200);
      var video = modal.find('video').get(0);
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    },200);
  });

  $('.custom-pagination img').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
  })
});
$(document).on('keydown', function (e) {
  if (e.key === "Escape") {
    $('.modal.show .close').click();
  }
});
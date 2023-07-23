
$(function() {

	// ハンバーガーメニュー
	$('.toggle-btn').on('click', function() {
		if($('#header').hasClass('open')) {
			$('#header').removeClass('open');
		} else {
			$('#header').addClass('open');
		}
	});

	// #maskエリアをクリックした時にメニューを閉じる
	$('#mask').on('click', function() {
		$('#header').removeClass('open');
	});

	// リンクをクリックした時にメニューを閉じる
	$('#navi a').on('click', function() {
		$('#header').removeClass('open');
	});

	// スムーススクロール
	// ページ内リンクのイベント
	$('a[href^="#"]').click(function() {
		// リンクを取得
		let href = $(this).attr("href");
		// ジャンプ先のid名をセット
		let target = $(href == "#" || href == "" ? 'html' : href);
		// トップからジャンプ先の要素までの距離を取得
		let position = target.offset().top;
		// animateでスムーススクロールを行う
		// 600はスクロール速度、単位はミリ秒
		$("html, body").animate({scrollTop:position}, 600, "swing");
		return false;
	});

	// pick up カルーセルスライダー
	$('.slick-area').slick({
		autoplay: true,
		infinite: true,
		dots: true,
		arrows: true,
		// centerMode: true,
		centerPadding: '100px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerPadding: '50px',
					slidesToShow: 1
				}
			}
		]
	});

	// スクロール時の画像フェード表示
	$(window).scroll(function() {

		$('.fadein').each(function() {
			// スクロールした距離
			let scroll = $(window).scrollTop();
			// fadeinクラスの要素までの距離
			let target = $(this).offset().top;
			// 画面の高さ
			let windowHeight = $(window).height();
			// fadeinクラスの要素が画面下に来てから200px通過したら、要素を表示
			if(scroll > target - windowHeight + 200) {
				$(this).css('opacity', '1');
				$(this).css('transform', 'translateY(0)');
			}
		});

	});

});





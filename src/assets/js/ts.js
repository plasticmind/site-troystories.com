window.addEventListener('load', function () {
  
  // Only activate masonry and infinite scroll if story list component exists on the page
  var storyList = document.querySelector( '.story-list' );
  if( typeof( storyList ) != 'undefined' && storyList != null ){
    
    // Dummy link for storing path (for tracking analytics with infScroll)
    let link = document.createElement('a');

    // Masonry
    let msnry = new Masonry( '.story-list', {
      percentPosition: true,
      itemSelector: 'article.story',
      columnWidth: ".grid-sizer"
    });

    // Infinite Scroll

    let infScroll = new InfiniteScroll( '.story-list', {
      path: '.pagination__next',
      append: 'article.story',
      history: false,
      outlayer: msnry,
      hideNav: '.site-pagination'
    }).on( 'append', function( event, response, path ) {
      link.href = response;
      // console.log( location + link.pathname.slice(1) );
      // ga( 'set', 'page', link.pathname.slice(1) );
      // ga( 'send', 'pageview' );
      // ga( 'send', 'event', 'Scroll Pageview', link.pathname.slice(1) );
      gtag('event', 'page_view', {
        page_location: link.pathname.slice(1);
      });
    });

  }

  // Animated script header

  //if(!Cookies.get('returning_visitor')) {

  /*
		document.body.className += ' ' + 'animate';

		//paths = $('.site-header .logo path:not(defs path)');
    let paths = document.querySelectorAll('.site-header .logo path:not(defs path)');
		paths.forEach((path) => {
		    path.style.strokeDasharray = path.style.strokeDashoffset = path.getTotalLength();
		});

		let tl = new TimelineMax();
		let e = Power0.easeIn;
		let d = 1; 

		tl.add([
		    TweenLite.to(paths.eq(0), .3, {strokeDashoffset: 0, delay: d+0, ease: e}), // T
		    TweenLite.to(paths.eq(1), .3, {strokeDashoffset: 0, delay: d+0.4, ease: e}), // T
		    TweenLite.to(paths.eq(2), 1, {strokeDashoffset: 0, delay: d+.8, ease: e}), // ro
		    TweenLite.to(paths.eq(3), .5, {strokeDashoffset: 0, delay: d+1.9, ease: e}), // y

		    TweenLite.to(paths.eq(4), .5, {strokeDashoffset: 0, delay: d+3}), // S
		   	TweenLite.to(paths.eq(5), .15, {strokeDashoffset: 0, delay: d+3.5}), // t
		    TweenLite.to(paths.eq(6), 1, {strokeDashoffset: 0, delay: d+3.65}), // ori
		    TweenLite.to(paths.eq(7), .15, {strokeDashoffset: 0, delay: d+4.80}), // i
		    TweenLite.to(paths.eq(8), .5, {strokeDashoffset: 0, delay: d+5.0}), // es

		]).timeScale(2);

//		$('.site-header .logo').mouseenter(function() { tl.pause(); });
		//$('.site-header .logo').mouseleave(function() { tl.play(); });	

		// Cookies.set('returning_visitor', '1', { expires: 1 });
	// }
*/
});
window.addEventListener('load', function () {
    
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
    ga( 'set', 'page', link.pathname.slice(1) );
    ga( 'send', 'pageview' );
    ga( 'send', 'event', 'Scroll Pageview', link.pathname.slice(1) );
  });

  
});
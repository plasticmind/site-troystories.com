window.addEventListener('load', function () {
    
  // init Masonry
  let msnry = new Masonry( '.story-list', {
    percentPosition: true,
    itemSelector: 'article.story',
    columnWidth: ".grid-sizer"
  });

  // init Infinite Scroll
  let infScroll = new InfiniteScroll( '.story-list', {
    path: '.pagination__next',
    append: '.story',
    history: false,
    outlayer: msnry,
    hideNav: '.site-pagination'
  });

  /*
  // Add GA Pageviews
  function listener(event, response, path) {
    console.log('infinite scroll happened');
    link.href = path;
    ga( 'set', 'page', link.pathname );
    ga( 'send', 'pageview' );
  }
  // link used to get absolute path, beginning with /
  let link = document.createElement('a'); 

  // add event listener
  infScroll.on( 'append.infiniteScroll', listener);
  */  
});
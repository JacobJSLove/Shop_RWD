function init() {
  const imgDefer = document.getElementsByTagName( 'img' );
  for ( let i = 0; i < imgDefer.length; i++ ) {
    if ( imgDefer[ i ].getAttribute( 'data-src' ) ) {
      imgDefer[ i ].setAttribute( 'src', imgDefer[ i ].getAttribute( 'data-src' ) );
    }
  }
}
window.onload = init;
  $( ".topmenu__logo--hamburger" ).click(function() {
    $( ".topmenu__navbar" ).toggleClass( "opened" );
    $('body').toggleClass('stop-scrolling')
    $( ".topmenu__logo--hamburger" ).toggleClass( "opened");
  });
  $(".dropdown").click(function() {
    $( this ).children('ul').toggleClass( "hidden" )
  }); 
$( () => {
  const cart = {
    amount: 0,
    value: 0
  };
  $( '.gallery .orange' ).click( function(){
    const price = ( $( this ).closest( 'li' ).find( 'h5' ).text() );
    const priceNumber = price.match( /\d+\W+\d+/ );
    cart.value += parseFloat( priceNumber );
    cart.amount ++;
    $( '#cart' ).text( `${cart.value.toFixed( 2 )  } zł/prod. (${ cart.amount  })` );
  } );

} );

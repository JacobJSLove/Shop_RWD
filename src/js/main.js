function init() {
  const imgDefer = document.getElementsByTagName( 'img' );
  for ( let i = 0; i < imgDefer.length; i++ ) {
    if ( imgDefer[ i ].getAttribute( 'data-src' ) ) {
      imgDefer[ i ].setAttribute( 'src', imgDefer[ i ].getAttribute( 'data-src' ) );
    }
  }
}
window.onload = init;
  $( ".menu--hamburger" ).click(function() {
    $( ".navbar ul" ).toggleClass( "opened", "opened" );
    $( ".menu--hamburger" ).toggleClass( "opened", "opened" );
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

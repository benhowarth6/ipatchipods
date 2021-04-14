jQuery(function($) {

  // bind change event to select
  $('#location').on('change', function() {
    var url = $(this).val(); // get selected value
    if (url) { // require a URL
      window.location = url; // redirect
    }
    return false;
  });

  var hashtable = {};
  hashtable['iPhone 11 Pro Max'] = 'iphone/iphone-11-pro-max-repair.html';
  hashtable['iPhone 11 Pro'] = 'iphone/iphone-11-pro-repair.html';
  hashtable['iPhone 11'] = 'iphone/iphone-11-repair.html';
  hashtable['iPhone XS Max'] = 'iphone/iphone-xs-max-repair.html';
  hashtable['iPhone XS'] = 'iphone/iphone-xs-repair.html';
  hashtable['iPhone XR'] = 'iphone/iphone-xr-repair.html';
  hashtable['iPhone X'] = 'iphone/iphone-x-repair.html';
  hashtable['iPhone SE (2nd Generation)'] = 'iphone/iphone-se-2-repair.html';
  hashtable['iPhone 8 Plus'] = 'iphone/iphone-8-plus-repair.html';
  hashtable['iPhone 8'] = 'iphone/iphone-8-repair.html';
  hashtable['iPhone 7 Plus'] = 'iphone/iphone-7-plus-repair.html';
  hashtable['iPhone 7'] = 'iphone/iphone-7-repair.html';
  hashtable['iPhone 6S Plus'] = 'iphone/iphone-6s-plus-repair.html';
  hashtable['iPhone 6S'] = 'iphone/iphone-6s-repair.html';
  hashtable['iPhone 6 Plus'] = 'iphone/iphone-6-plus-repair.html';
  hashtable['iPhone 6'] = 'iphone/iphone-6-repair.html';
  hashtable['iPhone SE'] = 'iphone/iphone-se-repair.html';
  hashtable['iPhone 5S'] = 'iphone/iphone-5s-repair.html';
  hashtable['iPhone 5C'] = 'iphone/iphone-5c-repair.html';
  hashtable['iPhone 5'] = 'iphone/iphone-5-repair.html';
  hashtable['iPhone 4S'] = 'iphone/iphone-4s-repair.html';
  hashtable['iPhone 4'] = 'iphone/iphone-4-repair.html';
  hashtable['Watch Series 5'] = 'watch/watch-series-5-repair.html';
  hashtable['Watch Series 4'] = 'watch/watch-series-4-repair.html';
  hashtable['Watch Series 3'] = 'watch/watch-series-3-repair.html';
  hashtable['Watch Series 2'] = 'watch/watch-series-2-repair.html';
  hashtable['Watch Series 1'] = 'watch/watch-series-1-repair.html';
  hashtable['Watch 1st Generation'] = 'watch/watch-series-0-repair.html';
  hashtable['iPod Touch 7th Generation'] = 'ipod/ipod-touch-7-repair.html';
  hashtable['iPod Touch 6th Generation'] = 'ipod/ipod-touch-6-repair.html';
  hashtable['iPod Touch 5th Generation'] = 'ipod/ipod-touch-5-repair.html';
  hashtable['iPod Touch 4th Generation'] = 'ipod/ipod-touch-4-repair.html';
  hashtable['iPod Touch 3rd Generation'] = 'ipod/ipod-touch-3-repair.html';
  hashtable['iPod Touch 2nd Generation'] = 'ipod/ipod-touch-2-repair.html';
  hashtable['iPod Classic 6th Generation'] = 'ipod/ipod-classic-6-repair.html';
  hashtable['iPod Classic 5th Generation'] = 'ipod/ipod-classic-5-repair.html';
  hashtable['iPod Classic 4th Generation'] = 'ipod/ipod-classic-4-repair.html';
  hashtable['iPod Classic 3rd Generation'] = 'ipod/ipod-classic-3-repair.html';
  hashtable['iPod Nano 7th Generation'] = 'ipod/ipod-nano-7-repair.html';
  hashtable['iPod Nano 6th Generation'] = 'ipod/ipod-nano-6-repair.html';
  hashtable['iPod Nano 5th Generation'] = 'ipod/ipod-nano-5-repair.html';
  hashtable['iPod Nano 4th Generation'] = 'ipod/ipod-nano-4-repair.html';
  hashtable['iPod Nano 3rd Generation'] = 'ipod/ipod-nano-3-repair.html';
  hashtable['iPod Nano 2nd Generation'] = 'ipod/ipod-nano-2-repair.html';
  hashtable['iPad Pro 12.9-inch 4th Generation'] = 'ipad/ipad-pro-12-4-repair.html';
  hashtable['iPad Pro 12.9-inch 3rd Generation'] = 'ipad/ipad-pro-12-3-repair.html';
  hashtable['iPad Pro 12.9-inch 2nd Generation'] = 'ipad/ipad-pro-12-2-repair.html';
  hashtable['iPad Pro 12.9-inch 1st Generation'] = 'ipad/ipad-pro-12-1-repair.html';
  hashtable['iPad Pro 11-inch 2nd Generation'] = 'ipad/ipad-pro-11-2-repair.html';
  hashtable['iPad Pro 11-inch 1st Generation'] = 'ipad/ipad-pro-11-repair.html';
  hashtable['iPad Pro 10.5-inch'] = 'ipad/ipad-pro-10-repair.html';
  hashtable['iPad Pro 9.7-inch'] = 'ipad/ipad-pro-9-repair.html';
  hashtable['iPad Air 3'] = 'ipad/ipad-air-3-repair.html';
  hashtable['iPad Air 2'] = 'ipad/ipad-air-2-repair.html';
  hashtable['iPad Air'] = 'ipad/ipad-air-repair.html';
  hashtable['iPad Mini 5'] = 'ipad/ipad-mini-5-repair.html';
  hashtable['iPad Mini 4'] = 'ipad/ipad-mini-4-repair.html';
  hashtable['iPad Mini 3'] = 'ipad/ipad-mini-3-repair.html';
  hashtable['iPad Mini 2'] = 'ipad/ipad-mini-2-repair.html';
  hashtable['iPad Mini'] = 'ipad/ipad-mini-1-repair.html';
  hashtable['iPad 7'] = 'ipad/ipad-7-repair.html';
  hashtable['iPad 6'] = 'ipad/ipad-6-repair.html';
  hashtable['iPad 5'] = 'ipad/ipad-5-repair.html';
  hashtable['iPad 4'] = 'ipad/ipad-4-repair.html';
  hashtable['iPad 3'] = 'ipad/ipad-3-repair.html';
  hashtable['iPad 2'] = 'ipad/ipad-2-repair.html';
  hashtable['MacBook'] = 'mac/macbook-repair.html';
  hashtable['MacBook Air'] = 'mac/macbook-air-repair.html';
  hashtable['MacBook Pro'] = 'mac/macbook-pro-repair.html';
  hashtable['iMac'] = 'mac/imac-repair.html';
  hashtable['Mac Mini'] = 'mac/mac-mini-repair.html';

  var locations = {
    'iPhone': ['Select your model', 'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11', 'iPhone XS Max', 'iPhone XS', 'iPhone XR', 'iPhone X', 'iPhone SE (2nd Generation)', 'iPhone 8 Plus', 'iPhone 8', 'iPhone 7 Plus', 'iPhone 7', 'iPhone 6S Plus', 'iPhone 6S', 'iPhone 6 Plus', 'iPhone 6', 'iPhone SE', 'iPhone 5S', 'iPhone 5C', 'iPhone 5', 'iPhone 4S', 'iPhone 4'],
    'Watch': ['Select your model', 'Watch Series 5', 'Watch Series 4', 'Watch Series 3', 'Watch Series 2', 'Watch Series 1', 'Watch 1st Generation'],
    'iPod': ['Select your model', 'iPod Touch 7th Generation', 'iPod Touch 6th Generation', 'iPod Touch 5th Generation', 'iPod Touch 4th Generation', 'iPod Touch 3rd Generation', 'iPod Touch 2nd Generation', 'iPod Classic 6th Generation', 'iPod Classic 5th Generation', 'iPod Classic 4th Generation', 'iPod Classic 3rd Generation', 'iPod Nano 7th Generation', 'iPod Nano 6th Generation', 'iPod Nano 5th Generation', 'iPod Nano 4th Generation', 'iPod Nano 3rd Generation', 'iPod Nano 2nd Generation', ],
    'iPad': ['Select your model', 'iPad Pro 12.9-inch 4th Generation', 'iPad Pro 12.9-inch 3rd Generation', 'iPad Pro 12.9-inch 2nd Generation', 'iPad Pro 12.9-inch 1st Generation', 'iPad Pro 11-inch 2nd Generation', 'iPad Pro 11-inch 1st Generation', 'iPad Pro 10.5-inch', 'iPad Pro 9.7-inch', 'iPad Air 3', 'iPad Air 2', 'iPad Air', 'iPad Mini 5', 'iPad Mini 4', 'iPad Mini 3', 'iPad Mini 2', 'iPad Mini', 'iPad 7', 'iPad 6', 'iPad 5', 'iPad 4', 'iPad 3', 'iPad 2'],
    'Mac': ['Select your model', 'MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'Mac Mini']

  }

  var $locations = $('#location');
  $('#country').change(function() {
    var country = $(this).val(),
      lcns = locations[country] || [];

    var html = $.map(lcns, function(lcn) {
      return '<option value="' + hashtable[lcn] + '">' + lcn + '</option>'
    }).join('');
    $locations.html(html)
  });
});
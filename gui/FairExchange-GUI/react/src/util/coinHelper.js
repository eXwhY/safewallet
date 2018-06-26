export function getCoinTitle(coin) {
  let coinlogo;
  let coinname;
  let transparentBG = false;
  let titleBG = false;
  let hideTitle = false;

  switch (coin) {
    case 'BTCZ':
      coinlogo = 'btcz';
      coinname = 'BitcoinZ';
      break;
    case 'SAFE':
      hideTitle = true;
      titleBG = true;
      transparentBG = true;
      coinlogo = 'safe';
      coinname = 'Safecoin';
      break;
    case 'XSG':
      coinlogo = 'xsg';
      coinname = 'SnowGem';
      break;
    case 'ZEN':
      coinlogo = 'zen';
      coinname = 'ZenCash';
      break;
    case 'SUPERNET':
      titleBG = true;
      coinlogo = 'SUPERNET';
      coinname = 'SUPERNET';
      break;
    case 'JUMBLR':
      titleBG = true;
      transparentBG = true;
      hideTitle = true;
      coinlogo = 'JUMBLR';
      coinname = 'JUMBLR';
      break;
    case 'USD':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'usd';
      coinname = 'US Dollar';
      break;
    case 'RON':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'RON';
      coinname = 'Romanian Leu';
      break;
    case 'EUR':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'EUR';
      coinname = 'Euro';
      break;
    case 'JPY':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'JPY';
      coinname = 'Japanese Yen';
      break;
    case 'GBP':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'GBP';
      coinname = 'British Pound';
      break;
    case 'AUD':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'AUD';
      coinname = 'Australian Dollar';
      break;
    case 'CAD':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'CAD';
      coinname = 'Canadian Dollar';
      break;
    case 'CHF':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'CHF';
      coinname = 'Swiss Franc';
      break;
    case 'NZD':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'NZD';
      coinname = 'New Zealand Dollar';
      break;
    case 'CNY':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'CNY';
      coinname = 'Chinese Yuan';
      break;
    case 'RUB':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'RUB';
      coinname = 'Russian Ruble';
      break;
    case 'MXN':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'MXN';
      coinname = 'Mexican peso';
      break;
    case 'BRL':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'BRL';
      coinname = 'Brazilian Real';
      break;
    case 'INR':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'INR';
      coinname = 'Indian Rupee';
      break;
    case 'HKD':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'HKD';
      coinname = 'Hong Kong Dollar';
      break;
    case 'TRY':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'TRY';
      coinname = 'Turkish Lira';
      break;
    case 'ZAR':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'ZAR';
      coinname = 'South African Rand';
      break;
    case 'PLN':
      titleBG = true;
      transparentBG = true;
      coinlogo = 'PLN';
      coinname = 'Polish Zloty';
      break;
    case 'NOK':
      titleBG = true;
      coinlogo = 'NOK';
      coinname = 'Norwegian Krone';
      break;
    case 'SEK':
      titleBG = true;
      coinlogo = 'SEK';
      coinname = 'Swedish Krona';
      break;
    case 'DKK':
      titleBG = true;
      coinlogo = 'DKK';
      coinname = 'Danish Krone';
      break;
    case 'CZK':
      titleBG = true;
      coinlogo = 'CZK';
      coinname = 'Czech Koruna';
      break;
    case 'HUF':
      titleBG = true;
      coinlogo = 'HUF';
      coinname = 'Hungarian Forint';
      break;
    case 'ILS':
      titleBG = true;
      coinlogo = 'ILS';
      coinname = 'Israeli Shekel';
      break;
    case 'KRW':
      titleBG = true;
      coinlogo = 'KRW';
      coinname = 'Korean Won';
      break;
    case 'MYR':
      titleBG = true;
      coinlogo = 'MYR';
      coinname = 'Malaysian Ringgit';
      break;
    case 'PHP':
      titleBG = true;
      coinlogo = 'PHP';
      coinname = 'Philippine Peso';
      break;
    case 'SGD':
      titleBG = true;
      coinlogo = 'SGD';
      coinname = 'Singapore Dollar';
      break;
    case 'THB':
      titleBG = true;
      coinlogo = 'THB';
      coinname = 'Thai Baht';
      break;
    case 'BGN':
      titleBG = true;
      coinlogo = 'BGN';
      coinname = 'Bulgarian Lev';
      break;
    case 'IDR':
      titleBG = true;
      coinlogo = 'IDR';
      coinname = 'Indonesian Rupiah';
      break;
    case 'HRK':
      titleBG = true;
      coinlogo = 'HRK';
      coinname = 'Croatian Kuna';
      break;
  }

  return {
    logo: coinlogo,
    name: coinname,
    titleBG,
    transparentBG,
  };
}

export function getModeInfo(mode) {
  let modecode;
  let modetip;
  let modecolor;

  switch (mode) {
    case 'native':
      modecode = 'Native';
      modetip = 'Native';
      modecolor = 'primary';
      break;
    case 'spv':
      modecode = 'SPV';
      modetip = 'SPV';
      modecolor = 'info';
      break;
    case 'full':
      modecode = 'Full';
      modetip = 'Full';
      modecolor = 'success';
      break;
    case 'virtual':
      modecode = 'Virtual';
      modetip = 'Virtual';
      modecolor = 'danger';
      break;
    case 'notarychains':
      modecode = 'Notarychains';
      modetip = 'Notarychains';
      modecolor = 'dark';
      break;
  }

  return {
    code: modecode,
    tip: modetip,
    color: modecolor,
  };
}

export function coindList() {
  const _coins = [
    'SAFE',
    'BTCZ',
    'XSG',
    'ZEN',
    'JUMBLR',
    'SUPERNET'
  ];

  return _coins;
}

export const isSafecoinCoin = (coin) => {
  if (coin === 'SUPERNET' ||
      coin === 'JUMBLR' ||
      coin === 'SAFE' ||
      coin === 'BTCZ' ||
      coin === 'XSG' ||
      coin === 'ZEN') {
    return true;
  }
}
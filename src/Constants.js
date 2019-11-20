const prod = {
  url: 'http://127.0.0.1/wordpress',
  consumerKey: 'ck_4d8118bc29b92bd7483f438f65f7a8e60c6e5755',
  consumerSecret: 'cs_e5144bb0431760bef0d2aed28a6d98d3b3aa3a75',
  wpAPI: true,
  version: 'wc/v3'
};

const dev = {
  url: 'http://127.0.0.1/wordpress',
  consumerKey: 'ck_4d8118bc29b92bd7483f438f65f7a8e60c6e5755',
  consumerSecret: 'cs_e5144bb0431760bef0d2aed28a6d98d3b3aa3a75',
  wpAPI: true,
  version: 'wc/v3'
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
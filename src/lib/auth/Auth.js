import React from 'react';
import { Singleton } from "react-singletons";
import WooCommerceAPI from 'woocommerce-api';

class Auth {

  	static woocommerce;

	static getInstance() {
		if (!Auth.woocommerce) {
			Auth.woocommerce = new Singleton(
				new WooCommerceAPI({
					url: 'http://127.0.0.1/wordpress',
					consumerKey: 'ck_017d5e2d84f17442b65667ed27dc8fe96bddcc24',
					consumerSecret: 'cs_9c11376dd94eca961adb224aa176256fc6369ac8',
					wpAPI: true,
					version: 'wc/v3'
				})
			);
	  	}
	  	
	  	return Auth.woocommerce.component;
	}
}

export const WooContext = React.createContext( Auth.getInstance() );
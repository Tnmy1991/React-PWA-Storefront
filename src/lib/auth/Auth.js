import React from 'react';
import { Singleton } from "react-singletons";
import WooCommerceAPI from 'woocommerce-api';
import { config } from '../../Constants';

class Auth {

  	static woocommerce;

	static getInstance() {
		if (!Auth.woocommerce) {
			Auth.woocommerce = new Singleton(
				new WooCommerceAPI({
					url: config.url,
					consumerKey: config.consumerKey,
					consumerSecret: config.consumerSecret,
					wpAPI: config.wpAPI,
					version: config.version
				})
			);
		}
	  	
		return Auth.woocommerce.component;
	}
}

export const WooContext = React.createContext( Auth.getInstance() );
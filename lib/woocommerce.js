import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
    url: process.env.WORDPRESS_URL,
    consumerKey: process.env.WORDPRESS_CONSUMER_KEY,
    consumerSecret: process.env.WORDPRESS_CONSUMER_SECRET,
    version: "wc/v3"
});
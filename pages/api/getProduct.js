import {api} from "../../lib/woocommerce";

const getProduct = async (req, res) => {

    if (!req.query.id) {
        res.status(500).json({
            status: 'Error',
            message: 'Missing ID'
        })
    }

    try {
        const product = await api.get(`products/${req.query.id}`).then(response => response.data);
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({
            status: "Error",
            message: err.message
        })
    }
};

export default getProduct;
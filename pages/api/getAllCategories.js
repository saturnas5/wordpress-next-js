import {api} from "../../lib/woocommerce";

const getAllCategories = async (req, res) => {

    try {
        const categories = await api.get("products/categories").then(response => response.data);
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: err.message,
        });
    }
};

export default getAllCategories;
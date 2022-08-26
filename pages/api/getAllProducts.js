import {api} from "../../lib/woocommerce";

const getAllProducts = async (req, res) => {
    try {
        const data = await api.get("products", {
            per_page: 20,
        }).then((response) => response.data);

        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({message: 'Something went wrong'})
    }
}

export default getAllProducts;
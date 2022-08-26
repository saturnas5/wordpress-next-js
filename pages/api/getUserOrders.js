

const getUserOrders = async (req, res) => {

    const query = `
        {
            orders(first: 20) {
                edges {
                    node {
                        orderNumber
                    }
                }
            }
        }
    `;

    const options = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${req.body.token}`
        },
        body: JSON.stringify({query})
    };

    try {
        const data = await fetch(process.env.WORDPRESS_FETCH_ENDPOINT, options)
            .then(response => response.json());
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: err.message,
        })
    }

};

export default getUserOrders;
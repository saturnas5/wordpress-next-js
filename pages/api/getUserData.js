

const getUserData = async (req, res) => {
    const query = `
        {
            customer(id: "${req.body.userId}") {
                databaseId
                username
                firstName
                lastName
                email
                orderCount
                totalSpent
                date
                shipping {
                    address1
                    address2
                    city
                    company
                    country
                    email
                    firstName
                    lastName
                    phone
                    postcode
                    state
                }
                orders(first: 20) {
                    edges {
                        node {
                            orderNumber
                        }
                    }
                }
            }
        }
    `;

    const options = {
        endpoint: URL,
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${req.body.token}`
        },
        body: JSON.stringify({query})
    };

    const data = await fetch(process.env.WORDPRESS_FETCH_ENDPOINT, options).then(response => response.json())

    res.status(200).json(data)
};

export default getUserData;
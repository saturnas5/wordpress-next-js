

const UpdateUser = async (req, res) => {
    const query = `
        mutation UpdateCustomer {
            updateCustomer(
                input: {id: "${req.body.userId}", firstName: "${req.body.firstName}", lastName: "${req.body.lastName}", email: "${req.body.email}"}
            ) {
                customer {
                    firstName
                    lastName
                    email
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

    try {
        const data = await fetch(process.env.WORDPRESS_FETCH_ENDPOINT, options).then(response => response.json());
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            status: 'Error',
            message: 'Something went wrong'
        })
    }
};

export default UpdateUser;


const login = async (req, res) => {

    const query = `
        mutation LoginUser {
            login( input: {clientMutationId: "login", username: "${req.query.username}", password: "${req.query.password}"}) {
                authToken
                refreshToken
                user {
                    id
                    databaseId
                    name
                }
            }
        }
    `

    const options = {
        endpoint: URL,
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({query})
    }

    try {
        const data = await fetch(process.env.WORDPRESS_FETCH_ENDPOINT, options).then(response => response.json())
        if (!data.data.login) {
            res.status(404).json({
                status: 'Error',
                message: 'User not found'
            })
            return;
        }
        res.status(200).json(data.data)
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}

export default login;
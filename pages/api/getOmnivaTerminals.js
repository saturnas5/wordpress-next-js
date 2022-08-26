const URL = process.env.OMNIVA_TERMINALS_ENDPOINT;

const getOmnivaTerminals = async (req, res) => {
    try {
        const data = await fetch(URL).then(response => response.json());
        console.log(req)
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({message: 'data not fetched'});
    }
};

export default getOmnivaTerminals;
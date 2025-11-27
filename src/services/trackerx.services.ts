const baseURL = import.meta.env.VITE_BASE_URL;

const getAllSubscriptions = async (token: string) => {
    try {
        const response = await fetch(`${baseURL}/api/subscriptions?page=1&limit=100`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export {
    getAllSubscriptions
}
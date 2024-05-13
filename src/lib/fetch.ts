import axios from "axios"

export const fetcher = async () => {
    try {
        const { data } = await axios("https://picsum.photos/v2/list?limit=25")
        return data
    } catch (error) {
        throw new Error("Failed to fetch data")
    }
    
}
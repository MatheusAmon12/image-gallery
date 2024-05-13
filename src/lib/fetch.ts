import axios from "axios"

export const fetcher = async () => {
    try {
        const { data } = await axios("https://jsonplaceholder.typicode.com/photos")
        return data.slice(0, 20)
    } catch (error) {
        throw new Error("Failed to fetch data")
    }
    
}
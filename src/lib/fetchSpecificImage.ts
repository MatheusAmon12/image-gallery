import axios from "axios"

export const fetchSpecificImage = async (imageId: string) => {
    try {
        const { data } = await axios(`https://picsum.photos/id/${imageId}/info`)
        return data
    } catch (error) {
        throw new Error("Failed to fetch data")
    }
}
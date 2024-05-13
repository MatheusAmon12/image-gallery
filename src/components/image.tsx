import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { fetcher } from "@/lib/fetch";

interface Image {
    author: string,
    download_url: string,
    height: number,
    id: string,
    url: string,
    width: number,
}

const Image = () => {
    const [images, setImages] = useState<Image[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const imagesFromApi = await fetcher()
            setImages(imagesFromApi)
        }
        fetchData()
    }, [])

    return (
        <>
            {
                images.map((image) => (
                    <Card key={image.id} className="w-auto border-none shadow-none bg-transparent">
                        <CardContent className="h-auto p-2">
                            <img src={image.download_url} alt={image.author} loading="lazy" className="w-full min-h-48 max-h-48 hover:scale-105 cursor-pointer rounded-md object-cover" />
                        </CardContent>
                    </Card>
                ))
            }
        </> 
    );
}
 
export default Image;
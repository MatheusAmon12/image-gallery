import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { fetcher } from "@/lib/fetch";

interface Image {
    albumId: number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string
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
                    <Card key={image.id}>
                        <CardContent>
                            <img src={image.url} alt={image.title} loading="lazy" className="w-full h-auto" />
                        </CardContent>
                        <CardFooter>
                            <h1>{image.title}</h1>
                        </CardFooter>
                    </Card>
                ))
            }
        </> 
    );
}
 
export default Image;
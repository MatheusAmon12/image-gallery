import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { fetcher } from "@/lib/fetch";
import { fetchSpecificImage } from "@/lib/fetchSpecificImage";
import Modal from "./modal";
import { Skeleton } from "./ui/skeleton";

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
    const [specificImage, setSpecificImage] = useState<Image>()
    const [openModal, setOpenModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const imagesFromApi = await fetcher()
            setImages(imagesFromApi)
        }
        fetchData()
    }, [])

    const handleImageClick = (id: string) => {
        const fetchData = async () => {
            const specificImage = await fetchSpecificImage(id)
            setSpecificImage(specificImage)
        }

        fetchData()

        setOpenModal(true)
        
        setSpecificImage({
            author: "",
            download_url: "",
            height: 0,
            id: "",
            url: "",
            width: 0
        })
        return
    }

    return (
        <>
            {      
                isLoading && (
                        images.map((image) => (
                            <Card key={image.id} className="w-auto border-none shadow-none bg-transparent">
                                <CardContent className="h-auto p-2">
                                    <Skeleton className="w-full h-48 rounded-lg" />
                                </CardContent>
                            </Card>
                        ))
                )
            }
            {
                images.map((image) => (
                    <Card key={image.id} className="w-auto border-none shadow-none bg-transparent">
                        <CardContent className="h-auto p-2">
                            <img 
                                onLoadStart={() => setIsLoading(true)} 
                                onLoad={() => setIsLoading(false)} 
                                src={image.download_url} 
                                alt={image.author} 
                                loading="lazy" 
                                className="w-full min-h-48 max-h-48 hover:scale-105 cursor-pointer rounded-md object-cover" 
                                onClick={() => handleImageClick(image.id)} 
                            />
                        </CardContent>
                    </Card>
                ))
            }
            {
                specificImage && (
                    <Modal image={specificImage} openModal={openModal} setOpenModal={setOpenModal} />
                )
            }
        </> 
    );
}
 
export default Image;
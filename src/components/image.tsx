import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { fetcher } from "@/lib/fetch";
import { fetchSpecificImage } from "@/lib/fetchSpecificImage";
import Modal from "./modal";

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
        return
    }

    return (
        <>
            {
                images.map((image) => (
                    <Card key={image.id} className="w-auto border-none shadow-none bg-transparent">
                        <CardContent className="h-auto p-2">
                            <img src={image.download_url} alt={image.author} loading="lazy" className="w-full min-h-48 max-h-48 hover:scale-105 cursor-pointer rounded-md object-cover" onClick={() => handleImageClick(image.id)} />
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
import { Dialog, DialogContent, DialogFooter } from "./ui/dialog";

interface ImageProps {
    author: string,
    download_url: string,
    height: number,
    id: string,
    url: string,
    width: number,
}

interface ModalProps {
    image: ImageProps,
    setOpenModal: (openModal: boolean) => void,
    openModal: boolean
}

const Modal = ({image, setOpenModal, openModal}: ModalProps) => {

    return ( 
            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogContent className="pt-10 scale-90 xl:scale-105 rounded-md">
                    <div className="h-auto">
                        <img src={image.download_url} alt={image.author} className="rounded-md h-full" />
                    </div> 
                    <DialogFooter className="text-lg lg:text-2xl font-semibold truncate">
                        <h1>{image.author}</h1>
                    </DialogFooter>     
                </DialogContent>    
            </Dialog>
     );
}
 
export default Modal;
import { Dialog, DialogContent, DialogFooter } from "./ui/dialog";

const Modal = () => {
    return ( 
            <Dialog open>
                <DialogContent className="pt-10 scale-90 rounded-md">
                    <div className="h-auto">
                        <img src="https://images.pexels.com/photos/3935317/pexels-photo-3935317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dog" className="rounded-md h-full" />
                    </div> 
                    <DialogFooter className="text-2xl font-semibold truncate">
                        <h1>Autor da imagem</h1>
                    </DialogFooter>     
                </DialogContent>    
            </Dialog>
     );
}
 
export default Modal;
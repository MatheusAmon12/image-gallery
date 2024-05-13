import Image from "./image";

const Gallery = () => {
    return ( 
        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <Image />
        </main>
     );
}
 
export default Gallery;
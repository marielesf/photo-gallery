import Image from 'next/image';
import { PhotoService } from '/services/photoService';

export default function PhotoBox() {
  return (
    <>
      {/* console.log({PhotoService.getAll()}); */}
      {PhotoService?.getAll()?.map((item) => (
        <div key={item.id}>
          <Image
            src={item.imgPath}
            //layout="fill" //image adapt
            placeholder="blur" //show fisrt a blur image
            quality={100} // quality returned from the server the default is 75
            width={item.width}
            height={item.height}
            alt={item.alternativeText}
            loading="lazy"
            style={{ width: `${item.width}`, height: `${item.height}` }}
            // sizes="{max-width:760px} 100vw, {max-width:1200px} 33vw"
          />
          <br />
        </div>
      ))}
    </>
  );
}

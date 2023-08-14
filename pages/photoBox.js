import Image from 'next/image';
import { PhotoService } from '/services/photoService';

export default function PhotoBox() {
  function ImageGridItem(image) {
    const style = {
      gridColumn: `span ${getSpanEstimate(image.width, image.height)}`,
      gridRow: `span ${getSpanEstimate(image.height, image.width)}`,
    };
    return style;
  }

  function getSpanEstimate(var1, var2) {
    if (var1 - var2 > 2000) {
      return 2;
    }
    return 1;
  }

  return (
    <>
      {PhotoService?.getAll()?.map((item) => (
        <div style={ImageGridItem(item.imgPath)} key={item.id}>
          <Image
            src={item.imgPath}
            placeholder="blur" //show fisrt a blur image
            quality={100} // quality returned from the server the default is 75
            alt={item.alternativeText}
            loading="lazy"
          />
          <br />
        </div>
      ))}
    </>
  );
}

import React, {useCallback, useState} from 'react';
import html2canvas from "html2canvas";

export const useHtmlToImage = () => {

  const [htmlToImageStatus, setHtmlToImageStatus] = useState(false);

  const imageExt = (ext?: string) => {
    if(ext && typeof ext !== 'string' ) return;
    if(ext === 'png') return '.png';
    return '.jpg';
  }

  const setDownloadImage = useCallback((id: string, fileName?: string, imageExtension?: string ):  string => {
    const container = document.getElementById('elemID');  //get the id element
    const getExtension = imageExt(imageExtension);
    if(container) {
      setHtmlToImageStatus(true);
      html2canvas(container, { allowTaint: true }).then(function (canvas) {
        let download = document.createElement("a");
        document.body.appendChild(download);
        download.download = fileName ? fileName + getExtension : `htmlToImage${getExtension}`;
        download.href = canvas.toDataURL();
        download.target = '_blank';
        download.click();
        setHtmlToImageStatus(false);
      });
    }
    return id;
  },[])

  return  [htmlToImageStatus, setDownloadImage] as const;
}

export default useHtmlToImage;

# jeoffydev-html-to-image

> Custom  ReactJs hook- HTML to image NPM

[![NPM](https://img.shields.io/npm/v/html-to-image.svg)](https://www.npmjs.com/package/html-to-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install --save jeoffydev-html-to-image
```
## if error occured on installation please run config set run legacy-peer-deps below

```
npm config set legacy-peer-deps true
npm install --save jeoffydev-html-to-image
```

## Demo

[https://codesandbox.io/s/tender-shaw-2f2zue?file=/src/App.tsx](https://codesandbox.io/s/tender-shaw-2f2zue?file=/src/App.tsx)

## Usage

```tsx
import * as React from 'react'

import { useHtmlToImage } from "jeoffydev-html-to-image";

const Example = () => {
    const [htmlToImageStatus, setDownloadImage] = useHtmlToImage();
    //Get the ID element of your html
    const id = 'elemID';
    
    return (
        <>
            { htmlToImageStatus ? 'Downloading...' : ''  }
            <div id={id} style={{width: '200px', textAlign:'center', color:'black', backgroundColor: '#e5e5e5', padding: '20px'}}><strong>Elements new</strong></div>
            <button onClick={()=>setDownloadImage(id)} > Download Screenshot </button>
        </>
    );
}
```
## node version

version 16+

## keywords

Keywords are jeoffydev, html-to-image

## html2canvas

This package uses html2canvas to generate image

## License

MIT © [https://github.com/jeoffydev](https://github.com/jeoffydev)
 
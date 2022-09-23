# html-to-image

> custom hook ReactJs HTML to image NPM

[![NPM](https://img.shields.io/npm/v/html-to-image.svg)](https://www.npmjs.com/package/html-to-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save html-to-image
```

## Usage

```tsx
import * as React from 'react'

import useHtmlToImage from "useHtmlToImage";

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

## License

MIT © [https://github.com/jeoffydev](https://github.com/https://github.com/jeoffydev)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).

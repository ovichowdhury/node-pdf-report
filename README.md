<h1 align="center">
  Node PDF Report
</h1>

<p align="center"> A library for making Node PDF reporting Easy !
<p align="center">
  
## Features

1. Pure HTML or ejs Template to PDF, PNG and JPEG Conversion.
2. Create File or Get Buffer/Base64 For Further Usage.
3. Json to HTML Conversion.
4. Typescript Support.


## Installation

```bash
$ npm install node-pdf-report
```

## ejs Sample Template

```html
<body>
    <h1>
        <%= name %>
    </h1>
</body>
```


## Code Example

```js
  const { createPDF, getPDFBuffer, jsonObjectToHTML, getImage, createImage} = require('node-pdf-report');


  /**
   * get PDF as Buffer for further use
   * options = {
   *  relativePath: <ejs template relative path>
   *  data: <object to be passed in template>
   *  format: <puppteer compatible any pdf format>
   *  html: <direct HTML content>
   *  
   * }
   */
  const pdfBuffer = await getPDFBuffer({
          html: '<body><h3>Hello world</h3></body>'
  });

  console.log(pdfBuffer)

  /**
   * Create PDF from html or ejs
   * options = {
   *  relativePath: <ejs template relative path>
   *  data: <object to be passed in template>
   *  format: <puppteer compatible any pdf format>
   *  html: <direct HTML content>
   *  outPath: <path of output>
   * }
   */
  await createPDF({
      relativePath: './templates/basic.html',
      data: { name: "Nahid Chowdhury" },
      outPath: './pdf/mypdf.pdf'
  });

  /**
   * Json to html report
   */
  const html = jsonObjectToHTML({
      name: "Nahid Chowdhury",
      age: 26,
      others: {
          profession: 'Software Engineer',
          company: 'ERA InfoTech LTD'
      }
  })

  createPDF({
      html: html,
      outPath: './pdf/fromJson.pdf'
  })
  
  /**
 * Get Image from html or ejs (In Base64 or Binary)
 * options = {
 *  relativePath: <ejs template relative path>
 *  data: <object to be passed in template>
 *  html: <direct HTML content>
 *  type: <jpeg or png>
 *  encoding: <base64 or binary>
 * }
 */
 
  const imageBase64 = await getImage({
      relativePath: './templates/basic.html',
      data: { name: "Nahid Chowdhury Ovi" },
      type: 'jpeg',
      encoding: 'base64'
  });

/**
 * Create Image from html or ejs (png or jpeg)
 * options = {
 *  relativePath: <ejs template relative path>
 *  data: <object to be passed in template>
 *  html: <direct HTML content>
 *  outPath: <output image path with image name (png and jpeg extension supported)>
 * }
 */

  createImage({
      relativePath: './templates/basic.html',
      data: { name: "Nahid Chowdhury Ovi" },
      outPath: './pdf/image.png'
  })
```

## Stay in touch

- Author - [Nahid Chowdhury](https://bd.linkedin.com/in/nahid-chowdhury)


## License

Node PDF Report is [MIT licensed](LICENSE).

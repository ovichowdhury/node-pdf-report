<h1 align="center">
  Node PDF Report
</h1>

<p align="center"> A library for making Node PDF reporting Easy !
<p align="center">
  

## Installation

```bash
$ npm install node-pdf-report
```

## Code Example

```js
  const { createPDF, getPDFBuffer, jsonObjectToHTML} = require('node-pdf-report');


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
```

## Stay in touch

- Author - [Nahid Chowdhury](https://bd.linkedin.com/in/nahid-chowdhury)


## License

Node PDF Report is [MIT licensed](LICENSE).

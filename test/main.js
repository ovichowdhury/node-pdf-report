const { createPDF, getPDFBuffer, jsonObjectToHTML, getImage, createImage} = require('../lib/index');


async function main() {
    // const pdfBuffer = await getPDFBuffer({
    //     html: '<body><h3>Hello world</h3></body>'
    // });

    // console.log(pdfBuffer)

    // createPDF({
    //     relativePath: './templates/basic.html',
    //     data: { name: "Nahid Chowdhury" },
    //     outPath: './pdf/mypdf.pdf'
    // });

    // /**
    //  * Json to html report
    //  */
    // const html = jsonObjectToHTML({
    //     name: "Nahid Chowdhury",
    //     age: 26,
    //     others: {
    //         profession: 'Software Engineer',
    //         company: 'ERA InfoTech LTD'
    //     }
    // })

    // createPDF({
    //     html: html,
    //     outPath: './pdf/fromJson.pdf'
    // })

    // const imageBase64 = await getImage({
    //     relativePath: './templates/basic.html',
    //     data: { name: "Nahid Chowdhury Ovi" },
    //     type: 'jpeg',
    //     encoding: 'base64'
    // });
    // console.log(imageBase64);

    createImage({
        relativePath: './templates/basic.html',
        data: { name: "Nahid Chowdhury Ovi" },
        outPath: './pdf/image.png'
    })

}
main();
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const puppeteer = require('puppeteer');

const { getJsonObjectToArray } = require('./utils/jsonObjectToArray');

/**
 * Global Scope resources
 */
const fsAysnc = fs.promises;



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

exports.getPDFBuffer = async function (options) {

    let html = options.html;

    if (!html) {
        const templatePath = path.resolve(options.relativePath);
        const reportTemplate = await fsAysnc.readFile(templatePath, 'utf-8');

        let data = {}
        if (typeof options.data === "object") data = options.data
        html = ejs.render(reportTemplate, data);
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const format = options.format || "A4";
    const pdfBuffer = await page.pdf({ format: format });
    await page.close();
    await browser.close();

    return pdfBuffer;

}

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

exports.createPDF = async function (options) {

    let html = options.html;

    if (!html) {
        const templatePath = path.resolve(options.relativePath);
        const reportTemplate = await fsAysnc.readFile(templatePath, 'utf-8');

        let data = {}
        if (typeof options.data === "object") data = options.data
        html = ejs.render(reportTemplate, data);
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const format = options.format || "A4";
    const outPath = path.resolve(options.outPath);
    const pdfBuffer = await page.pdf({ path: outPath, format: format });
    await page.close();
    await browser.close();

    return pdfBuffer;

}

/**
 * Utility function json object to flat array
 */
exports.getJsonObjectToArray = getJsonObjectToArray;


exports.jsonObjectToHTML = function (obj) {
    const objArr = getJsonObjectToArray(obj);

    let innerTags = "";
    for (let i = 0; i < objArr.length; i++) {
        const key = objArr[i][0].toString();
        const value = objArr[i][1].toString();
        innerTags = innerTags + `<li> ${key} : ${value} </li>`;
    }

    const html = `<ul> ${innerTags} </ul>`;
    return html;
}


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

exports.getImage = async function (options) {

    let html = options.html;

    if (!html) {
        const templatePath = path.resolve(options.relativePath);
        const reportTemplate = await fsAysnc.readFile(templatePath, 'utf-8');

        let data = {}
        if (typeof options.data === "object") data = options.data
        html = ejs.render(reportTemplate, data);
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    const type = options.type || 'png';
    const encoding = options.encoding || 'base64';
    const output = await page.screenshot({
        type: type,
        encoding: encoding,
        fullPage: true
    });
    await page.close();
    await browser.close();

    return output;

}

/**
 * Create Image from html or ejs (png or jpeg)
 * options = {
 *  relativePath: <ejs template relative path>
 *  data: <object to be passed in template>
 *  html: <direct HTML content>
 *  outPath: <output image path with image name (png and jpeg extension supported)>
 * }
 */

exports.createImage = async function (options) {

    let html = options.html;

    if (!html) {
        const templatePath = path.resolve(options.relativePath);
        const reportTemplate = await fsAysnc.readFile(templatePath, 'utf-8');

        let data = {}
        if (typeof options.data === "object") data = options.data
        html = ejs.render(reportTemplate, data);
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    await page.screenshot({
        path: options.outPath,
        fullPage: true
    });
    await page.close();
    await browser.close();

}
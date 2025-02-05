import pdfMake from 'pdfmake/build/pdfmake'

/* Asynchronously download fonts bundle for PDF Make. */
fetch('/vfs-fonts.bundle.v3.json', { mode: 'same-origin' })
  .then(response => response.json())
  .then(vfsFonts => (pdfMake.vfs = vfsFonts));

const singleFileFont = (file: any) => ({
  normal: file,
  bold: file,
  italic: file,
  bolditalics: file,
});

pdfMake.fonts = {
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf',
  },
  WenQuanYiZenHei: singleFileFont('WenQuanYiZenHei.ttf'),
  /* Note: https://github.com/googlefonts/noto-fonts/blob/master/FAQ.md#whats-the-difference-between-the-ui-and-non-ui-versions */
  NotoSansThai: singleFileFont('NotoSansThaiUI-Regular.ttf'),
  NotoSansArabic: singleFileFont('NotoSansArabicUI-Regular.ttf'),
  NotoSansGeorgian: singleFileFont('NotoSansGeorgian-Regular.ttf'),
  NotoSansArmenian: singleFileFont('NotoSansArmenian-Regular.ttf'),
  NotoSansDevanagari: singleFileFont('NotoSansDevanagari-Regular.ttf'),
  NotoSansMalayalam: singleFileFont('NotoSansMalayalam-Regular.ttf'),
  NotoSansKannada: singleFileFont('NotoSansKannada-Regular.ttf'),
};

const pdfMakeSG = pdfMake;
export default pdfMakeSG;
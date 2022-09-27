export default {
  name: "articleContent",
  type: "array",
  title: "Contenu",
  of : [
      {
        name: 'articleTitle',
        title: 'Titre de la section ',
        type: 'string',
      },
      {
        name: 'articleParagraph',
        title: 'Paragraphe de la section ',
        type: 'string',
      },
      {
        name: 'articleImage',
        title: 'Image de la section ',
        type: 'string',
      }
  ]
}
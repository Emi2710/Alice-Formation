export default {
    name: 'parcours',
    title: 'Mon parcours',
    type: 'document',
    fields : [
    {
      name: "body1",
      type: "blockContent",
      title: "Body",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: 'Image principale'
    },
    {
      name: "body2",
      type: "blockContent",
      title: "Body",
    },
    {
      name: "quoteImage",
      type: "mainImage",
      title: 'Image pour la citation'
    },
    {
      name: "quote",
      type: 'string',
      title: 'Citation'
    }
    
    ]
}
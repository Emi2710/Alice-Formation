export default {
    name: 'parcours',
    title: 'Mon parcours',
    type: 'document',
    groups: [
      {
        name: 'principal',
        title: 'Content',
      },
      {
        name: 'seo',
        title: 'SEO',
      },
    ],
    fields : [
    {
      name: "body1",
      type: "blockContent",
      title: "Body",
      group: 'principal',
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: 'Image principale',
      group: 'principal',
    },
    {
      name: "body2",
      type: "blockContent",
      title: "Body",
      group: 'principal',
   
    },
    {
      name: "quoteImage",
      type: "mainImage",
      title: 'Image pour la citation',
      group: 'principal',
      
    },
    {
      name: "quote",
      type: 'string',
      title: 'Citation',
      group: 'principal',
      
    },
    {
            name: 'metaTitle',
            title: 'Titre SEO',
            type: 'string',
            group: 'seo',                
        },
        {
            name: 'description',
            title: 'Description SEO',
            type: 'string',
            group: 'seo',                
        },
        {
            name: 'tags', 
            title: 'Mot clés SEO', 
            type: 'array', 
            group: 'seo',
            of: [{ 
                name: 'tag', 
                title: 'Tag', 
                type: 'string' 
            }],
                
        },
    
    
    
    ]
}
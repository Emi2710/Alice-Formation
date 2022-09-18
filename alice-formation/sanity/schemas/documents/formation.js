export default {
    name: 'formation',
    title: 'Formation',
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
            name: 'title',
            title: 'Titre',
            type: 'string',
            group: 'principal',
        },
        {
            name: 'tagCont', 
            title: 'Tags', 
            type: 'array', 
            of: [{ 
                name: 'tagText', 
                title: 'Tag', 
                type: 'string' 
            }],
            group: 'principal'
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
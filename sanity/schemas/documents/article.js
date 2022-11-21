export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    groups: [
        {
            name: 'principal',
            title: 'Preview',
        },
        {
            name: 'content',
            title: 'Content',
        },
        {
            name: 'seo',
            title: 'SEO',
        }
        
    ],
    fields: [
        {name: 'titre', title: 'Titre', type: 'string', group: 'principal'},
        {name: 'date', title: 'Date de publication', type: 'string', group: 'principal'},
        {name: 'lecture', title: 'Temps de lecture', type: 'string', group: 'principal'},
        {name: 'image1', title: 'Première image', type: 'image', group: 'principal'},
        {name: 'preview', title: 'Preview', type: 'string', group: 'principal'},
        {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name', maxLength: 90,}, group: 'principal'},
        {name: 'tags', title: 'Tags', type: 'array', of: [{ name: 'tag', title: 'Tag', type: 'string' }],group: 'principal'},

        {
            name: 'sommaire',
            title: 'Sommaire',
            group: 'content',
            type: 'array',
            of : [
                {
                    name: 'sommaireTitle',
                    title: 'Titre du sommaire',
                    type: 'string',
                }
            ]
        },
        {
            name: 'contentBody',
            title: 'Content',
            group: 'content',
            type: 'blockContent'
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
            name: 'tagsSEO', 
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
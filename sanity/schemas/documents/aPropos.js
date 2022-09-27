export default {
    name: 'aPropos',
    title: 'A propos',
    type: 'document',
    groups: [
        {
            name: 'principal',
            title: 'Content',
        },
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        {
            name: 'title',
            title: 'Section à propos',
            type: 'string',
            group: 'principal',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            group: 'principal',
            of: [
                {
                    name: 'paragraph',
                    title: 'Paragraphe',
                    type: 'string'
                },
                
            ]
        },
        {
            name: 'signature',
            title: 'Signature',
            type: 'image',
            group: 'principal',
        },
        {
            name: 'imgUrl',
            title: "Image d'illustration",
            type: 'image',
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
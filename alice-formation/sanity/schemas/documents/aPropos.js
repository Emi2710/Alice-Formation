export default {
    name: 'aPropos',
    title: 'A propos',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Section à propos',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
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
            type: 'image'
        },
        {
            name: 'imgUrl',
            title: "Image d'illustration",
            type: 'image'
        }
    
    ]
}
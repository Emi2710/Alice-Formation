export default {
    name: 'accueil',
    title: 'Accueil',
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
    fields: [
        {
            name: 'title',
            title: 'Titre',
            type: 'string',
            group: 'principal',
        },
        {
            name: 'paragraph',
            title: 'Paragraphe',
            type: 'string',
            group: 'principal',
        },
        {
            name:'imgUrl',
            title:'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
            group: 'principal',
        },
        {
            name: 'callToAction',
            title: 'Content - Call to action',
            group: 'principal',
            type: 'blockContent'
        },
        {
            name: 'section',
            title: 'Ajouter une section',
            group: 'principal',
            type: 'blockContent'
        },
        {   name: 'images', 
            title: 'Ajouter des images', 
            group: 'principal',
            type: 'array',
            of: [{
                type: 'mainImage'
            }] ,
            options: {
            hotspot: true,  
            },    
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
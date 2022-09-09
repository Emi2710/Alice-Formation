export default {
    name: 'accueil',
    title: 'Accueil',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titre',
            type: 'string'
        },
        {
            name: 'paragraph',
            title: 'Paragraphe',
            type: 'string'
        },
        {
            name:'imgUrl',
            title:'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
    ]
}
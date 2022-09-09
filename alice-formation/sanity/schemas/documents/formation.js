export default {
    name: 'formation',
    title: 'Formation',
    type: 'document',
    fields : [
        {
            name: 'title',
            title: 'Titre',
            type: 'string'
        },
        {
            name: 'sousTitre',
            title: 'Sous titre',
            type: 'string'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ]
        },
    ]
}
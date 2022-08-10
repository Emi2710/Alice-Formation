export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    groups: [
        {
            name: 'principal',
            title: 'Section Principale',
        },
        {
            name: 'section1', 
            title: '1ère section',
        },
        {
            name: 'section2', 
            title: '2ème section',
        },
        {
            name: 'section3', 
            title: '3ème section',
        },
        {
            name: 'section4', 
            title: '4ème section',
        },
        {
            name: 'section5', 
            title: '5ème section',
        },
        {
            name: 'section6', 
            title: '6ème section',
        },
    ],
    fields: [
        {name: 'titre', title: 'Titre', type: 'string', group: 'principal'},
        {name: 'date', title: 'Date de publication', type: 'string', group: 'principal'},
        {name: 'lecture', title: 'Temps de lecture', type: 'string', group: 'principal'},
        {name: 'image1', title: 'Première image', type: 'image', group: 'principal'},

        {name: 'sousTitre1', title: 'Titre de la section ', type: 'string', group: 'section1'},
        {name: 'paragraph1', title: 'Texte de la section ', type: 'string', group: 'section1'},
        {name: 'img1', title: 'Image de la section ', type: 'image', group: 'section1'},

        {name: 'sousTitre2', title: 'Titre de la section ', type: 'string', group: 'section2'},
        {name: 'paragraph2', title: 'Texte de la section ', type: 'string', group: 'section2'},
        {name: 'img2', title: 'Image de la section ', type: 'image', group: 'section2'},

        {name: 'sousTitre3', title: 'Titre de la section ', type: 'string', group: 'section3'},
        {name: 'paragraph3', title: 'Texte de la section ', type: 'string', group: 'section3'},
        {name: 'img3', title: 'Image de la section ', type: 'image', group: 'section3'},

        {name: 'sousTitre4', title: 'Titre de la section ', type: 'string', group: 'section4'},
        {name: 'paragraph4', title: 'Texte de la section ', type: 'string', group: 'section4'},
        {name: 'img4', title: 'Image de la section ', type: 'image', group: 'section4'},

        {name: 'sousTitre5', title: 'Titre de la section ', type: 'string', group: 'section5'},
        {name: 'paragraph5', title: 'Texte de la section ', type: 'string', group: 'section5'},
        {name: 'img5', title: 'Image de la section ', type: 'image', group: 'section5'},

        {name: 'sousTitre6', title: 'Titre de la section ', type: 'string', group: 'section6'},
        {name: 'paragraph6', title: 'Texte de la section ', type: 'string', group: 'section6'},
        {name: 'img6', title: 'Image de la section ', type: 'image', group: 'section6'},

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            },
            group: 'principal'
        }
    ]
}
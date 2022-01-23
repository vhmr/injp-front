export default {
    name: 'ministery',
    title: 'Ministery',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'fotoLider',
            title: 'foto del líder',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'usuario',
            title: 'Lider',
            type: 'reference',
            to: {type: 'usuario'},
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'blockContent',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        },
    ]
}    
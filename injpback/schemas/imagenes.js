export default {
    name: 'imagenes',
    title: 'Imágenes',
    type: 'document',
    fields: [
        {
            name: 'alt',
            title: 'Alt',
            type: 'string',
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
            name: 'gallery',
            title: 'Galería',
            type: 'reference',
            to: {type: 'gallery'},
        },
    ]
}    
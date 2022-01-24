import { string } from "prop-types";

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
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        },
        {
            name: 'extracto',
            title: 'Extracto',
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
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        },
    ]
}    
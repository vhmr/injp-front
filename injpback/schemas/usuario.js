export default {
  name: 'usuario',
  title: 'Usuario',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      options: {
        list: [
          { value: 'admin', title: 'Admin' },
          { value: 'editor', title: 'Editor' },
          { value: 'suscriptor', title: 'Suscriptor' },
        ]
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}

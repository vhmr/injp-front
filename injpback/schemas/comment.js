export default {
    name: 'comment',
    title: 'Comentarios',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'approved',
        title: 'Approved',
        type: 'boolean',
      },
      {
        name: 'email',
        type: 'string',
      },
      {
        name: 'comment',
        type: 'string',
      },
      {
        name: 'post',
        type: 'reference',
        to: [{ type: "post" }],
      },
    ],
}
  
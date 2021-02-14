export default {
  name: 'categories',
  title: 'Grammar Categories',
  type: 'document',
  fields: [
    {
      name:'name',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'category_number',
      title: 'Category Number',
      type: 'number'
    },
    {
      name: 'category_slug',
      title: 'Category Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 150
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'style',
      title: 'Style Type',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
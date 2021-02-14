export default {
  name: 'lessons',
  title: 'Grammar Lessons',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Lesson Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'lesson_slug',
      title: 'Lesson Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200
      }
    },
    {
      name: 'category_tag',
      title: 'Category Tag',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'lesson_number',
      title: 'Lesson Number',
      description: 'This is the number of the lesson only within THIS category',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: [
        {
          type: 'categories'
        }
      ]
    },
    {
      name: 'content',
      title: 'Lesson Content',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Lesson Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select : {
      category: 'category.name',
      title: 'title',
      lessonNumber: 'lesson_number'
    },
    prepare: ({ title, category, lessonNumber }) => {
      const sub = `${category} ${lessonNumber}`
      return {
        title: title,
        subtitle: sub
      }
    }
  }
}
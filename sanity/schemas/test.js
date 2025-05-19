export default {
  "name": "test",
  "type": "document",
  "title": "Test",
  "fields": [
    {
      "name": "title",
      "type": "string",
      "title": "Title",
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "slug",
      "type": "slug",
      "title": "Slug",
      "options": {
        "source": "title",
        "maxLength": 96
      },
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "description",
      "type": "text",
      "title": "Description"
    },
    {
      "name": "content",
      "type": "array",
      "title": "Content",
      "of": [
        {
          "type": "block"
        },
        {
          "type": "image",
          "options": {
            "hotspot": true
          }
        }
      ]
    }
  ]
}
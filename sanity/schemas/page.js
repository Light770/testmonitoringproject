export default {
  "name": "page",
  "type": "document",
  "title": "Page",
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
      "name": "body",
      "type": "array",
      "title": "Body",
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
export default {
  "name": "siteSettings",
  "type": "document",
  "title": "Site Settings",
  "fields": [
    {
      "name": "title",
      "type": "string",
      "title": "Site Title",
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "description",
      "type": "text",
      "title": "Site Description"
    },
    {
      "name": "logo",
      "type": "image",
      "title": "Site Logo",
      "options": {
        "hotspot": true
      }
    },
    {
      "name": "mainNavigation",
      "type": "array",
      "title": "Main Navigation",
      "of": [
        {
          "type": "reference",
          "to": [
            {
              "type": "page"
            }
          ]
        }
      ]
    },
    {
      "name": "footerText",
      "type": "text",
      "title": "Footer Text"
    }
  ]
}
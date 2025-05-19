import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Astroblog CMS',
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
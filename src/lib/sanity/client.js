
            import {createClient} from '@sanity/client'

            export const client = createClient({
              projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
              dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
              apiVersion: '2023-03-04',
              useCdn: true,
            })
            
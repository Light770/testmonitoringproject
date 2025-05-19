
            // Import initial content into Sanity
            
            import {createClient} from '@sanity/client'
            import {initialContent} from './initial-content'
            
            const client = createClient({
              projectId: process.env.SANITY_PROJECT_ID,
              dataset: process.env.SANITY_DATASET || 'production',
              apiVersion: '2023-03-04',
              token: process.env.SANITY_TOKEN,
              useCdn: false,
            })
            
            async function importContent() {
              console.log('Starting content import...')
              
              for (const [type, items] of Object.entries(initialContent)) {
                console.log(`Importing ${items.length} ${type} items...`)
                
                for (const item of items) {
                  try {
                    const result = await client.create(item)
                    console.log(`Created ${result._type} with ID: ${result._id}`)
                  } catch (error) {
                    console.error(`Failed to create ${item._type}:`, error.message)
                  }
                }
              }
              
              console.log('Content import complete!')
            }
            
            importContent().catch(console.error)
            
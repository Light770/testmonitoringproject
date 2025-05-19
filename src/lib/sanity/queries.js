
            export const queries = {
              // Add queries for each schema type
            
              getSitesettingss: `*[_type == "siteSettings"]`,
              getSitesettingsById: (id) => `*[_type == "siteSettings" && _id == "${id}"][0]`,
                
              getPages: `*[_type == "page"]`,
              getPageById: (id) => `*[_type == "page" && _id == "${id}"][0]`,
                
              getTests: `*[_type == "test"]`,
              getTestById: (id) => `*[_type == "test" && _id == "${id}"][0]`,
                }

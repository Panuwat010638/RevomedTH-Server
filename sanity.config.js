import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure, defaultDocumentNodeResolver} from './src/deskStructure'
import {media, mediaAssetSource} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'revomedTH-2024-server',

  projectId: 'i8mflzuw',
  dataset: 'production',

  plugins: [structureTool({
    structure:structure,
    defaultDocumentNode: defaultDocumentNodeResolver}), visionTool(),media()],
    form: {
      // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
      file: {
        assetSources: previousAssetSources => {
          return previousAssetSources.filter(assetSource => assetSource !== mediaAssetSource)
        }
      },},

  schema: {
    types: schemaTypes,
  },
})

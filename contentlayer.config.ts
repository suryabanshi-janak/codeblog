import {
  makeSource,
  defineDocumentType,
  type ComputedFields,
} from '@contentlayer/source-files';
import readingTime from 'reading-time';

const computedFields: ComputedFields = {
  url: {
    type: 'string',
    resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw),
  },
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    updatedAt: {
      type: 'date',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    image: { type: 'image', required: true },
    isPublished: {
      type: 'boolean',
      default: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Blog],
});

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId:'x3vjuo9m',
  dataset: 'production',
  apiVersion: '2022-09-13',
  useCdn: true,
  token: "skmDr4NDAGAZXpKvFzzhsQXu7lk5jfRnfJOAwNZo9bhpRPH01T2KqF7IwtL4OuZr7YLnUETHTznPd0VxBtLpUwhkNdetOVGQCBBCdhtgQ1r4o7b3361LBV4qFgNLwJC19LwHlTff6FQwJy5iyH7TuwQODT6QyepvEymPGSnCpFYhEmcP0Fsa",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source); 

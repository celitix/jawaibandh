export default function sitemap() {
  return [
    {
      url: 'https://jawaibandh.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://jawaibandh.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
        {
      url: 'https://jawaibandh.com/images',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
    url: 'https://jawaibandh.com/destinations',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
      {
    url: 'https://jawaibandh.com/things-to-do',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
      {
    url: 'https://jawaibandh.com/how-to-reach',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
       url: 'https://jawaibandh.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
]
}


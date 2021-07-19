module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    CONTENTSTACK_STACK_API_KEY: process.env.CONTENTSTACK_STACK_API_KEY,
    CONTENTSTACK_ENVIRONMENT: process.env.CONTENTSTACK_ENVIRONMENT,
    CONTENTSTACK_DELIVERY_TOKEN: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    CONTENTSTACK_REGION: process.env.CONTENTSTACK_REGION,
    UNIFORM_API_KEY: process.env.UNIFORM_API_KEY,
    GA_UA_ID: process.env.GA_UA_ID
  }
}

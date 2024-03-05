export default {
  routes: [
    {
      method: "GET",
      path: "/blogs/bySlug/:slug",
      handler: "api::blog.blog.findBySlug",
      policies: [],
    },
  ],
};

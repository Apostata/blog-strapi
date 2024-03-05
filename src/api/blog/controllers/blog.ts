/**
 * blog controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::blog.blog",
  ({ strapi }) => {
    return {
      async findBySlug(ctx) {
        const { slug } = ctx.params;
        const query = ctx.query;
        console.log("controller slug:", slug, query);
        const post = await strapi
          .service("api::blog.blog")
          .findBySlug({ slug, query });
        const sanitizedPost = await this.sanitizeOutput(post, ctx);
        const transformedPost = await this.transformResponse(sanitizedPost);
        return transformedPost;
      },
    };
  }
);

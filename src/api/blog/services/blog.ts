/**
 * blog service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::blog.blog", ({ strapi }) => {
  return {
    async findBySlug({ slug, query }) {
      console.log("service slug:", slug, query);
      //   const post = await strapi.db.query("api::blog.blog").findOne({
      //     where: { slug },
      //   });
      const post = await strapi.db.query("api::blog.blog").findOne({
        where: { slug },
        populate: { image: true },
      });
      return post;
    },
  };
});

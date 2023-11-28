const response = (status, data, message, res) => {
  res.json(status, {
    payload: data,
    message,
  });
};

const homeResponse = (status, res) => {
  res.json(status, {
    maintainer: "elkhanza gt",
    source: "https://github.com/purkonuddin/elkhanzagt-api",
    endpoints: {
      all_product: "GET, https://elkhanzagt_api.vercel.app/data",
      by_type: {
        request: "GET, https://elkhanzagt_api.vercel.app/data/type/:type",
        example: "GET, https://elkhanzagt_api.vercel.app/data/type/chair",
      },
      by_product_id: {
        request: "GET, https://elkhanzagt_api.vercel.app/data/product/:id",
        example:
          "GET, https://felkhanzagt_api.vercel.app/data/product/frntrdcr2",
      },
      profile_id: {
        request: "GET, https://elkhanzagt_api.vercel.app/profile/:id",
        example: "GET, https://felkhanzagt_api.vercel.app/profile/1",
      },
      cost: "GET, https://elkhanzagt_api.vercel.app/cost",
      by_cost_id: {
        request: "GET, https://elkhanzagt_api.vercel.app/cost/:id",
        example: "GET, https://elkhanzagt_api.vercel.app/cost/1",
      },
      content: "GET, https://elkhanzagt_api.vercel.app/content",
      by_content_page: {
        request: "GET, https://elkhanzagt_api.vercel.app/content/:page",
        example: "GET, https://elkhanzagt_api.vercel.app/content/service",
      },
      all_tim: "GET, https://elkhanzagt_api.vercel.app/tim",
      all_sponsor: "GET, https://elkhanzagt_api.vercel.app/sponsor",
      all_kategory: "GET, https://elkhanzagt_api.vercel.app/kategory",
    },
  });
};

module.exports = { response, homeResponse };

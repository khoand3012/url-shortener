const nanoid = require("nanoid");
const urlModel = require("../models/urlModel");

export function createUrl(req, res) {
  const shortenerRequest = req.body;
  let response = {};
  response.status = 200;
  response.message = "api.success";
  response.url = shortenerRequest.url;
  response.slug = nanoid();
  // TODO: save to db and check for duplicate

  return res.json(response);
}

export async function redirectUrl(req, res) {
  // Search in db for url
  const findUrl = await urlModel.findOne({
    slug: req.params.id
  });
  if (findUrl) {
    return res.json(findUrl);
  } else {
    return res.json({});
  }
}

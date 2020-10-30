const urlModel = require("../models/urlModel");
const CreateUrlResponse = require("../responses/createUrlResponse");
const RedirectUrlResponse = require("../responses/redirectUrlResponse");

function createUrl(req, res) {
  const shortenerRequest = req.body;

  let model = new urlModel();
  model.url = shortenerRequest.url;

  model
    .save()
    .then((document) => {
      return res.json(
        new CreateUrlResponse(
          200,
          "api.success",
          shortenerRequest.url,
          document.slug
        )
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

function redirectUrl(req, res) {
  urlModel
    .findOne({
      slug: req.params.id
    })
    .then((document) => {
      if (document) {
        return res.json(new RedirectUrlResponse(200, "api.success", document));
      } else {
        return res.json(
          new RedirectUrlResponse(400, "api.error: no document found.", {})
        );
      }
    })
    .catch((error) => {
      console.log(error);
      return res.json(
        new RedirectUrlResponse(500, "api.error: internal server error.", {})
      );
    });
}

module.exports = {
  createUrl,
  redirectUrl
};

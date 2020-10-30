class RedirectUrlResponse {
  constructor(status, message, urlModel) {
    this.status = status;
    this.message = message;
    this.urlModel = urlModel;
  }
}

module.exports = RedirectUrlResponse;

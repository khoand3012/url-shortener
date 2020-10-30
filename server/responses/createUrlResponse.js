class CreateUrlResponse {
  constructor(status, message, url, slug) {
    this.status = status;
    this.message = message;
    this.url = url;
    this.slug = slug;
  }
}

module.exports = CreateUrlResponse;

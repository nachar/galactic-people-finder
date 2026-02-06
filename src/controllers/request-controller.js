export class RequestController {
  host;
  loading = false;
  error = false;
  success = false;
  data = null;

  #fn;

  constructor(host, fn) {
    this.#fn = fn;
    this.host = host;
    host.addController(this);
  }

  async execute(...args) {
    this.loading = true;
    this.error = false;
    this.success = false;
    this.host.requestUpdate();

    try {
      const result = await this.#fn(...args);
      this.data = result;
      this.success = true;
      return result;
    } catch {
      this.error = true;
    } finally {
      this.loading = false;
      this.host.requestUpdate();
    }
  }

  reset() {
    this.loading = false;
    this.error = false;
    this.success = false;
    this.data = null;
    this.host.requestUpdate();
  }

  hostConnected() {}
  hostDisconnected() {}
}

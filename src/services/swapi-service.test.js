import { expect } from '@open-wc/testing';
import sinon from 'sinon';
import { fetchStarWarsCharacterList } from './swapi-service.js';

describe('swapi-service', () => {
  let fetchStub;

  beforeEach(() => {
    fetchStub = sinon.stub(globalThis, 'fetch');
  });

  afterEach(() => {
    fetchStub.restore();
  });

  it('should call fetch with correct search parameter', async () => {
    fetchStub.resolves({
      ok: true,
      json: async () => ({ results: [] }),
    });

    await fetchStarWarsCharacterList('skywalker');

    expect(fetchStub.firstCall.args[0]).to.include('search=skywalker');
  });

  it('should encode search parameter with spaces', async () => {
    fetchStub.resolves({
      ok: true,
      json: async () => ({ results: [] }),
    });

    await fetchStarWarsCharacterList('luke skywalker');

    expect(fetchStub.firstCall.args[0]).to.include('search=luke%20skywalker');
  });

  it('should handle empty search parameter', async () => {
    fetchStub.resolves({
      ok: true,
      json: async () => ({ results: [] }),
    });

    await fetchStarWarsCharacterList('');

    expect(fetchStub.firstCall.args[0]).to.include('search=');
  });

  it('should use empty string as default search parameter', async () => {
    fetchStub.resolves({
      ok: true,
      json: async () => ({ results: [] }),
    });

    await fetchStarWarsCharacterList();

    expect(fetchStub.firstCall.args[0]).to.include('search=');
  });

  it('should throw error on failed request', async () => {
    fetchStub.resolves({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    try {
      await fetchStarWarsCharacterList('invalid');
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('Error 404');
      expect(error.message).to.include('Not Found');
    }
  });
});

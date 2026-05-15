(function () {
  'use strict';

  const config = window.WOMAI_CONFIG || {};

  function getApiUrl() {
    if (!config.apiUrl || config.apiUrl === 'WSTAW_TUTAJ_ADRES_ENDPOINTU') {
      throw new Error('Najpierw ustaw adres endpointu w js/config.js.');
    }
    return config.apiUrl;
  }

  function endpointUrl(action) {
    const url = new URL(getApiUrl());
    url.searchParams.set('action', action);
    return url;
  }

  async function getGuestData() {
    const response = await fetch(endpointUrl('guest').toString(), {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });
    const json = await response.json();
    if (!response.ok || !json.ok || !json.data) {
      throw new Error(json && json.error ? json.error : 'Nie udało się pobrać pytań.');
    }
    return json.data;
  }

  async function requestAdminJson(endpoint, token, method, action, body) {
    if (!endpoint) throw new Error('Brak adresu endpointu.');
    if (!token) throw new Error('Brak tokenu.');

    const url = new URL(endpoint);
    url.searchParams.set('action', action);
    url.searchParams.set('token', token);

    const options = { method, headers: { 'Accept': 'application/json' } };
    if (method !== 'GET') {
      options.headers['Content-Type'] = 'text/plain;charset=utf-8';
      options.body = JSON.stringify(body || {});
    }

    const response = await fetch(url.toString(), options);
    const json = await response.json();
    if (!response.ok || !json.ok) {
      throw new Error(json && json.error ? json.error : ('Błąd HTTP ' + response.status));
    }
    return json;
  }

  window.WOMAI_API = {
    getGuestData,
    requestAdminJson
  };
}());

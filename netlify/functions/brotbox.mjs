import { getStore } from '@netlify/blobs';

export default async (request) => {
  const configured = Netlify.env.get('BROTBOX_PASSWORD');
  if (!configured) return new Response(JSON.stringify({ error: 'BROTBOX_PASSWORD fehlt in Netlify.' }), { status: 503, headers: { 'content-type': 'application/json' } });
  const supplied = request.headers.get('x-brotbox-password') || '';
  if (supplied !== configured) return new Response(JSON.stringify({ error: 'Passwort falsch.' }), { status: 401, headers: { 'content-type': 'application/json' } });
  const store = getStore('brotbox-data');
  if (request.method === 'GET') {
    const data = await store.get('shared.json', { type: 'json' });
    return new Response(JSON.stringify(data || { checked: {}, prepDone: {}, week: 1 }), { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
  }
  if (request.method === 'PUT') {
    const data = await request.json();
    await store.setJSON('shared.json', data);
    return new Response(JSON.stringify({ ok: true }), { headers: { 'content-type': 'application/json' } });
  }
  return new Response('Method not allowed', { status: 405 });
};

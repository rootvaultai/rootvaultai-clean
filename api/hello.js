export default async function handler(req, res) {
  return res.json({ ok: true, time: new Date().toISOString() });
}

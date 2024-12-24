// /pages/api/instagram.js
export default async function handler(req, res) {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN; // Store token in environment variables
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,timestamp&access_token=${accessToken}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Instagram posts" });
  }
}

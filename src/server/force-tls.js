export default function forceTls (req, res, next) {
  res.setHeader('Strict-Transport-Security', 'max-age=8640000; includeSubDomains');
  if (req.headers['x-forwarded-proto'] === 'https') {
    next();
  } else {
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
}

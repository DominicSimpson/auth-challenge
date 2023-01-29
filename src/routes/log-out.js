const { session_id } = require("../routes/sign-up.js");
const { removeSession } = require("../model/session.js");

function post(req, res) {
  const sid = req.signedCookies.sid;
  removeSession(sid);
  response.clearCookie(sid);
  res.redirect(`/home`);

  /**
   * [1] Get the session ID from the cookie
   * [2] Remove that session from the DB
   * [3] Remove the session cookie
   * [4] Redirect back home
   */
}

module.exports = { post };

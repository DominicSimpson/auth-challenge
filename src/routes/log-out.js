const { session_id } = require("../routes/sign-up.js");

function post(req, res) {
  const sid = req.signedCookies.sid;
  removeSession(sid);

  /**
   * [1] Get the session ID from the cookie
   * [2] Remove that session from the DB
   * [3] Remove the session cookie
   * [4] Redirect back home
   */
}

module.exports = { post };

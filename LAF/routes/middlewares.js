exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res
      .status(403)
      .send("<script>alert('로그인 필요'); location.href='/';</script>");
    }
  };
  
  exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
      next();
    } else {
      const message = encodeURIComponent("로그인한 상태입니다.");
      res.redirect(`/?error=${message}`);
    }
  };
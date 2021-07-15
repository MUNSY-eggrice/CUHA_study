const Wargame = require('../schemas/wargame');
const User = require('../schemas/user');
//메인페이지
const getIndexPage = (req, res) => {
  res.render('index');
};
//wargame 등록 페이지
const getWargameCreatePage = (req, res) => {
  res.render('wargame/create');
};
//wargame 페이지
const getWargameIndexPage = async (req, res) => {
  try {
    let page = Math.max(1, parseInt(req.query.page));
    let limit = Math.max(1, parseInt(req.query.limit));
    page = !isNaN(page) ? page : 1;
    limit = !isNaN(limit) ? limit : 10;
    const maxPost = 10;
    let hiddenPost = page === 1 ? 0 : (page - 1) * limit;
    let wargamePost = await Wargame.find({})
      .sort({ createAt: -1 })
      .skip(hiddenPost)
      .limit(limit);
    //게시글 총 수 탐색
    const totalPost = await Wargame.countDocuments({});
    if (!totalPost) {
      throw Error();
    }
    const totalPage = Math.ceil(totalPost / maxPost);

    //ejs호출
    res.render('wargame/index', {
      posts: wargamePost,
      paging: {
        currentPage: page,
        totalPage,
        limit,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

//wargame 내용
const getWargameViewPage = async (req, res) => {
  try {
    const wargame = await Wargame.findOne({});

    res.render('wargame/view', { wargame });
  } catch (errror) {
    console.error(error);
  }
};
//wargame 등록 POST
const postWargameCreate = async (req, res) => {
  const { title, content, type, level, point, flag } = req.body;

  try {
    await Wargame.create({
      title,
      content,
      type,
      level,
      point,
      flag: `${process.env.FLAG_FORMAT}_${flag}`, //${process.env.FLAG_FORMAT}_${flag}
    });

    return res.redirect('/wargame');
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getIndexPage,
  getWargameIndexPage,
  getWargameCreatePage,
  getWargameViewPage,
  postWargameCreate,
};

class HomeController {
  async index(req, res) {
    res.json('Home Page .');
  }
}

export default new HomeController();

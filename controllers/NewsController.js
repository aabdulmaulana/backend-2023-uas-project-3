// import Model News
const News=require('../models/News');

// buat class NewsController
class NewsController {
  //buat fungsi
  static index(req, res) {
    NewsModel.all((results) => {
      res.json(results);
    });
  }

  static store(req, res) {
    const data = req.body;
    NewsModel.create(data, (results) => {
      res.status(201).json(results);
    });
  }

  static update(req, res) {
    const id = req.params.id;
    const data = req.body;
    NewsModel.update(id, data, (results) => {
      res.json(results);
    });
  }

  static destroy(req, res) {
    const id = req.params.id;
    NewsModel.destroy(id, (results) => {
      res.status(204).json(results);
    });
  }

  static show(req, res) {
    const id = req.params.id;
    NewsModel.find(id, (results) => {
      if (results.length === 0) {
        res.status(404).json({ message: 'Resource not found' });
      } else {
        res.json(results[0]);
      }
    });
  }

  static search(req, res) {
    const title = req.params.title;
    NewsModel.search(title, (results) => {
      res.json(results);
    });
  }

  static sport(req, res) {
    const category = 'sport';
    NewsModel.findByCategory(category, (results) => {
      res.json(results);
    });
  }

  static finance(req, res) {
    const category = 'finance';
    NewsModel.findByCategory(category, (results) => {
      res.json(results);
    });
  }

  static automotive(req, res) {
    const category = 'automotive';
    NewsModel.findByCategory(category, (results) => {
      res.json(results);
    });
  }
}

// membuat object NewsController
const object = new NewsController();

// export object NewsController
module.exports = object;

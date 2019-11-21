const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});

module.exports = {
  getArticle(req, res, next) {
    var id = req.query.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getArticle;
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setVeiw(req, res, next) {
    console.log(req.body);
    var id = req.body.id, view = req.body.view;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setView;
      connection.query(sql, [view, id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  //获取所有文章
  getArticleAll(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.queryAll;
      connection.query(sql,  (err, result) => {
          res.json(result);
          connection.release();
      })
    })
    
  },
}

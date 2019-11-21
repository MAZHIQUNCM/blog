var sqlMap = {
  getArticle: 'SELECT * FROM article WHERE id = ?',
    setView: 'UPDATE article SET view = ? WHERE id = ?',
    queryAll: 'select * from article order by id limit 0,3'
  }
  
  module.exports = sqlMap;
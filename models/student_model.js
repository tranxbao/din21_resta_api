const db = require('../database');

const student = {
  getById: function(id, callback) {
    return db.query('select * from student where id_student=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from student', callback);
  },
  add: function(student, callback) {
    return db.query(
      'insert into student (fname,lname,age) values(?,?,?)',
      [student.fname, student.lname, student.age],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from student where id_student=?', [id], callback);
  },
  update: function(id, student, callback) {
    return db.query(
      'update student set fname=?,lname=?, age=? where id_student=?',
      [student.fname, student.lname, student.age, id],
      callback
    );
  }
};
module.exports = student;
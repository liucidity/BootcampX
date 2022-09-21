const pool = require('./database/connection');

pool.query(`SELECT DISTINCT teachers.name AS teacher, cohorts.name
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON studentS.id = student_id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2]}'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;`)
  .then(res => {
    console.log('connected');
    res.rows.forEach(row => {
      console.log(`${row.name}: ${row.teacher}`);
    });
  });
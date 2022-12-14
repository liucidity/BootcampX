// -------------------------------------------------- SET UP
const pool = require('./database/connection');


const cohort = process.argv[2];
const numResults = process.argv[3];

pool.query(`SELECT students.id, students.name, cohorts.name AS cohort_name FROM students JOIN cohorts ON students.cohort_id = cohorts.id WHERE cohorts.name LIKE $1 LIMIT $2`, [`%${cohort}%`, numResults])
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
    });
  })
  .catch(err => console.error('query error', err.stack));
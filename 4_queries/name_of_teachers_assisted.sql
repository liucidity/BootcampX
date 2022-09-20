SELECT DISTINCT teachers.name AS teacher, cohorts.name
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON studentS.id = student_id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;
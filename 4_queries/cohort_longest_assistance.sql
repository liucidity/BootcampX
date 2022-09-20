SELECT cohorts.name, AVG(completed_at - started_at) as avg
FROM assistance_requests
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY avg DESC
LIMIT 1;
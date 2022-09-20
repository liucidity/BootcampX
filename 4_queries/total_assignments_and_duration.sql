SELECT day, COUNT(id), sum(duration)
FROM assignments
GROUP BY day
ORDER BY day ASC;
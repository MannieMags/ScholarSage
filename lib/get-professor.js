import { professors, reviews } from '../../lib/mockData';

export default function handler(req, res) {
  const { id } = req.query;
  const professor = professors.find(p => p.id === parseInt(id));
  const professorReviews = reviews.filter(r => r.professorId === parseInt(id));

  if (professor) {
    res.status(200).json({ ...professor, reviews: professorReviews });
  } else {
    res.status(404).json({ message: 'Professor not found' });
  }
}

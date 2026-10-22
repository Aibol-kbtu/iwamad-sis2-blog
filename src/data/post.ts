export type Post = {
  id: number;
  title: string;
  challenge: string;
  deadline: string;
};

export const posts: Post[] = [
  { id: 1, title: 'Week-01', challenge: 'Dev environment & HTML template', deadline: '2026-09-13' },
  { id: 2, title: 'Week-02', challenge: 'Develop a responsive webpage', deadline: '2026-09-20' },
  { id: 3, title: 'Week-03', challenge: 'React + TypeScript profile card', deadline: '2026-09-27' },
  { id: 4, title: 'Week-04', challenge: 'Routing, shared state, first test', deadline: '2026-10-04' },
  { id: 5, title: 'Week-05', challenge: 'Design in example of SIS 2', deadline: '2026-10-14' }
];
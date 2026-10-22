export type Post = {
  id: number;
  name: string;
  challenge: string;
  deadline: string;
};

export const posts: Post[] = [
  { id: 1, name: 'Week-01', challenge: 'Dev environment & HTML template', deadline: '2026-09-13' },
  { id: 2, name: 'Week-02', challenge: 'Develop a responsive webpage', deadline: '2026-09-20' },
  { id: 3, name: 'Week-03', challenge: 'React + TypeScript profile card', deadline: '2026-09-27' },
  { id: 4, name: 'Week-04', challenge: 'Routing, shared state, first test', deadline: '2026-10-04' },
  { id: 5, name: 'Week-05', challenge: 'Design in example of SIS 2', deadline: '2026-10-14' }
];
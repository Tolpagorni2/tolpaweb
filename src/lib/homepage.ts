export interface HomepageExample {
  thought: { title: string; excerpt: string; body: string };
  perspective: { title: string; description: string; why: string };
  investigation: { title: string; question: string; milestones: string[] };
  episode: { question: string; intro: string; observations: string[] };
  question: string;
  library: { number: string; title: string; description: string; kind: string }[];
}

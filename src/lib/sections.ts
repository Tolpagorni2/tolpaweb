export const sectionLinks = [
  {key:'pulse',path:'pulse',label:'the pulse'},
  {key:'latest-thought',path:'latest-thought',label:'the latest thought'},
  {key:'perspective',path:'perspective',label:'a perspective'},
  {key:'research',path:'research',label:'down the rabbit hole'},
  {key:'magnus-meets',path:'magnus-meets',label:'magnus meets'},
  {key:'unanswered-question',path:'unanswered-question',label:'the unanswered question'},
  {key:'library',path:'library',label:'from the library'},
  {key:'participate',path:'participate',label:'participate'},
  {key:'about',path:'about',label:'about'},
] as const;
export const standaloneSections = ['pulse','latest-thought','perspective','unanswered-question','participate','about'] as const;
export type SectionKey = typeof standaloneSections[number];

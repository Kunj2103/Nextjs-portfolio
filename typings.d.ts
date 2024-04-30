interface SanityBody{
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image{
  _type: 'image';
  asset:{
    _ref:string;
    _type: 'reference'
  }
}


export interface PageInfo extends SanityBody{
  _type: 'pageInfo';
  name: string;
  email:string;
  address:string;
  backgroundInformation:string;
  role:string;
  heroImage:Image;
  phoneNumber:string;
  profilePic:Image;

}
export interface Social extends SanityBody{
  _type: 'social';
  title: string;
  url:string;
}
export interface Technology extends SanityBody{
  _type: 'technology';
  title: string;
  progress:number;
  image:Image;
}
export interface Skill extends SanityBody{
  _type: 'skill';
  title: string;
  progress:number;
  image:Image;
}
export interface Project extends SanityBody{
  _type: 'project';
  title: string;
  image:Image;
  linkToBuild:string;
  summary:string;
  technologies:Technology[];
}
export interface Experience extends SanityBody{
  _type: 'experience';
  company: string;
  companyImage:Image;
  dateToStarted:date;
  dateToEnded:date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies:Technology[];
}

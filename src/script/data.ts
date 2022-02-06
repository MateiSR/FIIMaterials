import {Class, ClassType, Contributor, Feedback} from "./models";

/* I give up on using a backend, "Keep it simple stupid". */
export class Data {
  static classes: Class[] = [
    /** ----------========== 1.1 =========----------*/

    {
      name: 'Data Structures',
      short: 'SD',
      credits: 6,
      about: 'One of the most important classes because in programming you’ll need them like water. And as a short tip: if you implement data structures from scratch, this class will become very easy for you.',
      materials: 'https://bit.ly/38xJkry',
      site: 'https://profs.info.uaic.ro/~sd',
      password: 'sd SD202021',
      year: 1,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('February 23, 2021 00:00:00'),
    },
    {
      name: 'Computer Architecture and Operating Systems',
      short: 'ACSO',
      credits: 5,
      about: 'This will be an introduction to operating systems. You will learn about how a computer thinks and how is communicating with outside world. In laboratories you will do problems in _asm which is cool.',
      materials: 'https://bit.ly/31PbY5b',
      site: 'https://profs.info.uaic.ro/~rvlad/stud.html',
      password: '',
      year: 1,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Logics for Computer Science',
      short: 'Logics',
      credits: 6,
      about: 'For this course you’ll have to pay attention because, if you stay in the first rows you will be often asked questions like: “How is this course called?” “How can you prove I am a teacher?” and course related things. The exams are not that hard tho. If you practice it’s gonna be ok.',
      materials: 'https://bit.ly/2SnbW14',
      site: 'https://profs.info.uaic.ro/~logica',
      password: '',
      year: 1,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Mathematics',
      short: 'Math',
      credits: 5,
      about: 'The courses are a little too fast but the seminars are ok. If you keep up with them the exam will not be that hard. I strongly recommend being active.',
      materials: 'https://bit.ly/2UQg7Eq',
      site: 'https://profs.info.uaic.ro/~andreea.arusoaie/mate.html',
      password: '',
      year: 1,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Introduction to Programming',
      short: 'IP',
      credits: 4,
      about: 'The problems from seminars are similar with the problems you probably made in high school, but if you haven’t done computer science in high school, you can do some from PbInfo. The most exciting part is the group project. You can ask if you can make the project in Processing. It’s much better that winbgim and has a lot of resources.',
      materials: 'https://bit.ly/34EZ2o0',
      site: 'https://profs.info.uaic.ro/~introp',
      password: '',
      year: 1,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'English Language I',
      short: 'English',
      credits: 4,
      about: 'With the right teacher, this class can be very fun.',
      materials: '',
      site: 'https://profs.info.uaic.ro/~augusto.perez',
      password: '',
      year: 1,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Competitive Programming',
      short: 'PC',
      credits: 3,
      about: 'Here you’ll do problems for contest and meet passionate students. Even if you fell insecure, I recommend going there to see how it is. This can also help on passing interviews  on big companies.',
      materials: '',
      site: 'https://students.info.uaic.ro/~alexandru.ionita/pc/index.html',
      password: '',
      year: 1,
      semester: 1,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Physical Education',
      short: 'PE',
      credits: 1,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 1,
      semester: 1,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },

    /** ----------========== 1.2 =========----------*/

    {
      name: 'Object Oriented Programming',
      short: 'OOP',
      credits: 6,
      about: 'It is also an important course. You will learn about object oriented programming in c++. It is very complex but pretty fun. If you think "I already know oop, It\'s gonna be easy" like I did, you may be wrong.',
      materials: 'https://bit.ly/39Wbspf',
      site: 'https://sites.google.com/view/fii-poo',
      password: '',
      year: 1,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Operating Systems',
      short: 'SO',
      credits: 6,
      about: 'It’s like the continuation of CAOS. In laboratories you will write commands in terminal and in the second part problems in C. The operating system will be linux.',
      materials: 'https://bit.ly/2ISTg3W',
      site: 'https://profs.info.uaic.ro/~vidrascu/SO',
      password: 'so2020 1+2=3',
      year: 1,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Algebraic Foundations of Computer Science',
      short: 'FAI',
      credits: 5,
      about: 'Yeah, here you will make demonstrations.',
      materials: 'https://bit.ly/2TT0zyW',
      site: 'https://profs.info.uaic.ro/~fltiplea/AFCS/AFCS.html',
      password: '',
      year: 1,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Probabilities and Statistics',
      short: 'PS',
      credits: 4,
      about: 'The easy math. You will make a 15-20 minutes test after every class. If you read the course carefully and make few problems in advance it\'s gonna be ok.',
      materials: 'https://bit.ly/2ITqL6g',
      site: 'https://profs.info.uaic.ro/~adrian.zalinescu/PS.html',
      password: '',
      year: 1,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Algorithms Design',
      short: 'PA',
      credits: 5,
      about: 'In this class you will learn programming paradigms such as: dynamic programming, backtracking, etc and how to prove that an algorithm works and is’s complexity class.',
      materials: 'https://bit.ly/2UafO5w',
      site: 'https://sites.google.com/site/fiicoursepa',
      password: '',
      year: 1,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'English Language II',
      short: 'English',
      credits: 5,
      about: 'With the right teacher this class can be very fun.',
      materials: 'https://bit.ly/2HwcXBu',
      site: 'https://profs.info.uaic.ro/~augusto.perez',
      password: '',
      year: 1,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Competitive Programming',
      short: 'PC',
      credits: 3,
      about: 'Here you’ll do problems for contest and meet passionate students. Even if you fell insecure, I recommend going there to see how it is. This can also help on passing interviews on big companies.',
      materials: '',
      site: 'https://students.info.uaic.ro/~alexandru.ionita/pc/index.html',
      password: '',
      year: 1,
      semester: 2,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Physical Education II',
      short: 'Sport',
      credits: 1,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 1,
      semester: 2,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Ethics and Academic Integrity',
      short: 'EIA',
      credits: 1,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 1,
      semester: 2,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },

    /** ----------========== 2.1 =========----------*/
    {
      name: 'Computer Networks',
      short: 'RC',
      credits: 6,
      about: 'It’s the continuation of the laboratories from OS. You will learn about protocols, how a network is communicating, etc and the homework will be fun to make. Don’t copy your homework.',
      materials: 'https://bit.ly/2HxlrYB',
      site: 'https://profs.info.uaic.ro/~computernetworks/cursullaboratorul.php',
      password: '',
      year: 2,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Databases',
      short: 'BD',
      credits: 6,
      about: 'You will learn SQL and make interrogations with it. You will also enter in some theory linked to databases and interrogations.',
      materials: 'https://bit.ly/2G5h078',
      site: 'https://profs.info.uaic.ro/~bd/wiki/index.php/Pagina_principal%C4%83',
      password: 'student student@bd',
      year: 2,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Formal Languages, Automata and Compilers',
      short: 'LFAC',
      credits: 5,
      about: 'You will learn SQL and make interrogations with it. You will also enter in some theory linked to databases and interrogations.',
      materials: 'https://bit.ly/3n1EcE6',
      site: 'https://profs.info.uaic.ro/~otto/lfac.html',
      password: '',
      year: 2,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Graph Algorithms',
      short: 'AGhe',
      credits: 5,
      about: 'Graph theory in a nutshell. The tests from seminars are not hard but the homework will be a little challenging. You also give an exam.',
      materials: 'https://bit.ly/3cDg4CX',
      site: 'https://profs.info.uaic.ro/~olariu/curent/AG/AG_ro.html',
      password: '',
      year: 2,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'English Language III',
      short: 'English',
      credits: 4,
      about: 'With the right teacher this class can be very fun.',
      materials: 'https://bit.ly/2HwcXBu',
      site: 'https://profs.info.uaic.ro/~augusto.perez',
      password: '',
      year: 2,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Computability, Decidability and Complexity',
      short: 'CDC',
      credits: 4,
      about: '',
      materials: '',
      site: 'https://profs.info.uaic.ro/~fltiplea/CDC/CDC.html',
      password: '',
      year: 2,
      semester: 1,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Principles of Programming Languages',
      short: 'PLP',
      credits: 4,
      about: '',
      materials: '',
      site: 'https://profs.info.uaic.ro/~arusoaie.andrei/lectures/PLP/2020/plp.html',
      password: '',
      year: 2,
      semester: 1,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Genetic Algorithms',
      short: 'AG',
      credits: 4,
      about: 'Very interesting class especially if you like programming. You will learn how to simulate a population and from generation to generation to keep the best candidates. You will have few homework but rumors are true that you have to keep you laptop overnight, like 8 hours in the first one for example. Based on your results you have to make a report.',
      materials: 'https://bit.ly/30eC1mA',
      site: 'https://profs.info.uaic.ro/~eugennc/teaching/ga/',
      password: '',
      year: 2,
      semester: 1,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Quantum Computing',
      short: 'QC',
      credits: 4,
      about: '',
      materials: 'https://bit.ly/30eC1mA',
      site: 'https://profs.info.uaic.ro/~andreea.arusoaie/QC.html',
      password: '',
      year: 2,
      semester: 1,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Competitive Programming',
      short: 'PC',
      credits: 3,
      about: '',
      materials: '',
      site: 'https://students.info.uaic.ro/~alexandru.ionita/pc/index.html',
      password: '',
      year: 2,
      semester: 1,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Physical Education',
      short: 'Sport',
      credits: 1,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 2,
      semester: 1,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Industry Training I',
      short: 'Practice',
      credits: 3,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 2,
      semester: 1,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },

    /** ----------========== 2.2 =========----------*/
    {
      name: 'WEB Technologies',
      short: 'WEB',
      credits: 6,
      about: '',
      materials: 'https://bit.ly/3rKzhbY',
      site: 'https://profs.info.uaic.ro/~busaco/teach/courses/web/',
      password: '',
      year: 2,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Advanced Programming',
      short: 'PA',
      credits: 5,
      about: '',
      materials: 'https://bit.ly/2Zgz83K',
      site: 'https://profs.info.uaic.ro/~acf/java/',
      password: '',
      year: 2,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Software Engineering',
      short: 'IS',
      credits: 6,
      about: '',
      materials: 'https://bit.ly/3afHi2Q',
      site: 'https://profs.info.uaic.ro/~adiftene/Scoala/2021/IP/index.html',
      password: '',
      year: 2,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'DBMS Practice',
      short: 'DBMS',
      credits: 4,
      about: '',
      materials: 'https://bit.ly/3b1dVjS',
      site: '',
      password: '',
      year: 2,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'English Language IV',
      short: 'English',
      credits: 4,
      about: 'With the right teacher this class can be very fun.',
      materials: 'https://bit.ly/2HwcXBu',
      site: '',
      password: '',
      year: 2,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Functional Programming',
      short: 'PF',
      credits: 5,
      about: 'With the right teacher this class can be very fun.',
      materials: 'https://bit.ly/2HwcXBu',
      site: '',
      password: '',
      year: 2,
      semester: 2,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Introduction to Cryptography',
      short: 'IC',
      credits: 5,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 2,
      semester: 2,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Entrepreneurship and Innovation in IT',
      short: 'AIIT',
      credits: 5,
      about: '',
      materials: 'https://bit.ly/2MVlYXH',
      site: '',
      password: '',
      year: 2,
      semester: 2,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Embedded Systems',
      short: 'SE',
      credits: 5,
      about: '',
      materials: 'https://bit.ly/3J1rD5E',
      site: '',
      password: '',
      year: 2,
      semester: 2,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Competitive Programming',
      short: 'PC',
      credits: 3,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 2,
      semester: 2,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Physical Education',
      short: 'Sport',
      credits: 1,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 2,
      semester: 2,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },

    /** ----------========== 3.1 =========----------*/
    {
      name: 'Machine Learning',
      short: 'ML',
      credits: 6,
      about: '',
      materials: 'https://bit.ly/3LgqCJ5',
      site: '',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Information Security',
      short: 'SI',
      credits: 5,
      about: '',
      materials: 'https://bit.ly/3B5dmSH',
      site: 'https://www.flt-info.eu/course/isec/',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Artificial Intelligence',
      short: 'AI',
      credits: 6,
      about: '',
      materials: 'https://bit.ly/3ooSqkw',
      site: 'https://sites.google.com/view/iafii/home',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Python Programming',
      short: 'Python',
      credits: 4,
      about: '',
      materials: 'https://bit.ly/3Gzl8Fw',
      site: 'https://sites.google.com/site/fiipythonprogramming/',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Introduction to .NET',
      short: '.NET',
      credits: 4,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Physical Systems Development Using Microprocessors',
      short: 'DSFUM',
      credits: 4,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Neural Networks',
      short: 'NN',
      credits: 4,
      about: '',
      materials: 'https://bit.ly/3LgcHmg',
      site: 'https://sites.google.com/view/rbenchea/neural-networks',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: '3D Computer Animation',
      short: 'Animations',
      credits: 4,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Probabilistic Programming and Modeling',
      short: 'PMP',
      credits: 5,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.OPTIONAL_2,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Introduction to Mixed Realities',
      short: 'IRM',
      credits: 5,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.OPTIONAL_2,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Special Chapters in Operating Systems',
      short: 'CSSO',
      credits: 5,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.OPTIONAL_2,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Multiprocessor Programming Techniques',
      short: 'TPM',
      credits: 5,
      about: '',
      materials: 'https://bit.ly/3JnXFt1',
      site: 'https://profs.info.uaic.ro/~eonica/mpt/index.html',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.OPTIONAL_2,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Competitive Programming',
      short: 'PC',
      credits: 3,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Industry Training II',
      short: 'Practice',
      credits: 3,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 1,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },

    /** ----------========== 3.2 =========----------*/
    {
      name: 'Numeric Calculus',
      short: 'CN',
      credits: 4,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Computer Graphics',
      short: 'GC',
      credits: 4,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Diploma Project Development ',
      short: 'Thesis',
      credits: 5,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.NORMAL,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Rule Based Programming',
      short: 'PBR',
      credits: 5,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Mobile Development',
      short: 'Mobile',
      credits: 5,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Computational Aspects on the Number Theory',
      short: 'ACTN',
      credits: 5,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Game Design',
      short: 'Game Design',
      credits: 5,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.OPTIONAL_1,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Psychology of the Professional Communication in IT Industry',
      short: 'PCPID',
      credits: 6,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.OPTIONAL_2,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Cloud Computing',
      short: 'CC',
      credits: 6,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.OPTIONAL_2,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Techniques of nNatural Language Engineering',
      short: 'PLN',
      credits: 6,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.OPTIONAL_2,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Social Media Networks Analysis',
      short: 'ARMS',
      credits: 6,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.OPTIONAL_2,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Petri Nets and Applications',
      short: 'LFAC 2',
      credits: 6,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.OPTIONAL_3,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Smart Cards and Their Applications',
      short: 'SCA',
      credits: 6,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.OPTIONAL_3,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Special Topics on .NET Programming',
      short: '.NET',
      credits: 6,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.OPTIONAL_3,
      updated: new Date('January 4, 2021 00:00:00'),
    },
    {
      name: 'Competitive Programming',
      short: 'PC',
      credits: 6,
      about: '',
      materials: '',
      site: '',
      password: '',
      year: 3,
      semester: 2,
      type: ClassType.FACULTY,
      updated: new Date('January 4, 2021 00:00:00'),
    },
  ];

  contributors: Contributor[] = [
    {
      name: 'logalex96',
      image: 'https://i.postimg.cc/L4gQdBJt/6248839.jpg',
      about: 'He is the one who started collecting these materials, so as an inspiration he deserves the credits. He has all materials so I strongly recommend going to his repository.',
      roles: 'legend, material keeper',
      action: 'https://bit.ly/2S8h9cO',
    },
    {
      name: 'Malina Cusutura',
      image: 'https://i.postimg.cc/rmk1vW3J/IMG-2489.jpg',
      about: 'She is a student at Faculty of computer science in the second year. I never met her in person but I’m sure she’s a nice person. Her materials contain exams, which are very useful.',
      roles: 'material keeper',
      action: 'https://bit.ly/2VXdfV3',
    },
    {
      name: 'Andrei',
      image: 'https://i.postimg.cc/pd1z2YDM/brain.png',
      about: '',
      roles: 'material keeper, curly brain',
      action: 'https://bit.ly/2VAGbTW',
    },
    {
      name: 'Stamate Valentin',
      image: 'https://i.postimg.cc/8CpyFScg/me.jpg',
      about: 'I never met this guy before.',
      roles: 'developer, material keeper',
      action: 'https://bit.ly/2VAGbTW',
    },
    {
      name: 'Teodor Lupu',
      image: 'https://i.postimg.cc/bNRTxRgn/107896230-3009973232562367-622850097654184659-o.jpg',
      about: 'He contributed with math session exams in year 2020-2021.',
      roles: 'contributor',
      action: '',
    },
    {
      name: 'Laurul Balaurul',
      image: 'https://i.postimg.cc/3xdvkjcY/drakon-plamya-ogon.jpg',
      about: 'The contribution of this creature was some exam models. He was often seen in C2 sometimes with the guitar guy "la o tigara si-un energizant".',
      roles: 'contributor',
      action: '',
    },
    {
      name: 'Segmentation Fault',
      image: 'https://i.postimg.cc/gk0w7qd8/segm-fault.jpg',
      about: 'His contribution was some exams models. His worst enemies are the C programming language and operating systems. The name tells everything.',
      roles: 'contributor',
      action: '',
    },
  ];
}

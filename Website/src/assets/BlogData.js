const Blogs = [
    {
      id: '1',
      title: 'Next.js: The Superpower Your Web Development Needs',
      date: 'June 13, 2024',
      author: 'Sadat Hussain',
      link: '/blog/nextjs-superpower-web-development'
    },
    {
      id: '2',
      title: 'Difference between For, For Of, For In and ForEach',
      date: 'June 13, 2024',
      author: 'Anuj Gangwal',
      link: '/blog/difference-for-forof-forin-foreach'
    },
    {
      id: '3',
      title: 'Getting Started with Linux with Tips and Tricks🐧✨',
      date: 'June 13, 2024',
      author: 'Aashutosh Soni',
      link: '/blog/getting-started-linux-tips-tricks'
    },
    {
      id: '4',
      title: 'How to Eliminate Flash of Unstyled Text (FOUT) with Preload',
      date: 'June 13, 2024',
      author: 'Ankit Mittal',
      link: '/blog/eliminate-fout-with-preload'
    },
    {
      id: '5',
      title: 'All you need to know for your next frontend system design interview 🚀',
      date: 'June 13, 2024',
      author: 'Aniket Chanana',
      link: '/blog/frontend-system-design-interview'
    },
    {
      id: '6',
      title: 'Safeguarding React Applications: Essential Security Practices',
      date: 'June 12, 2024',
      author: 'Sumanth S',
      link: '/blog/safeguarding-react-applications'
    },
    {
      id: '7',
      title: 'Why OCD is Good for Developers!',
      date: 'June 12, 2024',
      author: 'Rohit Mehrotra',
      link: '/blog/ocd-good-for-developers'
    },
    {
      id: '8',
      title: 'Diving into ReactJS: Understanding the Magic Behind Client and Server-side Routing',
      date: 'June 12, 2024',
      author: 'Kehinde Yusuf',
      link: '/blog/reactjs-client-server-routing'
    },
    {
      id: '9',
      title: 'Enhancing Code Quality and Streamlining the Review Process',
      date: 'June 12, 2024',
      author: 'Ankit Mittal',
      link: '/blog/enhancing-code-quality'
    },
    {
      id: '10',
      title: 'Misconceptions Regarding npm: What You Need to Know! 🔍',
      date: 'June 12, 2024',
      author: 'Saquib Hasnain',
      link: '/blog/misconceptions-about-npm'
    },
    {
      id: '11',
      title: 'Creating APIs with FastAPI and MongoDB using Motor(Async PyMongo): A Step-by-Step Guide',
      date: 'June 12, 2024',
      author: 'Suraj Singh',
      link: '/blog/creating-apis-fastapi-mongodb-motor'
    },
    {
      id: '12',
      title: 'Asynchronous Programming in JavaScript',
      date: 'June 12, 2024',
      author: 'Adarsha PC',
      link: '/blog/asynchronous-programming-javascript'
    },
    {
      id: '13',
      title: 'Introduction to Microsoft Storage Services',
      date: 'June 12, 2024',
      author: 'Kishore Pantra',
      link: '/blog/introduction-microsoft-storage-services'
    },
    {
      id: '14',
      title: 'How does React work under the Hood?',
      date: 'June 12, 2024',
      author: 'Amulya Reddy',
      link: '/blog/how-react-works-under-hood'
    },
    {
      id: '15',
      title: 'Functional Lenses Pattern in JavaScript',
      date: 'June 11, 2024',
      author: 'Freelancer Dev',
      link: '/blog/functional-lenses-pattern-js'
    },
    {
      id: '16',
      title: 'Solution for outputting array of firstnames less than age of 30, only using reduce',
      date: 'June 9, 2024',
      author: 'Anush Narayanan',
      link: '/blog/solution-outputting-firstnames-reduce'
    },
    {
      id: '17',
      title: 'Interview Experience | Incedo Inc | Software Engineer 3A | Hyderabad | Cleared',
      date: 'June 6, 2024',
      author: 'Sree Valli Sarva',
      link: '/blog/incedo-interview-experience'
    },
    {
      id: '18',
      title: 'Interview Experience | ThoughtSpot | [Position (MTS)] | Virtual | January 2024 [Result (Rejected)]',
      date: 'June 3, 2024',
      author: 'Himansh Soni',
      link: '/blog/thoughtspot-interview-experience'
    },
    {
      id: '19',
      title: 'Asynchronous Programming in JavaScript',
      date: 'June 2, 2024',
      author: 'Kushal Gidadhubli',
      link: '/blog/asynchronous-programming-javascript'
    },
    {
      id: '20',
      title: 'How Design Thinking can help you find an Idea and Its Solutions?',
      date: 'May 30, 2024',
      author: 'Sharanya Bhongade',
      link: '/blog/design-thinking-idea-solutions'
    },
    {
      id: '21',
      title: 'Work Experience | Full Stack Engineer at eStack LLC | Sep-2019- Feb-2024',
      date: 'May 29, 2024',
      author: 'Jaidev Bangar',
      link: '/blog/full-stack-engineer-experience'
    },
    {
      id: '22',
      title: 'Print 1,2,3,4,5 in 1,2,3,4,5 seconds respectively without using let | Frontend JavaScript Interview Question',
      date: 'May 28, 2024',
      author: 'Anush Narayanan',
      link: '/blog/frontend-js-interview-question'
    },
    {
      id: '23',
      title: 'Handwritten Notes: Benefits and Monetization',
      date: 'May 28, 2024',
      author: 'Ragini Jain',
      link: '/blog/handwritten-notes-benefits-monetization'
    },
    {
      id: '24',
      title: 'Interview Experience | GUVI | SDE | Chennai | April 2024 | Result – Reject',
      date: 'April 2024',
      author: 'Anonymous',
      link: '/blog/guvi-interview-experience'
    },
    {
      id: '25',
      title: 'Flipkart | UI-Developer | Bangalore | Rejected',
      date: '2024',
      author: 'Anonymous',
      link: '/blog/flipkart-ui-dev-interview'
    },
    {
      id: '26',
      title: 'Swiggy | Software Engineer 2 | Bengaluru | Passed',
      date: '2024',
      author: 'Anonymous',
      link: '/blog/swiggy-software-engineer-interview'
    },
    {
      id: '27',
      title: 'Walmart Global Tech | SDE Intern | Banglore | Passed',
      date: '2024',
      author: 'Anonymous',
      link: '/blog/walmart-sde-intern-interview'
    },
    {
      id: '28',
      title: 'Enbraun Technologies | Junior Java Developer | Jaipur, India | Aug 26, 2020 | Cleared',
      date: 'Aug 26, 2020',
      author: 'Anonymous',
      link: '/blog/enbraun-junior-java-dev-interview'
    },
    {
      id: '29',
      title: 'Arihant Technofast | Senior Frontend Developer | Jaipur, India | April 10, 2024 | Cleared',
      date: 'April 10, 2024',
      author: 'Anonymous',
      link: '/blog/arihant-senior-frontend-dev-interview'
    },
    {
      id: '30',
      title: 'Amazon | SDE-1 | Bangalore | Cleared',
      date: '2024',
      author: 'Anonymous',
      link: '/blog/amazon-sde1-interview'
    },
    {
      id: '31',
      title: 'Alethea Technologies | Marketing Manager | Bangalore | Rejected',
      date: '2024',
      author: 'Anonymous',
      link: '/blog/alethea-marketing-manager-interview'
    }
  ];
  

  export  {Blogs}
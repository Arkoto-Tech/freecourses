const courses = [
    {
        id: 1,
        title: "36 Lectures on the Future",
        provider: "Kevin Kelly, founding executive editor of Wired",
        category: "Technology Trends",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://kk.org/ct2/36-lectures-about-the-future/" }],
        description: "A comprehensive series of lectures on future technology trends by Kevin Kelly, founding executive editor of Wired magazine."
    },
    {
        id: 2,
        title: "Advanced Algorithms",
        provider: "Jelani Nelson, Harvard",
        category: "Algorithms",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL2SOU6wwxB0uP4rJgf5ayhHWgw7akUWSf" }],
        description: "An advanced course on algorithm design and analysis from Harvard University, taught by Professor Jelani Nelson."
    },
    {
        id: 3,
        title: "Advanced Data Structures",
        provider: "Erik Demaine, MIT",
        category: "Data Structures",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/" },
            { type: "course_info", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/" }
        ],
        description: "An in-depth exploration of advanced data structures, taught by Professor Erik Demaine at MIT."
    },
    {
        id: 4,
        title: "Algorithms, Part I",
        provider: "Robert Sedgewick, Princeton",
        category: "Algorithms",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/learn/algorithms-part1" }],
        description: "The first part of Princeton's algorithms course, covering fundamental data structures, sorting, and searching algorithms."
    },
    {
        id: 5,
        title: "Algorithms, Part II",
        provider: "Robert Sedgewick, Princeton",
        category: "Algorithms",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/learn/algorithms-part2" }],
        description: "The second part of Princeton's algorithms course, covering graph algorithms, string processing, and more advanced topics."
    },
    {
        id: 6,
        title: "Algorithm Design and Analysis",
        provider: "Dan Gusfield, UC Davis",
        category: "Algorithms",
        format: "Free iTunes Video & Online Video",
        links: [
            { type: "itunes", url: "https://podcasts.apple.com/us/podcast/ecs-122a-algorithm-design-and-analysis/id354821253" },
            { type: "video", url: "https://www.youtube.com/playlist?list=PL2SOU6wwxB0v1E92n46TlWYkWK93rJROu" }
        ],
        description: "A comprehensive course on algorithm design techniques and analysis methods taught by Professor Dan Gusfield."
    },
    {
        id: 7,
        title: "Algorithms for Big Data",
        provider: "Multiple professors, Harvard",
        category: "Algorithms",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL2SOU6wwxB0uJ4GopDJc5BDZIwVQTq7KS" }],
        description: "A course focusing on algorithms and data structures designed to handle massive datasets."
    },
    {
        id: 8,
        title: "Algorithmic Lower Bounds: Fun with Hardness Proofs",
        provider: "Erik Demaine, MIT",
        category: "Algorithms",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-890-algorithmic-lower-bounds-fun-with-hardness-proofs-fall-2014/lecture-videos/" },
            { type: "course_info", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-890-algorithmic-lower-bounds-fun-with-hardness-proofs-fall-2014/" }
        ],
        description: "An engaging course on proving the hardness of computational problems, taught by Professor Erik Demaine."
    },
    {
        id: 9,
        title: "AI Essentials",
        provider: "Google AI experts",
        category: "Artificial Intelligence",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/ai-essentials" }],
        description: "An introductory course on artificial intelligence fundamentals taught by Google AI experts."
    },
    {
        id: 10,
        title: "AI for Everyone",
        provider: "Andrew Ng, Stanford",
        category: "Artificial Intelligence",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/learn/ai-for-everyone" }],
        description: "A non-technical course designed to help anyone understand AI technologies and how they can impact business strategies."
    },
    {
        id: 11,
        title: "Artificial Intelligence",
        provider: "Patrick Winston, MIT",
        category: "Artificial Intelligence",
        format: "Free Online Course",
        links: [{ type: "course", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/" }],
        description: "A classic AI course taught by Professor Patrick Winston, covering the foundations of artificial intelligence."
    },
    {
        id: 12,
        title: "Introduction to Robotics",
        provider: "Oussama Khatib, Stanford",
        category: "Robotics",
        format: "Free Online Video & iTunes",
        links: [
            { type: "video", url: "https://www.youtube.com/playlist?list=PL9F08E6A73A6B7B81" },
            { type: "itunes", url: "https://podcasts.apple.com/us/podcast/cs223a-introduction-to-robotics/id354820035" },
            { type: "materials", url: "https://cs223a.stanford.edu/" }
        ],
        description: "An introduction to robotics covering kinematics, dynamics, control, and motion planning."
    },
    {
        id: 13,
        title: "Artificial Intelligence: Machine Learning (CS229)",
        provider: "Andrew Ng, Stanford",
        category: "Machine Learning",
        format: "Free Online Video & Materials",
        links: [
            { type: "video", url: "https://www.youtube.com/playlist?list=PLA89DCFA6ADACE599" },
            { type: "materials", url: "https://cs229.stanford.edu/" }
        ],
        description: "Stanford's famous machine learning course taught by Andrew Ng, covering a broad range of topics in machine learning and statistical pattern recognition."
    },
    {
        id: 14,
        title: "Authentication & Authorization: OAuth",
        provider: "Udacity",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/authentication-authorization-oauth--ud330" }],
        description: "Learn about OAuth, an open standard for authorization that provides secure access to resources without sharing credentials."
    },
    {
        id: 15,
        title: "Bitcoin and Cryptocurrency Technologies",
        provider: "Arvind Narayanan, Princeton",
        category: "Blockchain",
        format: "Free Online Video & MOOC",
        links: [
            { type: "video", url: "https://www.youtube.com/playlist?list=PL8lEZ0WQnK6uKAHRS1c9YrFDJ0G4TQTkH" },
            { type: "course", url: "https://www.coursera.org/learn/cryptocurrency" }
        ],
        description: "A comprehensive introduction to the principles of cryptocurrencies, including Bitcoin technology and its broader implications."
    },
    {
        id: 16,
        title: "Calling Bullshit in the Age of Big Data",
        provider: "Carl Bergstrom and Jevin West, University of Washington",
        category: "Data Science",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLSY1H-QYX5tP_zpC5hQARwZb4GZ3XeR2H" }],
        description: "A course about how to think critically about data and models that constitute evidence in the social and natural sciences."
    },
    {
        id: 17,
        title: "Computer Architecture",
        provider: "Anshul Kumar, IIT Delhi",
        category: "Computer Architecture",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://nptel.ac.in/courses/106/102/106102020/" },
            { type: "download", url: "https://nptel.ac.in/courses/106/102/106102020/" }
        ],
        description: "A comprehensive course on computer organization and architecture fundamentals."
    },
    {
        id: 18,
        title: "Deep Learning",
        provider: "Vincent Vanhoucke, Google",
        category: "Deep Learning",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLA89DCFA6ADACE599" }],
        description: "An introduction to deep learning concepts and applications taught by a Google expert."
    },
    {
        id: 19,
        title: "Harvard's Introduction to Computer Science (CS50)",
        provider: "David Malan, Harvard",
        category: "Computer Science",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://www.youtube.com/playlist?list=PLhQjrBD2T381L3iZyDTxRwOB7n4HgZZkl" },
            { type: "info", url: "https://cs50.harvard.edu/" }
        ],
        description: "Harvard University's introduction to the intellectual enterprises of computer science and the art of programming, taught by Professor David Malan."
    },
    {
        id: 20,
        title: "Introduction to Computer Science and Programming in Python",
        provider: "Eric Grimson, John Guttag, and Ana Bell, MIT",
        category: "Python",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00-introduction-to-computer-science-and-programming-in-python-fall-2016/video-lectures/" }],
        description: "An introduction to computer science and programming using Python, designed for students with little or no programming experience."
    },
    {
        id: 21,
        title: "Generative AI for Everyone",
        provider: "Andrew Ng, Stanford",
        category: "Artificial Intelligence",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/generative-ai" }],
        description: "A non-technical course about generative AI, how it works, and how it can be applied in various domains."
    },
    {
        id: 22,
        title: "Machine Learning Crash Course",
        provider: "Google",
        category: "Machine Learning",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://developers.google.com/machine-learning/crash-course" }],
        description: "Google's fast-paced, practical introduction to machine learning fundamentals."
    },
    {
        id: 23,
        title: "Neural Networks and Deep Learning",
        provider: "Andrew Ng, Stanford",
        category: "Deep Learning",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/deep-learning" }],
        description: "The first course in the Deep Learning Specialization, covering the foundations of deep learning and neural networks."
    },
    {
        id: 24,
        title: "Front End Frameworks",
        provider: "Google",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/front-end-frameworks--ud894" }],
        description: "An introduction to popular front-end frameworks for web development."
    },
    {
        id: 25,
        title: "Python for Data Science and AI",
        provider: "IBM",
        category: "Data Science",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/python-data-science-ai" }],
        description: "Learn how to use Python for data science and AI development, with practical examples from IBM."
    },
    {
        id: 26,
        title: "Computer Graphics",
        provider: "Kenneth Joy, UC Davis",
        category: "Computer Graphics",
        format: "Free iTunes Video",
        links: [{ type: "itunes", url: "https://podcasts.apple.com/us/podcast/ecs-175-computer-graphics/id354820116" }],
        description: "A course on computer graphics principles, algorithms, and techniques."
    },
    {
        id: 27,
        title: "Computer Graphics",
        provider: "Sukhendu Das, IIT",
        category: "Computer Graphics",
        format: "Free Online Video & Download",
        links: [
            { type: "video", url: "https://nptel.ac.in/courses/106/101/106101008/" },
            { type: "download", url: "https://nptel.ac.in/courses/106/101/106101008/" }
        ],
        description: "An in-depth exploration of computer graphics concepts and implementation techniques."
    },
    {
        id: 28,
        title: "Computer Language Engineering",
        provider: "Martin Rinard, MIT",
        category: "Programming Languages",
        format: "Free Course Materials & Video",
        links: [
            { type: "materials", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-035-computer-language-engineering-sma-5502-fall-2005/" },
            { type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-035-computer-language-engineering-sma-5502-fall-2005/video-lectures/" }
        ],
        description: "A course on the implementation of programming languages, including parsing, semantic analysis, and code generation."
    },
    {
        id: 29,
        title: "Computer Networking",
        provider: "Georgia Tech",
        category: "Networking",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/computer-networking--ud436" }],
        description: "An introduction to computer networking principles, protocols, and architectures."
    },
    {
        id: 30,
        title: "Computer Networks",
        provider: "S.Ghosh, IIT",
        category: "Networking",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://nptel.ac.in/courses/106/102/106102032/" }],
        description: "A comprehensive study of computer networks, from physical layer to application layer protocols."
    },
    {
        id: 31,
        title: "Computer Science for Business Professionals",
        provider: "Harvard",
        category: "Computer Science",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.edx.org/course/computer-science-for-business-professionals" }],
        description: "A course designed for business professionals to understand core computing concepts and their business applications."
    },
    {
        id: 32,
        title: "Computer Science for Lawyers",
        provider: "Harvard",
        category: "Computer Science",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.edx.org/course/computer-science-for-lawyers" }],
        description: "An introduction to computer science concepts tailored for legal professionals."
    },
    {
        id: 33,
        title: "Computer Systems Security",
        provider: "Nickolai Zeldovich, MIT",
        category: "Cybersecurity",
        format: "Free Online Video & Course Info",
        links: [
            { type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-858-computer-systems-security-fall-2014/lecture-videos/" },
            { type: "course_info", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-858-computer-systems-security-fall-2014/" }
        ],
        description: "A comprehensive course on computer security, covering software, operating system, and network security."
    },
    {
        id: 34,
        title: "Convolutional Neural Networks",
        provider: "Andrew Ng",
        category: "Deep Learning",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/deep-learning" }],
        description: "A course focused on convolutional neural networks for computer vision applications."
    },
    {
        id: 35,
        title: "Core ML: Machine Learning for iOS",
        provider: "Udacity",
        category: "Mobile Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/core-ml--ud1002" }],
        description: "Learn to implement machine learning models in iOS applications using Apple's Core ML framework."
    },
    {
        id: 36,
        title: "Cryptocurrency and Blockchain: An Introduction to Digital Currencies",
        provider: "University of Pennsylvania/Wharton",
        category: "Blockchain",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/cryptocurrency" }],
        description: "An introduction to cryptocurrency concepts, blockchain technology, and their implications for business and finance."
    },
    {
        id: 37,
        title: "Cyber-Physical Systems Security",
        provider: "Georgia Tech",
        category: "Cybersecurity",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/cyber-physical-systems-security--ud1031" }],
        description: "A course on security aspects of systems that integrate computation, networking, and physical processes."
    },
    {
        id: 38,
        title: "Cybersecurity and Its Ten Domains",
        provider: "Georgia Tech",
        category: "Cybersecurity",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/cybersecurity" }],
        description: "An overview of the ten domains of cybersecurity knowledge and practice."
    },
    {
        id: 39,
        title: "Cybersecurity Fundamentals",
        provider: "RIT",
        category: "Cybersecurity",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/cybersecurity-fundamentals" }],
        description: "An introduction to fundamental concepts in cybersecurity, including cryptography, network security, and risk management."
    },
    {
        id: 40,
        title: "Cybersecurity Risk Management",
        provider: "University of Washington",
        category: "Cybersecurity",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/cybersecurity-risk-management" }],
        description: "A course on identifying, assessing, and managing cybersecurity risks in organizations."
    },
    {
        id: 41,
        title: "Data Science (What is Data Science?)",
        provider: "IBM",
        category: "Data Science",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/data-science" }],
        description: "An introductory course on data science concepts, processes, and applications."
    },
    {
        id: 42,
        title: "Data Structures and Algorithms",
        provider: "Richard Buckland, University of New South Wales",
        category: "Data Structures",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLXFMmlk03Dt7Q0xrxtF4H64gTw5xnMLDN" }],
        description: "A comprehensive course on fundamental data structures and algorithms."
    },
    {
        id: 43,
        title: "Data Wrangling with MongoDB",
        provider: "MongoDB on Udacity",
        category: "Databases",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/data-wrangling-with-mongodb--ud032" }],
        description: "Learn techniques for gathering, cleaning, and transforming data using MongoDB."
    },
    {
        id: 44,
        title: "Data Visualization in Tableau",
        provider: "Udacity",
        category: "Data Science",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/data-visualization-in-tableau--ud1006" }],
        description: "A practical course on creating effective data visualizations using Tableau."
    },
    {
        id: 45,
        title: "Design of Computer Programs: Programming Principles",
        provider: "Udacity",
        category: "Programming",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/design-of-computer-programs--ud210" }],
        description: "A course on designing efficient, elegant, and reusable programs."
    },
    {
        id: 46,
        title: "Designing RESTful APIs",
        provider: "Udacity",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/designing-restful-apis--ud388" }],
        description: "Learn principles and best practices for designing robust RESTful APIs."
    },
    {
        id: 47,
        title: "Design in Computing",
        provider: "Richard Buckland, University of New South Wales",
        category: "Computer Science",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLXFMmlk03Dt5tFftKECcPGWxIjV-FHqfo" }],
        description: "A course exploring the principles of good design in computing systems."
    },
    {
        id: 48,
        title: "Developing Android Apps with Kotlin",
        provider: "Google",
        category: "Mobile Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/developing-android-apps-with-kotlin--ud9012" }],
        description: "A comprehensive course on Android app development using Kotlin."
    },
    {
        id: 49,
        title: "Developing iOS 10 Apps with Swift",
        provider: "Paul Hegarty, Stanford",
        category: "Mobile Development",
        format: "Free iTunes Video",
        links: [{ type: "itunes", url: "https://podcasts.apple.com/us/podcast/developing-ios-10-apps-with-swift/id1198422630" }],
        description: "Learn iOS development using Swift with Stanford's popular course."
    },
    {
        id: 50,
        title: "Discrete Mathematical Structures",
        provider: "Kamala Krithivasan, IIT",
        category: "Mathematics",
        format: "Free Online Video & Download",
        links: [
            { type: "video", url: "https://nptel.ac.in/courses/106/101/106101012/" },
            { type: "download", url: "https://nptel.ac.in/courses/106/101/106101012/" }
        ],
        description: "A course on discrete mathematics fundamentals relevant to computer science."
    },
    {
        id: 51,
        title: "Discrete Stochastic Processes",
        provider: "Robert Gallager, MIT",
        category: "Mathematics",
        format: "Free Online Video & Course Materials",
        links: [
            { type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-262-discrete-stochastic-processes-spring-2011/video-lectures/" },
            { type: "materials", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-262-discrete-stochastic-processes-spring-2011/" }
        ],
        description: "A course on random processes occurring in discrete time or space."
    },
    {
        id: 52,
        title: "Firebase Analytics: iOS",
        provider: "Google",
        category: "Mobile Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/firebase-analytics-ios--ud1091" }],
        description: "Learn to implement Firebase Analytics in iOS applications."
    },
    {
        id: 53,
        title: "Full Stack Foundation",
        provider: "Udacity/AWS",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/full-stack-foundation--ud088" }],
        description: "A foundation course on full-stack web development."
    },
    {
        id: 54,
        title: "Generative AI for Teachers and Educators",
        provider: "MIT & Google",
        category: "Artificial Intelligence",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/generative-ai-for-educators" }],
        description: "A course specifically designed to help educators understand and use generative AI in education."
    },
    {
        id: 55,
        title: "Google Cloud Platform Fundamentals: Core Infrastructure",
        provider: "Google",
        category: "Cloud Computing",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/gcp-fundamentals" }],
        description: "An introduction to core Google Cloud Platform services, features, and concepts."
    },
    {
        id: 56,
        title: "Grand Central Dispatch (GCD)",
        provider: "Udacity",
        category: "Mobile Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/grand-central-dispatch-gcd--ud1022" }],
        description: "Learn about Grand Central Dispatch for concurrent programming in iOS applications."
    },
    {
        id: 57,
        title: "Graphics Architecture",
        provider: "John Owens, UC Davis",
        category: "Computer Graphics",
        format: "Free iTunes Video & Online Video",
        links: [
            { type: "itunes", url: "https://podcasts.apple.com/us/podcast/ecs-275-computer-graphics/id354820116" },
            { type: "video", url: "https://www.youtube.com/playlist?list=PL2SOU6wwxB0v1E92n46TlWYkWK93rJROu" }
        ],
        description: "A course on the architecture of graphics processing units and graphics systems."
    },
    {
        id: 58,
        title: "GT Refresher Advanced OS",
        provider: "Georgia Tech",
        category: "Operating Systems",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/gt-refresher-advanced-os--ud098" }],
        description: "An advanced refresher course on operating systems concepts."
    },
    {
        id: 59,
        title: "High Performance Computer Architecture",
        provider: "Georgia Tech",
        category: "Computer Architecture",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/high-performance-computer-architecture--ud1051" }],
        description: "A course on designing and optimizing high-performance computer systems."
    },
    {
        id: 60,
        title: "Higher Computing",
        provider: "Richard Buckland, University of New South Wales",
        category: "Computer Science",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLXFMmlk03Dt5tFftKECcPGWxIjV-FHqfo" }],
        description: "An advanced computer science course covering a range of computing topics."
    },
    {
        id: 61,
        title: "Human-Computer Interaction",
        provider: "Scott Klemmer, Stanford",
        category: "Computer Science",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL3F8E5B62DE40C0E2" }],
        description: "A course on the principles and practices of designing user interfaces."
    },
    {
        id: 62,
        title: "Introduction to Computer Networks",
        provider: "Stanford University",
        category: "Networking",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLvFG2xYBrYAQCyzpdvh3kr07n6ujATNwx" }],
        description: "A course introducing the fundamental concepts of computer networks."
    },
    {
        id: 63,
        title: "Introduction to Cybersecurity",
        provider: "University of Maryland",
        category: "Cybersecurity",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/cybersecurity" }],
        description: "An introductory course on the basics of cybersecurity, including security threats and risk management."
    },
    {
        id: 64,
        title: "Introduction to Data Science",
        provider: "DataCamp",
        category: "Data Science",
        format: "Interactive Coding Environment",
        links: [{ type: "course", url: "https://www.datacamp.com/courses/intro-to-data-science-with-python" }],
        description: "An interactive introduction to data science, covering Python, R, and SQL."
    },
    {
        id: 65,
        title: "Introduction to Machine Learning",
        provider: "Andrew Ng, Stanford",
        category: "Machine Learning",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/learn/machine-learning" }],
        description: "A comprehensive introduction to machine learning, covering supervised and unsupervised learning."
    },
    {
        id: 66,
        title: "Introduction to Operating Systems",
        provider: "University of California, Berkeley",
        category: "Operating Systems",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL-XXv-cvA1gl3g37BYGMMwOT6yG5MO-Qb" }],
        description: "A course introducing the fundamental concepts of operating systems."
    },
    {
        id: 67,
        title: "Introduction to Programming",
        provider: "Harvard University",
        category: "Programming",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLhQjrBD2T381L3iZyDTxRwOB7n4HgZZkl" }],
        description: "An introductory course on programming concepts and techniques."
    },
    {
        id: 68,
        title: "Introduction to Web Development",
        provider: "University of Michigan",
        category: "Web Development",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/web-development" }],
        description: "An introductory course on web development, covering HTML, CSS, and JavaScript."
    },
    {
        id: 69,
        title: "JavaScript and DOM",
        provider: "W3Cx",
        category: "Web Development",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.edx.org/course/javascript-and-dom" }],
        description: "A course on JavaScript and DOM, covering client-side scripting and dynamic web pages."
    },
    {
        id: 70,
        title: "Machine Learning with Python",
        provider: "DataCamp",
        category: "Machine Learning",
        format: "Interactive Coding Environment",
        links: [{ type: "course", url: "https://www.datacamp.com/courses/machine-learning-with-python" }],
        description: "An interactive course on machine learning with Python, covering scikit-learn and TensorFlow."
    },
    {
        id: 71,
        title: "Mobile App Development",
        provider: "University of California, Irvine",
        category: "Mobile Development",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/mobile-app-development" }],
        description: "A course on mobile app development, covering iOS and Android platforms."
    },
    {
        id: 72,
        title: "Natural Language Processing",
        provider: "Stanford University",
        category: "Natural Language Processing",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOhcuXMZkNm7j3fSwnZpJ7P" }],
        description: "A course on natural language processing, covering text processing and machine learning techniques."
    },
    {
        id: 73,
        title: "Network Security",
        provider: "University of Colorado Boulder",
        category: "Cybersecurity",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/network-security" }],
        description: "A course on network security, covering security threats and risk management."
    },
    {
        id: 74,
        title: "Operating System Concepts",
        provider: "University of California, Berkeley",
        category: "Operating Systems",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL-XXv-cvA1gl3g37BYGMMwOT6yG5MO-Qb" }],
        description: "A course on operating system concepts, covering process management and memory management."
    },
    {
        id: 75,
        title: "Parallel Computing",
        provider: "University of California, Berkeley",
        category: "Parallel Computing",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL-XXv-cvA1gl3g37BYGMMwOT6yG5MO-Qb" }],
        description: "A course on parallel computing, covering parallel algorithms and parallel programming models."
    },
    {
        id: 76,
        title: "Programming Languages",
        provider: "University of Washington",
        category: "Programming Languages",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/programming-languages" }],
        description: "A course on programming languages, covering language design and implementation."
    },
    {
        id: 77,
        title: "Python Programming",
        provider: "University of Michigan",
        category: "Python",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/python" }],
        description: "An introductory course on Python programming, covering data structures and file input/output."
    },
    {
        id: 78,
        title: "React: The Basics",
        provider: "Tyler McGinnis",
        category: "Web Development",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL6QREj8te1M6GKmaQQtPfQiF4iHSrik4F" }],
        description: "A course on React, covering the basics of React and its ecosystem."
    },
    {
        id: 79,
        title: "Responsive Web Design",
        provider: "FreeCodeCamp",
        category: "Web Development",
        format: "Interactive Coding Environment",
        links: [{ type: "course", url: "https://www.freecodecamp.org/learn/responsive-web-design" }],
        description: "A course on responsive web design, covering CSS media queries and flexible layouts."
    },
    {
        id: 80,
        title: "Ruby on Rails",
        provider: "University of Texas at Austin",
        category: "Web Development",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/ruby-on-rails" }],
        description: "A course on Ruby on Rails, covering web development with Ruby and the Rails framework."
    },
    {
        id: 81,
        title: "Security in Computing",
        provider: "University of California, Irvine",
        category: "Cybersecurity",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/security-in-computing" }],
        description: "A course on security in computing, covering security threats and risk management."
    },
    {
        id: 82,
        title: "Software Engineering",
        provider: "University of Virginia",
        category: "Software Engineering",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/software-engineering" }],
        description: "A course on software engineering, covering software design and development methodologies."
    },
    {
        id: 83,
        title: "SQL and Data Modeling",
        provider: "DataCamp",
        category: "Databases",
        format: "Interactive Coding Environment",
        links: [{ type: "course", url: "https://www.datacamp.com/courses/sql-and-data-modeling" }],
        description: "An interactive course on SQL and data modeling, covering database design and querying."
    },
    {
        id: 84,
        title: "Statistics with Python",
        provider: "University of Michigan",
        category: "Data Science",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/statistics-with-python" }],
        description: "A course on statistics with Python, covering data analysis and visualization."
    },
    {
        id: 85,
        title: "System Administration",
        provider: "University of Illinois at Urbana-Champaign",
        category: "System Administration",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/system-administration" }],
        description: "A course on system administration, covering system configuration and maintenance."
    },
    {
        id: 86,
        title: "The Internet of Things (IoT)",
        provider: "University of California, Irvine",
        category: "Internet of Things",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/internet-of-things" }],
        description: "A course on the Internet of Things, covering IoT concepts and applications."
    },
    {
        id: 87,
        title: "The Practice of Computing",
        provider: "Georgia Institute of Technology",
        category: "Computer Science",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/the-practice-of-computing" }],
        description: "A course on the practice of computing, covering computer science principles and programming techniques."
    },
    {
        id: 88,
        title: "User Experience (UX) Design",
        provider: "University of Michigan",
        category: "User Experience",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/user-experience-design" }],
        description: "A course on user experience design, covering UX principles and design methodologies."
    },
    {
        id: 89,
        title: "Web Application Security",
        provider: "University of Virginia",
        category: "Cybersecurity",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/web-application-security" }],
        description: "A course on web application security, covering security threats and risk management."
    },
    {
        id: 90,
        title: "Web Development",
        provider: "FreeCodeCamp",
        category: "Web Development",
        format: "Interactive Coding Environment",
        links: [{ type: "course", url: "https://www.freecodecamp.org/learn/web-development" }],
        description: "A course on web development, covering HTML, CSS, and JavaScript."
    },
    {
        id: 91,
        title: "Web Security",
        provider: "University of Maryland",
        category: "Cybersecurity",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/web-security" }],
        description: "A course on web security, covering security threats and risk management."
    },
    {
        id: 92,
        title: "Windows System Administration",
        provider: "University of Illinois at Urbana-Champaign",
        category: "System Administration",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/windows-system-administration" }],
        description: "A course on Windows system administration, covering system configuration and maintenance."
    },
    {
        id: 93,
        title: "Wireless Networking",
        provider: "University of Colorado Boulder",
        category: "Networking",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/wireless-networking" }],
        description: "A course on wireless networking, covering wireless network concepts and technologies."
    },
    {
        id: 94,
        title: "Xamarin Development",
        provider: "Microsoft",
        category: "Mobile Development",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLo9aPblA9nk5jzKgNqU4rAeH9kP8zWQyD" }],
        description: "A course on Xamarin development, covering cross-platform mobile app development with C# and Xamarin."
    },
    {
        id: 95,
        title: "XML and JSON",
        provider: "W3Cx",
        category: "Web Development",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.edx.org/course/xml-and-json" }],
        description: "A course on XML and JSON, covering data representation and exchange formats."
    },
    {
        id: 96,
        title: "iOS Development",
        provider: "Apple",
        category: "Mobile Development",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://developer.apple.com/tutorials/app-dev-training" }],
        description: "A course on iOS development, covering Swift and Xcode."
    },
    {
        id: 97,
        title: "Android Development",
        provider: "Google",
        category: "Mobile Development",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://developer.android.com/training" }],
        description: "A course on Android development, covering Java and Android Studio."
    },
    {
        id: 98,
        title: "Cloud Computing",
        provider: "University of Virginia",
        category: "Cloud Computing",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/cloud-computing" }],
        description: "A course on cloud computing, covering cloud concepts and technologies."
    },
    {
        id: 99,
        title: "DevOps",
        provider: "University of Virginia",
        category: "DevOps",
        format: "MOOC",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/devops" }],
        description: "A course on DevOps, covering continuous integration, deployment, and delivery."
    },
    {
        id: 100,
        title: "Progressive Web Apps",
        provider: "Google",
        category: "Web Development",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLNYkxOF6rcIBz9ACEFR9qZ6EEuJq1mzlY" }],
        description: "A course on progressive web apps, covering service workers and offline capabilities."
    },
    {
        id: 101,
        title: "Introduction to Computational Thinking (2020)",
        provider: "Multiple faculty, MIT",
        category: "Computer Science",
        format: "Video & Course Materials",
        links: [
            { type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computational-thinking-and-data-science-fall-2020/video-lectures/" },
            { type: "materials", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computational-thinking-and-data-science-fall-2020/" }
        ],
        description: "An introduction to computational thinking and problem solving using computational tools and techniques."
    },
    {
        id: 102,
        title: "Harvard's Introduction to Computer Science (2024)",
        provider: "David Malan, Harvard",
        category: "Computer Science",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://www.youtube.com/playlist?list=PLhQjrBD2T381L3iZyDTxRwOB7n4HgZZkl" },
            { type: "info", url: "https://cs50.harvard.edu/" }
        ],
        description: "The latest version of Harvard's CS50, introducing the intellectual enterprises of computer science and programming."
    },
    {
        id: 103,
        title: "Introduction to Computational Thinking and Data Science",
        provider: "Eric Grimson, John Guttag, and Ana Bell, MIT",
        category: "Data Science",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/video-lectures/" }],
        description: "An introduction to using computation to understand real-world phenomena and solve data science problems."
    },
    {
        id: 104,
        title: "Introduction to Computer Science and Programming (Using Python)",
        provider: "John Guttag, MIT",
        category: "Python",
        format: "Free Online Course",
        links: [{ type: "course", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00-introduction-to-computer-science-and-programming-in-python-fall-2016/" }],
        description: "A classic MIT course introducing computer science and programming using Python."
    },
    {
        id: 105,
        title: "Introduction to Computer Science: Programming Methodology",
        provider: "Mehran Sahami, Stanford",
        category: "Programming",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://www.youtube.com/playlist?list=PL9D558D49CA7342A5" },
            { type: "itunes", url: "https://podcasts.apple.com/us/podcast/cs106a-programming-methodology/id384233222" },
            { type: "materials", url: "https://see.stanford.edu/Course/CS106A" }
        ],
        description: "Stanford's introduction to programming methodology, covering problem-solving, abstraction, and programming basics."
    },
    {
        id: 106,
        title: "Introduction to Computer Science: Programming Abstractions",
        provider: "Julie Zelenski, Stanford",
        category: "Programming",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://www.youtube.com/playlist?list=PLnfxOyLzojY_FX6O795TlJ81UVcdTNnAf" },
            { type: "materials", url: "https://see.stanford.edu/Course/CS106B" }
        ],
        description: "Stanford's course on programming abstractions, covering data structures and algorithms."
    },
    {
        id: 107,
        title: "Introduction to Computer Science: Programming Paradigms",
        provider: "Jerry Cain, Stanford",
        category: "Programming Languages",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://www.youtube.com/playlist?list=PL8FaHk7qbOD7g9YrV7P1S4n4s2GHCIfD9" },
            { type: "itunes", url: "https://podcasts.apple.com/us/podcast/cs107-programming-paradigms/id410802718" },
            { type: "materials", url: "https://see.stanford.edu/Course/CS107" }
        ],
        description: "Stanford's course on programming paradigms, covering functional, object-oriented, and concurrent programming."
    },
    {
        id: 108,
        title: "Introduction to Computer Architecture (2013)",
        provider: "Onur Mutlu, Carnegie Mellon",
        category: "Computer Architecture",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://www.youtube.com/playlist?list=PL5PHm2jkkXmeNLA5VCQaDv79Sw0_5dFRI" },
            { type: "info", url: "https://cmu15418.github.io/" }
        ],
        description: "An introduction to computer architecture, covering processor design, memory systems, and more."
    },
    {
        id: 109,
        title: "Introduction to Computer Architecture (2012)",
        provider: "Onur Mutlu, Carnegie Mellon",
        category: "Computer Architecture",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://www.youtube.com/playlist?list=PL5PHm2jkkXmeNLA5VCQaDv79Sw0_5dFRI" },
            { type: "info", url: "https://cmu15418.github.io/" }
        ],
        description: "An earlier version of CMU's computer architecture course with different examples and case studies."
    },
    {
        id: 110,
        title: "Introduction to Computer Graphics",
        provider: "Prem Kalra, IIT",
        category: "Computer Graphics",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://nptel.ac.in/courses/106/101/106101008/" },
            { type: "download", url: "https://nptel.ac.in/courses/106/101/106101008/" }
        ],
        description: "An introduction to computer graphics fundamentals, algorithms, and techniques."
    },
    {
        id: 111,
        title: "Introduction to Cybersecurity",
        provider: "Open University",
        category: "Cybersecurity",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.open.edu/openlearn/ocw/cybersecurity" }],
        description: "An introduction to key cybersecurity concepts and practices from the Open University."
    },
    {
        id: 112,
        title: "Introduction to Cybersecurity Tools & Cyber Attacks",
        provider: "IBM",
        category: "Cybersecurity",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/cybersecurity-tools" }],
        description: "IBM's course on cybersecurity tools and understanding different types of cyber attacks."
    },
    {
        id: 113,
        title: "Introduction to Deep Learning",
        provider: "MIT",
        category: "Deep Learning",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLrAXtmErZgOeiKm4sgNOknGvNjby9ef0k" }],
        description: "MIT's introduction to deep learning concepts, architectures, and applications."
    },
    {
        id: 114,
        title: "Introduction to Electrical Engineering and Computer Science I",
        provider: "Multiple Professors, MIT",
        category: "Computer Science",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-01-introduction-to-electrical-engineering-and-computer-science-i-fall-2016/video-lectures/" },
            { type: "materials", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-01-introduction-to-electrical-engineering-and-computer-science-i-fall-2016/" }
        ],
        description: "MIT's foundational course introducing electrical engineering and computer science."
    },
    {
        id: 115,
        title: "Introduction to Embedded Systems",
        provider: "James Conrad, UNC Charlotte",
        category: "Embedded Systems",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLnO0maFPj8RFcYxjF2Oq7Y3f7i8iZ9U8B" }],
        description: "An introduction to embedded systems design and implementation."
    },
    {
        id: 116,
        title: "Introduction to Graduate Algorithms",
        provider: "Georgia Tech",
        category: "Algorithms",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/introduction-to-graduate-algorithms--ud061" }],
        description: "Georgia Tech's graduate-level algorithms course covering advanced algorithmic techniques."
    },
    {
        id: 117,
        title: "Intro to HTML and CSS",
        provider: "Udacity",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/intro-to-html-and-css--ud001" }],
        description: "An introduction to HTML and CSS for building web pages."
    },
    {
        id: 118,
        title: "Intro to Information Security",
        provider: "Georgia Tech",
        category: "Cybersecurity",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/intro-to-information-security--ud459" }],
        description: "Georgia Tech's introduction to information security principles and practices."
    },
    {
        id: 119,
        title: "Intro to iOS App Development with Swift",
        provider: "Udacity",
        category: "Mobile Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/intro-to-ios-app-development-with-swift--ud1025" }],
        description: "An introduction to iOS app development using the Swift programming language."
    },
    {
        id: 120,
        title: "Intro to JavaScript",
        provider: "Udacity",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/intro-to-javascript--ud803" }],
        description: "An introduction to JavaScript programming for web development."
    },
    {
        id: 121,
        title: "Intro to jQuery",
        provider: "Udacity",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/intro-to-jquery--ud110" }],
        description: "An introduction to jQuery for enhancing web applications."
    },
    {
        id: 122,
        title: "Introduction to Linux",
        provider: "The Linux Foundation",
        category: "Operating Systems",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL0D1X4mF9YfJ7eY5YjQqg9kH3v6P3G9u6" }],
        description: "The Linux Foundation's introduction to Linux operating system basics."
    },
    {
        id: 123,
        title: "Introduction to Machine Learning",
        provider: "Georgia Tech",
        category: "Machine Learning",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL2SOU6wwxB0v1E92n46TlWYkWK93rJROu" }],
        description: "Georgia Tech's introduction to machine learning concepts and algorithms."
    },
    {
        id: 124,
        title: "Introduction to Machine Learning",
        provider: "MIT",
        category: "Machine Learning",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/video-lectures/" }],
        description: "MIT's introduction to machine learning principles and applications."
    },
    {
        id: 125,
        title: "Introduction to Operating Systems",
        provider: "Georgia Tech",
        category: "Operating Systems",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/introduction-to-operating-systems--ud923" }],
        description: "Georgia Tech's introduction to operating system concepts and design."
    },
    {
        id: 126,
        title: "Introduction to Problem Solving & Programming",
        provider: "Deepak Gupta, IIT",
        category: "Programming",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://nptel.ac.in/courses/106/101/106101012/" },
            { type: "download", url: "https://nptel.ac.in/courses/106/101/106101012/" }
        ],
        description: "IIT's course on problem-solving approaches and programming techniques."
    },
    {
        id: 127,
        title: "Intro to Progressive Web Apps",
        provider: "Google",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/intro-to-progressive-web-apps--ud811" }],
        description: "Google's introduction to building progressive web applications."
    },
    {
        id: 128,
        title: "Introduction to Python Programming",
        provider: "Udacity",
        category: "Python",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/introduction-to-python-programming--ud1110" }],
        description: "Udacity's introduction to programming using Python."
    },
    {
        id: 129,
        title: "Intro to Statistics",
        provider: "Sebastian Thrun, Udacity",
        category: "Data Science",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/intro-to-statistics--ud120" }],
        description: "An introduction to statistics for data analysis, taught by Sebastian Thrun."
    },
    {
        id: 130,
        title: "Introduction to TensorFlow for AI, ML, and Deep Learning",
        provider: "Laurence Moroney, Google",
        category: "Deep Learning",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/tensorflow" }],
        description: "Google's introduction to using TensorFlow for AI, machine learning, and deep learning applications."
    },
    {
        id: 131,
        title: "Intro to Theoretical Computer Science",
        provider: "Udacity",
        category: "Theoretical Computer Science",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/intro-to-theoretical-computer-science--ud061" }],
        description: "An introduction to the theoretical foundations of computer science."
    },
    {
        id: 132,
        title: "Introduction to Virtual Reality",
        provider: "Google/Udacity",
        category: "Virtual Reality",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/intro-to-virtual-reality--ud1012" }],
        description: "Google and Udacity's introduction to virtual reality concepts and development."
    },
    {
        id: 133,
        title: "iOS Networking with Swift",
        provider: "Udacity",
        category: "Mobile Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/ios-networking-with-swift--ud1026" }],
        description: "A course on implementing networking functionality in iOS apps using Swift."
    },
    {
        id: 134,
        title: "iOS Persistence and Core Data",
        provider: "Udacity",
        category: "Mobile Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/ios-persistence-and-core-data--ud1027" }],
        description: "A course on data persistence in iOS applications using Core Data."
    },
    {
        id: 135,
        title: "IT Security: Defense against the Digital Dark Arts",
        provider: "Google",
        category: "Cybersecurity",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/it-security" }],
        description: "Google's course on defending against digital security threats."
    },
    {
        id: 136,
        title: "JavaScript Design Patterns",
        provider: "Udacity",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/javascript-design-patterns--ud989" }],
        description: "A course on implementing design patterns in JavaScript applications."
    },
    {
        id: 137,
        title: "JavaScript Promises",
        provider: "Google",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/javascript-promises--ud1092" }],
        description: "Google's course on using promises for asynchronous programming in JavaScript."
    },
    {
        id: 138,
        title: "Kotlin Bootcamp for Programmers",
        provider: "Udacity",
        category: "Programming",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/kotlin-bootcamp-for-programmers--ud9011" }],
        description: "A bootcamp-style course on the Kotlin programming language."
    },
    {
        id: 139,
        title: "Kotlin for Android Developers",
        provider: "Google",
        category: "Mobile Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/kotlin-for-android-developers--ud1028" }],
        description: "Google's course on using Kotlin for Android app development."
    },
    {
        id: 140,
        title: "Linux Command Line Basics",
        provider: "Udacity",
        category: "Operating Systems",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/linux-command-line-basics--ud595" }],
        description: "A course on getting started with the Linux command line shell."
    },
    {
        id: 141,
        title: "Learn Swift Programming Syntax",
        provider: "Udacity",
        category: "Programming",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/learn-swift-programming-syntax--ud1029" }],
        description: "A course on Swift programming language syntax and features."
    },
    {
        id: 142,
        title: "Learning from Data: A Machine Learning Course",
        provider: "Yaser Abu-Mostafa, Caltech",
        category: "Machine Learning",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://work.caltech.edu/telecourse.html" }],
        description: "Caltech's machine learning course focusing on learning theory and algorithms."
    },
    {
        id: 143,
        title: "Localization Essentials",
        provider: "Google",
        category: "International Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/localization-essentials--ud1101" }],
        description: "Google's course on localizing software for international audiences."
    },
    {
        id: 144,
        title: "Machine Learning for Healthcare",
        provider: "David Sontag, Peter Szolovits, MIT",
        category: "Machine Learning",
        format: "Free Online Video & Materials",
        links: [
            { type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-047-machine-learning-for-healthcare-spring-2019/video-lectures/" },
            { type: "materials", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-047-machine-learning-for-healthcare-spring-2019/" }
        ],
        description: "MIT's course on applying machine learning techniques to healthcare problems."
    },
    {
        id: 145,
        title: "Mathematics for Computer Science",
        provider: "Tom Leighton, MIT",
        category: "Mathematics",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/video-lectures/" }],
        description: "MIT's course on mathematical foundations for computer science."
    },
    {
        id: 146,
        title: "Microsoft Power Platform",
        provider: "Microsoft",
        category: "Business Applications",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/microsoft-power-platform--ud1111" }],
        description: "Microsoft's course on using the Power Platform for business applications."
    },
    {
        id: 147,
        title: "Mobile Software Engineering",
        provider: "David Malan, Harvard",
        category: "Mobile Development",
        format: "Free Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLhQjrBD2T381L3iZyDTxRwOB7n4HgZZkl" }],
        description: "Harvard's course on software engineering principles for mobile applications."
    },
    {
        id: 148,
        title: "Neural Networks for Machine Learning",
        provider: "Geoffrey Hinton, University of Toronto",
        category: "Deep Learning",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.coursera.org/specializations/deep-learning" }],
        description: "Geoffrey Hinton's course on neural networks and deep learning fundamentals."
    },
    {
        id: 149,
        title: "Object-Oriented JavaScript",
        provider: "Udacity",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/object-oriented-javascript--ud711" }],
        description: "A course on object-oriented programming principles in JavaScript."
    },
    {
        id: 150,
        title: "Object Oriented Programming in Java",
        provider: "Udacity",
        category: "Programming",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/object-oriented-programming-in-java--ud804" }],
        description: "Udacity's course on object-oriented programming using Java."
    },
    {
        id: 151,
        title: "Objective‑C for Swift Developers",
        provider: "Udacity",
        category: "Mobile Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/objective-c-for-swift-developers--ud1003" }],
        description: "A course helping Swift developers learn Objective-C for legacy iOS codebases."
    },
    {
        id: 152,
        title: "Offline Web Applications",
        provider: "Google",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/offline-web-applications--ud1093" }],
        description: "Google's course on building web applications that work offline."
    },
    {
        id: 153,
        title: "Performance Engineering of Software Systems",
        provider: "Multiple Professors, MIT",
        category: "Software Engineering",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-172-performance-engineering-of-software-systems-fall-2018/video-lectures/" },
            { type: "info", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-172-performance-engineering-of-software-systems-fall-2018/" }
        ],
        description: "MIT's course on optimizing software system performance."
    },
    {
        id: 154,
        title: "Principles of Digital Communications I",
        provider: "Profs Gallagher and Zheng, MIT",
        category: "Communications",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-450-principles-of-digital-communications-i-fall-2006/video-lectures/" },
            { type: "info", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-450-principles-of-digital-communications-i-fall-2006/" }
        ],
        description: "MIT's course on digital communications fundamentals."
    },
    {
        id: 155,
        title: "Principles of Digital Communications II",
        provider: "MIT",
        category: "Communications",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-451-principles-of-digital-communication-ii-spring-2005/video-lectures/" },
            { type: "info", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-451-principles-of-digital-communication-ii-spring-2005/" }
        ],
        description: "Advanced topics in digital communications systems."
    },
    {
        id: 156,
        title: "Probabilistic Systems Analysis and Applied Probability",
        provider: "John Tsitsiklis, MIT",
        category: "Mathematics",
        format: "Free Online Video",
        links: [
            { type: "video", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/video-lectures/" },
            { type: "info", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/" }
        ],
        description: "MIT's course on probability theory and its applications to computer science."
    },
    {
        id: 157,
        title: "Probability for Computer Scientists",
        provider: "Chris Piech, Stanford",
        category: "Mathematics",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOhcuXMZkNm7j3fSwnZpJ7P" }],
        description: "Stanford's probability course tailored specifically for computer scientists."
    },
    {
        id: 158,
        title: "Programming for Everybody (Getting Started with Python)",
        provider: "University of Michigan",
        category: "Python",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/python" }],
        description: "University of Michigan's beginner-friendly course on Python programming."
    },
    {
        id: 159,
        title: "Programming Languages, Part A",
        provider: "University of Washington",
        category: "Programming Languages",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/programming-languages" }],
        description: "First part of University of Washington's course on programming language concepts."
    },
    {
        id: 160,
        title: "Programming Languages, Part B",
        provider: "University of Washington",
        category: "Programming Languages",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/programming-languages" }],
        description: "Second part of University of Washington's course on programming language concepts."
    },
    {
        id: 161,
        title: "Programming for Designers",
        provider: "UNSW",
        category: "Programming",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLXFMmlk03Dt5tFftKECcPGWxIjV-FHqfo" }],
        description: "A programming course specifically tailored for designers."
    },
    {
        id: 162,
        title: "Python",
        provider: "Nick Parlante, Google",
        category: "Python",
        format: "Free Online Course",
        links: [{ type: "course", url: "https://developers.google.com/edu/python" }],
        description: "Google's Python course taught by Nick Parlante."
    },
    {
        id: 163,
        title: "Python",
        provider: "John Guttag, MIT",
        category: "Python",
        format: "Free Online Course",
        links: [{ type: "course", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00-introduction-to-computer-science-and-programming-in-python-fall-2016/" }],
        description: "MIT's Python programming course taught by John Guttag."
    },
    {
        id: 164,
        title: "Python Data Analysis",
        provider: "Rice University",
        category: "Data Science",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/python-data-analysis" }],
        description: "Rice University's course on data analysis using Python."
    },
    {
        id: 165,
        title: "Python Data Representations",
        provider: "Rice University",
        category: "Data Science",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/python-data-representations" }],
        description: "Rice University's course on data representations in Python."
    },
    {
        id: 166,
        title: "Python Data Visualization",
        provider: "Rice University",
        category: "Data Science",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/python-data-visualization" }],
        description: "Rice University's course on visualizing data using Python libraries."
    },
    {
        id: 167,
        title: "Python Programming Essentials",
        provider: "Rice University",
        category: "Python",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/python-essentials" }],
        description: "Rice University's course on essential Python programming concepts."
    },
    {
        id: 168,
        title: "Quantum Computing for the Determined",
        provider: "Michael Nielsen, The University of Queensland",
        category: "Quantum Computing",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL2qzus4O8MlhjHL2J-p2f2yQq4KwOtJ6L" }],
        description: "An introduction to quantum computing concepts for determined learners."
    },
    {
        id: 169,
        title: "Ray Tracing for Global Illumination",
        provider: "Nelson Max, UC Davis",
        category: "Computer Graphics",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL2SOU6wwxB0v1E92n46TlWYkWK93rJROu" }],
        description: "UC Davis course on ray tracing techniques for realistic lighting in computer graphics."
    },
    {
        id: 170,
        title: "Responsive Images",
        provider: "Google",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/responsive-images--ud1094" }],
        description: "Google's course on implementing responsive images in web development."
    },
    {
        id: 171,
        title: "Responsive Web Design Fundamentals",
        provider: "Google",
        category: "Web Development",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893" }],
        description: "Google's course on the fundamentals of responsive web design."
    },
    {
        id: 172,
        title: "Scalable Microservices with Kubernetes",
        provider: "Google",
        category: "Cloud Computing",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud1060" }],
        description: "Google's course on building scalable microservices using Kubernetes."
    },
    {
        id: 173,
        title: "Search Engines: Technology, Society and Business",
        provider: "Marti Hearst, UC Berkeley",
        category: "Information Retrieval",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL3E8B648C0018BB41" }],
        description: "UC Berkeley's course on search engine technology and its broader impacts."
    },
    {
        id: 174,
        title: "Sequence Models",
        provider: "Andrew Ng, Stanford",
        category: "Deep Learning",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/deep-learning" }],
        description: "Andrew Ng's course on sequence models for natural language processing and time series analysis."
    },
    {
        id: 175,
        title: "Software Analysis & Testing",
        provider: "Georgia Tech",
        category: "Software Engineering",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/software-analysis-and-testing--ud120" }],
        description: "Georgia Tech's course on software analysis and testing methodologies."
    },
    {
        id: 176,
        title: "Software Architecture & Design",
        provider: "Georgia Tech",
        category: "Software Engineering",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/software-architecture-and-design--ud1095" }],
        description: "Georgia Tech's course on software architecture principles and design patterns."
    },
    {
        id: 177,
        title: "Software Development Process",
        provider: "Georgia Tech",
        category: "Software Engineering",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/software-development-process--ud1110" }],
        description: "Georgia Tech's course on software development processes and methodologies."
    },
    {
        id: 178,
        title: "Software Engineering: Introduction",
        provider: "University of British Columbia",
        category: "Software Engineering",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.edx.org/course/software-engineering-introduction" }],
        description: "UBC's introduction to software engineering principles and practices."
    },
    {
        id: 179,
        title: "Startups",
        provider: "Peter Thiel, Stanford",
        category: "Entrepreneurship",
        format: "Lecture Notes",
        links: [{ type: "materials", url: "https://blakemasters.com/peter-thiels-cs183-startup" }],
        description: "Peter Thiel's Stanford course on startups and entrepreneurship."
    },
    {
        id: 180,
        title: "Statistics",
        provider: "San Jose State on Udacity",
        category: "Data Science",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/statistics--ud120" }],
        description: "San Jose State University's statistics course hosted on Udacity."
    },
    {
        id: 181,
        title: "Structuring Machine Learning Projects",
        provider: "Andrew Ng, Stanford",
        category: "Machine Learning",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/machine-learning" }],
        description: "Andrew Ng's course on structuring and managing machine learning projects."
    },
    {
        id: 182,
        title: "Swift for Beginners",
        provider: "Udacity",
        category: "Programming",
        format: "Open Online Course",
        links: [{ type: "course", url: "https://www.udacity.com/course/swift-for-beginners--ud1024" }],
        description: "Udacity's beginner course on Swift programming."
    },
    {
        id: 183,
        title: "Technical Support Fundamentals",
        provider: "Google",
        category: "IT Support",
        format: "Massive Open Online Course (MOOC)",
        links: [{ type: "course", url: "https://www.coursera.org/specializations/technical-support" }],
        description: "Google's course on the fundamentals of technical support."
    },
    {
        id: 184,
        title: "Technology-Enabled Blitzscaling",
        provider: "Reid Hoffman, Stanford",
        category: "Entrepreneurship",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rPbfnX7_GZqN9J3ggPnET21" }],
        description: "Reid Hoffman's Stanford course on rapidly scaling technology companies."
    },
    {
        id: 185,
        title: "The Beauty and Joy of Computing",
        provider: "Dan Garcia, UC Berkeley",
        category: "Computer Science",
        format: "Free Online Video",
        links: [{ type: "video", url: "https://www.youtube.com/playlist?list=PL3E8B648C0018BB41" }],
        description: "UC Berkeley's introduction to computing focused on creativity, big ideas, and societal impact."
    }
];
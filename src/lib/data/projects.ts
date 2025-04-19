import ahuHelperImg from '@/assets/ahu_helper.png';
import ahuFleaMarketImg from '@/assets/ahu_fleamarket.png';

export const projectsExperienceData = [
  {
    id: 'U001',
    title: 'Helper for Anhui University Students',
    github: 'https://github.com/StKelen/ahu_helper',
    display_img: ahuHelperImg,
    desc: [
      {
        key: 'Background',
        content: `In university life, we often encounter the following issues:
1. The Student Service Online system is only available on desktop, making it inconvenient to check class schedules during lectures without a computer.
2. Recharging the campus card is troublesome, as the system only supports desktop access. Sometimes students only realize they haven't recharged after arriving at the cafeteria, forcing them to return to their dorm to top up.
3. It's difficult to receive timely updates and announcements from the university.
\nTherefore, there's a need for a campus life app to make daily learning and living more convenient for students.`,
      },
      {
        key: 'Main Features',
        content: `I used MpVue for developing the frontend of the mini program, and Koa along with Cheerio for backend data scraping and processing.
1. When a student logs into the mini program using their student account, the system simulates a request to the Student Service Online system to retrieve school information and the student's class schedule.
2. When a student initiates a campus card top-up through the mini program, the system simulates the user request and submits the recharge application to the campus card system to complete the transaction.`,
      }
    ],
  },
  {
    id: 'U002',
    title: 'Anhui University Online Flea Market',
    github: 'https://github.com/StKelen/ahu_fleamarket',
    display_img: ahuFleaMarketImg,
    desc: [
      {
        key: 'Background',
        content: `University students often need to trade second-hand items on campus, such as selling textbooks or everyday goods they no longer use. Traditional offline flea markets are time-consuming to manage and limited by weather, while campus BBS forums are not mobile-friendly. Since most of these trades happen within the university and rely on face-to-face exchange, broader platforms like TradeMe or Facebook Marketplace are not well-suited. Therefore, there is a need for a dedicated second-hand trading application designed specifically for university students.`,
      },
      {
        key: 'Main Features',
        content: `I used Golang with Gorm for backend development and Flutter for building the mobile app. The key features I implemented include:
1. __Account System:__ Supports user registration, login, and profile management.
2. __Product System:__ Users can upload and edit product listings, including descriptions, prices, and photos. Other users can browse these listings.
3. __Search Functionality:__ Enables users to search for items using keywords, categories, price ranges, and other filters.
4. __Chat System:__ Users can initiate conversations with others, send text and images, discuss product details, and coordinate transactions.
5. __Transaction System:__ Users can initiate trades, schedule meetups, and leave reviews after completing a transaction.`,
      },
    ],
  },
  {
    id: 'A001',
    title: 'Fliggy Multi-end Mini Program Business Development Project',
    desc: [
      {
        key: 'Background',
        content: `Fliggy's WeChat mini program involves collaboration across multiple departments. The complexity of mini program development, coupled with a large codebase and extended build times, leads to high maintenance costs. Additionally, rapid responses to emergencies and timely page switch requests are necessary.`,
      },
    ],
  },
  {
    id: 'A002',
    title: 'Fliggy Multi-end Framework Development',
    desc: [
      {
        key: 'Background',
        content: `Fliggy has mini programs on WeChat, Alipay, and Taobao, but different ends have similar foundational systems, such as routing and shell systems, with different implementations and capabilities. The multi-end framework aims to unify public capabilities across ends, forming a complete overall framework.`,
      },
      {
        key: 'Main Outputs',
        content: `1. Reduced build time by 50% via employing SWC to realize the dependency tree module and enhancing custom build capabilities by developing the ability of configuring sub-packages.
2. Optimized the mini program's bundle size with different techniques and published an article: ["The Bundle Size Optimization of Fliggy Mini Program inner Alipay"](https://open.alipay.com/portal/forum/post/68101023)
- Used Babel compiler to process environmental variable judgment logic – reduced over 1MB,
- Extracted common dependencies and components – reduced over 2MB.
3. Authored three technical articles on the underlying principles of multi-platform mini programs and conducted multiple internal sharing sessions.
4. Investigated Rax's multiple-platform compilation implementation. Actively participated in the Rax open source community by submitting two merge requests, contributing to collaborative development through [a bug fix in the compilation implementation](https://github.com/raxjs/miniapp/pull/228) and [the addition of component support](https://github.com/raxjs/miniapp/pull/248).`,
      }
    ],
  },
  {
    id: 'B001',
    title: 'Douyin (also known as TikTok) Group Buying Ability Development',
    desc: [],
  },
  {
    id: 'B002',
    title: 'Development of Douyin Life Services Confirmation Payment Page',
    desc: [],
  },
  {
    id: 'B003',
    title: 'Douyin Life Services B-end Internal Large Language Model Application',
    desc: [],
  },
  {
    id: 'B004',
    title: 'Douyin Life Services B-end Internal Tools Platform',
    desc: [],
  },
];

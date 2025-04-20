import ahuHelperImg from '@/assets/ahu_helper.png';
import ahuFleaMarketImg from '@/assets/ahu_fleamarket.png';

import fliggyMiniapp from '@/assets/fliggy_miniapp.png';
import fliggyMemories from '@/assets/fliggy_memories.png';

import byteGroup from '@/assets/byte_group.png';
import byteConfirmOrder from '@/assets/byte_confirm_order.png';
import byteLLM from '@/assets/byte_llm.png';

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
      },
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
    display_img: fliggyMiniapp,
    desc: [
      {
        key: 'Background',
        content: `Fliggy's WeChat mini program involves collaboration across multiple departments. The complexity of mini program development, coupled with a large codebase and extended build times, leads to high maintenance costs. Additionally, rapid responses to emergencies and timely page switch requests are necessary.`,
      },
      {
        key: 'Main Outputs',
        content: `1. Reduced build time by 50% via employing SWC to realize the dependency tree module and enhancing custom build capabilities by developing the ability of configuring sub-packages.
2. Optimized the mini program's bundle size with different techniques and published an article: ["The Bundle Size Optimization of Fliggy Mini Program inner Alipay"](https://open.alipay.com/portal/forum/post/68101023)
- Used Babel compiler to process environmental variable judgment logic – reduced over 1MB,
- Extracted common dependencies and components – reduced over 2MB.
3. Authored three technical articles on the underlying principles of multi-platform mini programs and conducted multiple internal sharing sessions.
4. Investigated Rax's multiple-platform compilation implementation. Actively participated in the Rax open source community by submitting two merge requests, contributing to collaborative development through [a bug fix in the compilation implementation](https://github.com/raxjs/miniapp/pull/228) and [the addition of component support](https://github.com/raxjs/miniapp/pull/248).`,
      },
    ],
  },
  {
    id: 'A002',
    title: 'My Travel Memories',
    display_img: fliggyMemories,
    desc: [
      {
        key: 'Background',
        content: `"My Travel Memories" is a new interactive app launched by Fliggy, designed to let users record their journeys, upload photos, and play animated travel routes. The app is map-based and features animated route playback, interactive elements, an achievement system, and a photo album.`,
      },
      {
        key: 'Main Outputs',
        content: `The frontend involves complex interactions and a wide range of UI states.
1. I served as the Technical Project Manager, overseeing the project timeline and ensuring on-time delivery of key milestones.
2. I used MobX for state management, effectively handling the app's multi-module states and complex data interactions.
3. I explored various technical solutions for map integration, comparing different options such as Leaflet and the Amap SDK, and ultimately chose Leaflet for development based on its flexibility and suitability for our needs.
4. I also researched implementation approaches for image metadata extraction and animation effects, evaluating multiple solutions to ensure a smooth and engaging user experience.
5. I contributed by summarizing and documenting best practices for map-related development, providing technical solutions that supported future business needs.`,
      },
    ],
  },
  {
    id: 'B001',
    title: 'Douyin (also known as TikTok) Group Buying Ability Development',
    display_img: byteGroup,
    desc: [
      {
        key: 'Background',
        content: `In the business background of Life Services in Douyin, merchants hope to sell more products as well as attract more customers. If several users are willing to purchase products together, a discount can be offered, which is a kind of group promotion. Douyin also aims to attract more users to utilize its products. Group buying means that after a user places an order, they must invite a specified number of people to join in purchasing a product at a better price within a set time frame. Only when the requirements are met can the user and their invited users obtain the product. If the task is not completed, the user will not receive the product, and their payment will be refunded. Users can sign up multiple times.`,
      },
      {
        key: 'Main Outputs',
        content: `I discussed user interaction flows with UI designers, explored technical solutions and data structure designs with data engineers and back-end developers. Managed the project schedule during development, supporting Douyin in introducing this new transaction type under an existing complex transaction model, ultimately ensuring a smooth project launch. After going live, the project led to an increase in both platform user base and merchant transaction volume.`,
      },
    ],
  },
  {
    id: 'B002',
    title: 'Development of Douyin Life Services Confirmation Payment Page',
    display_img: byteConfirmOrder,
    desc: [
      {
        key: 'Background',
        content: `The confirmation payment page for Douyin’s Life Services plays a crucial role in the overall transaction flow. Users can confirm the product information they wish to purchase, select promotional activities, provide contact information, and choose their payment method. After confirming everything is correct, they can submit the order to complete the payment, finalizing the entire payment. The confirmation payment page handles tens of millions of users daily and generates over 200 million in daily revenue, significantly impacting the overall transaction volume.`,
      },
      {
        key: 'Main Outputs',
        content: `1. Optimized the display logic for product information, pricing, and quantity selection based on related requirements, allowing faster user perception of the products they are about to purchase, enhancing user interaction experience.
2. Adapted the confirmation payment page for foldable screens and tablets, ensuring proper display on these devices and improving user experience, thereby increasing the likelihood of user transactions.
3. After users purchase specific hotel promotional packages, relevant interfaces are displayed post-payment to remind them to make reservations promptly, facilitating hotel redemption.`,
      },
    ],
  },
  {
    id: 'B003',
    title: 'Douyin Life Services B-end Internal Large Language Model Application',
    display_img: byteLLM,
    desc: [
      {
        key: 'Background',
        content: `Large language models are a popular research direction with certain advantages in code generation. In Douyin's B-end code development, many scenarios involve similar tasks, such as converting specific visual designs into code, and the design specifications and component libraries remain consistent. Thus, AI can be considered for code generation through relevant fine-tuning training and prompt engineering.`,
      },
      {
        key: 'Main Outputs',
        content: `1. Conducted independent research on large model-related processes and published an article internally that ranked second in popularity, with 2.5K views and 105 likes and saves. Shared this within the department, receiving widespread acclaim.\ 
2. Fine-tuned the DeepSeek Coder model and researched code generation scenarios, resulting in one VsCode plugin. Investigated Figma visual design to code generation solutions based on Langchain's Agent capabilities.`,
      },
    ],
  },
];

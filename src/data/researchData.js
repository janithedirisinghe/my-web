/**
 * Research articles.
 *
 * To add a new article, append an object to this array. Nothing else needs to change —
 * the listing page and the article page are both driven by this file.
 *
 * Fields:
 *   slug        URL segment. The article lives at /research/<slug>. Keep it lowercase-with-dashes.
 *   title       Full paper / project title.
 *   type        Badge text, e.g. 'Published Research' or 'Undergraduate Research'.
 *   venue       Conference, institution or programme it belongs to.
 *   date        Human-readable date, e.g. 'September 2024'.
 *   coverImage  Optional. URL of a banner image. Omit or leave '' for a text-only article.
 *   excerpt     1–2 sentences shown on the listing card.
 *   tags        Short keyword chips ("Key areas").
 *   paperUrl    Optional link to the published paper. Omit or leave '' to hide the button.
 *   content     The article body — an array of blocks, rendered in order. Block types:
 *                 { type: 'heading',   text: '...' }
 *                 { type: 'paragraph', text: '...' }
 *                 { type: 'list',      items: ['...', '...'] }
 *                 { type: 'quote',     text: '...' }
 *                 { type: 'image',     src: '...', caption: '...' }   // caption optional
 *
 * Inside any paragraph, list item or quote, wrap text in **double asterisks** to bold it.
 */

const researchArticles = [
  {
    slug: 'tank-cascade-digital-management',
    title: 'Integrated Digital Management of Interconnected Tank Cascade Systems in Sri Lanka',
    type: 'Undergraduate Research',
    venue: 'University of Moratuwa · BSc (Hons) Information Technology',
    date: '2025 – 2026',
    coverImage: '',
    excerpt:
      'A four-module pipeline combining satellite data, graph neural networks, deep learning and multi-objective optimization into a decision-support system for the 32 interconnected tanks of the Mahakanumulla cascade.',
    tags: [
      'Artificial Intelligence',
      'Graph Neural Networks',
      'Deep Learning',
      'Operations Research',
      'Multi-Objective Optimization',
      'Model Predictive Control',
      'Time-Series Forecasting',
      'Remote Sensing',
      'Decision Support Systems',
      'Water Resource Management'
    ],
    paperUrl: '',
    content: [
      {
        type: 'paragraph',
        text: "Sri Lanka's dry zone relies on thousands of interconnected ancient village tanks, where the overflow from one tank becomes an important water source for downstream tanks. However, managing these systems traditionally depends heavily on manual observations and experience-based decisions. This research explored how satellite data, graph neural networks, deep learning, and multi-objective optimization could be combined into a single digital decision-support pipeline for managing interconnected tank cascades."
      },
      {
        type: 'paragraph',
        text: 'The study focused on the **32 interconnected tanks of the Mahakanumulla cascade in the Anuradhapura District** and developed a four-module pipeline that connects environmental observation with predictive modelling and automated water-release recommendations. A key objective was to enable data-driven daily management decisions without requiring extensive ground-based monitoring infrastructure.'
      },
      {
        type: 'paragraph',
        text: 'The first module focused on **satellite-based storage estimation**. Sentinel-2 multispectral imagery and Google Earth Engine were used to identify water surfaces through the Normalized Difference Water Index (NDWI). The extracted surface areas were then combined with bathymetric models to estimate tank storage volumes. This provided a five-year storage record covering all 32 tanks, ranging from smaller tanks such as Kudaittikattiya Wewa to the much larger Nachchaduwa Wewa.'
      },
      {
        type: 'paragraph',
        text: 'The second module modelled the cascade as a **directed graph** and applied a Graph Attention Network (GAT) to understand relationships between interconnected tanks. A self-supervised link-prediction approach was used to learn a water-transfer coefficient matrix representing how releases from one tank influence downstream storage. This graph-based approach allowed the system to capture relationships within the cascade beyond simple direct physical connections.'
      },
      {
        type: 'paragraph',
        text: 'The third module introduced **rainfall-driven storage and risk prediction**. Several deep-learning architectures, including LSTM, Temporal Convolutional Networks, and Transformers, were evaluated for forecasting future storage conditions. A Temporal Fusion Transformer (TFT) was selected based on its forecasting performance, achieving an RMSE of **1.636** with a relatively compact model containing **25,671 parameters**. The resulting model was used to forecast storage conditions over a seven-day horizon and classify potential water-management risks, with prediction accuracy remaining approximately **91–96% at the seventh day**.'
      },
      {
        type: 'paragraph',
        text: 'The final module converted these predictions into daily management decisions through **Multi-Objective Model Predictive Control (MO-MPC)**. A seven-day receding horizon was optimized using the NSGA-II evolutionary algorithm across a **217-dimensional decision space**, representing release decisions for 31 controllable tanks over seven days. The optimization simultaneously considered irrigation shortage, overflow reduction, fairness between tanks, and conveyance losses. TOPSIS with risk-adaptive weights was then used to select a practical compromise solution from the resulting Pareto-optimal solutions while respecting storage, release, safety, conservation, and non-negativity constraints.'
      },
      {
        type: 'paragraph',
        text: 'The system was evaluated across two independent Yala-season scenarios, covering **184 days in 2025 and 137 days in 2026**. The proposed controller maintained **100% constraint feasibility**, while the proportional-allocation baseline violated the seasonal safety-floor constraint throughout the evaluated period. The optimization also reduced simulated overflow from approximately **2.06 million m³ to 1.58 million m³** and achieved **76.6% directional agreement** with observed release patterns. Importantly, the system maintained exact mass-balance conservation throughout the simulations.'
      },
      {
        type: 'paragraph',
        text: 'An important finding was the trade-off between short-term irrigation delivery and long-term water security. The baseline achieved higher raw demand satisfaction, while the proposed controller prioritized maintaining the required safety constraints and reducing excessive releases. This illustrates how multi-objective optimization can provide more structured decision-making when water managers must balance competing operational objectives rather than optimize a single metric.'
      },
      {
        type: 'paragraph',
        text: 'The overall research connects the complete pipeline from **satellite observation → storage estimation → graph-based cascade modelling → deep-learning forecasting → multi-objective optimization → daily release recommendations**. The system was implemented using **Python, PyTorch, PyTorch Geometric, pymoo, Google Earth Engine, NumPy, Pandas, Streamlit, Open-Meteo, Sentinel-2 data, and a stochastic rainfall model**.'
      },
      {
        type: 'paragraph',
        text: 'The project demonstrates how AI, graph learning, time-series forecasting, and operations research can be integrated to address complex real-world resource-management problems. More broadly, the architecture provides a foundation for applying data-driven decision support to other interconnected infrastructure and resource-allocation systems where multiple objectives, uncertainty, and physical constraints must be considered simultaneously.'
      }
    ]
  },
  {
    slug: 'wedding-industry-digital-marketplace',
    title: 'Optimization of Service Procurement in the Wedding Industry',
    type: 'Published Research',
    venue:
      'International Conference on Multidisciplinary Approaches 2026 · University of Sri Jayewardenepura',
    date: 'April 2026',
    coverImage: '',
    excerpt:
      'How a centralized digital marketplace with AI-assisted recommendations can simplify the fragmented process of discovering, comparing and procuring wedding services.',
    tags: [
      'Digital Platform Ecosystems',
      'AI-Assisted Recommendations',
      'Service-Oriented Architecture',
      'Marketplace Optimization',
      'Digital Procurement'
    ],
    paperUrl: '',
    content: [
      {
        type: 'paragraph',
        text: 'Wedding planning often involves finding and comparing multiple service providers, including venues, photographers, decorators, caterers, and other vendors. However, the process is highly fragmented, requiring customers to search across different platforms, manually compare providers, communicate through separate channels, and make decisions with limited personalized guidance. At the same time, vendors can face difficulties reaching relevant customers and maintaining digital visibility.'
      },
      {
        type: 'paragraph',
        text: 'This research explored how a **centralized digital marketplace** could simplify this fragmented procurement process. The proposed platform brings vendor discovery, service comparison, communication, and procurement into a single digital environment. Customers can search for services, apply filters based on their requirements, explore vendor profiles, communicate with providers, and make more informed decisions without relying on multiple disconnected platforms.'
      },
      {
        type: 'paragraph',
        text: 'A key component of the system is an **AI-assisted recommendation mechanism** designed to provide personalized vendor suggestions. The recommendation layer considers factors such as user preferences, vendor attributes, service categories, and interaction patterns to identify vendors that are more relevant to each customer. This approach aims to reduce the amount of manual searching required while helping users discover service providers that better match their requirements.'
      },
      {
        type: 'paragraph',
        text: 'The research followed a **Design Science Research (DSR)** methodology, focusing on both the development of the digital artifact and its evaluation. The proposed platform architecture was implemented as a web-based system and evaluated through functional testing and simulated user interaction scenarios. This allowed the study to examine how the proposed solution could address practical challenges in service discovery and procurement.'
      },
      {
        type: 'paragraph',
        text: 'The research demonstrated how centralized digital marketplaces can reduce search complexity, improve vendor accessibility, support personalized decision-making, and streamline communication between customers and service providers. Although the study focused on the wedding industry, the underlying approach can be applied to other fragmented service markets where customers need to discover, compare, communicate with, and procure services from multiple providers.'
      }
    ]
  },
  {
    slug: 'iot-underground-fuel-tank-monitoring',
    title: 'Real-Time Monitoring of Gas Station Underground Fuel Tanks Using IoT',
    type: 'Published Research',
    venue: 'KDU International Research Conference 2024',
    date: 'September 2024',
    coverImage: '',
    excerpt:
      'An IoT system combining ESP32, ultrasonic, pressure and temperature sensors with Firebase and local SD-card fallback for continuous, fault-tolerant fuel-tank monitoring.',
    tags: [
      'Internet of Things',
      'Embedded Systems',
      'ESP32',
      'Firebase',
      'Sensor Integration',
      'Cloud Computing',
      'Real-Time Monitoring',
      'Fault-Tolerant Data Storage'
    ],
    paperUrl: '',
    content: [
      {
        type: 'paragraph',
        text: 'Managing underground fuel tanks at gas stations presents several operational challenges, particularly when monitoring fuel levels and other tank conditions through manual or basic automated methods. The lack of continuous monitoring can make it difficult to obtain timely information, maintain accurate inventory records, and respond quickly to potentially abnormal conditions. This research explored how **Internet of Things (IoT) technology** could be used to create a more reliable and real-time approach to underground fuel-tank monitoring.'
      },
      {
        type: 'paragraph',
        text: 'The proposed system combines multiple sensors with an **ESP32 DevKit V1 microcontroller** to continuously collect important tank parameters. An **HRXL MaxSonar WRIST ultrasonic sensor** is used for fuel-level measurement, while a **BMP280** monitors pressure and a **DS18B20** measures temperature. The ESP32 processes the sensor readings and uses Wi-Fi to transmit the collected data to a **Firebase cloud database**, enabling centralized access to real-time monitoring information through a web-based interface.'
      },
      {
        type: 'paragraph',
        text: 'A major design consideration was the reliability of data collection when network connectivity is unavailable. Rather than relying entirely on cloud connectivity, the system uses a **dual-storage architecture**. Sensor data can be transmitted to Firebase when a network connection is available, while an SD card provides local storage as a fallback mechanism during connectivity interruptions. This approach helps maintain continuous data collection and reduces the risk of losing measurements due to temporary network failures.'
      },
      {
        type: 'paragraph',
        text: 'The system was developed with practical industry requirements in mind. Insights were gathered through interviews with professionals and management in the fuel-station industry to better understand operational requirements and monitoring challenges. Based on these findings, custom firmware, the sensor integration layer, cloud-based data management, and a web-based monitoring interface were developed and tested in simulated operational environments.'
      },
      {
        type: 'paragraph',
        text: 'The research demonstrates how IoT, embedded systems, cloud computing, and web technologies can be combined to modernize fuel-station operations. Continuous monitoring of fuel levels, pressure, and temperature can support more effective inventory management, improve operational visibility, and contribute to enhanced safety and environmental risk management. The combination of **real-time cloud monitoring and local backup storage** also provides a more resilient architecture for environments where network connectivity cannot always be guaranteed.'
      }
    ]
  }
];

export const getArticleBySlug = (slug) =>
  researchArticles.find((article) => article.slug === slug);

export default researchArticles;

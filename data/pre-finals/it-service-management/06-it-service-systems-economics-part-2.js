// Pre-Finals · IT Service Management · 06 Handout 1 – IT Service Systems Economics Part II
// Format: { question, choices: [4 options], answer: index of correct choice (0-3), explanation }
registerBank("itsm-06", [
  {
    question: "Roles in ITSM were established with the sub-units of the ITSM processes. Which of these is given as an example of such a team?",
    choices: ["Demand Management", "Human Resources", "Accounting", "Marketing"],
    answer: 0,
    explanation: "Examples given are the teams in Demand Management, Request Fulfillment, and Service Review."
  },
  {
    question: "Who is considered somewhat the 'boss' acting in an executive role and often leads a service team?",
    choices: ["Service Sponsor", "Service Manager", "External Supplier", "IT Service Consumer"],
    answer: 1,
    explanation: "Service Managers act in an executive role and often lead a service team."
  },
  {
    question: "Service Managers shoulder the definition of specific services and how they are delivered in line with:",
    choices: ["Business expectations", "Government regulations", "Supplier contracts", "ITIL inspections"],
    answer: 0,
    explanation: "They define services and how they are delivered in line with business expectations."
  },
  {
    question: "Why can it be useful to employ Service Managers from outside the IT department?",
    choices: [
      "They are cheaper to hire",
      "ITSM aims to align IT with overall business interests, so understanding business beyond IT matters",
      "They do not need technical knowledge",
      "ITIL requires it"
    ],
    answer: 1,
    explanation: "ITSM aligns IT with business interests, so outsiders with technical literacy can bring business understanding."
  },
  {
    question: "According to the handout, ITIL is used to:",
    choices: [
      "Prepare an organization for an ITIL inspection",
      "Provide guidance",
      "Replace the Service Manager",
      "Set employee salaries"
    ],
    answer: 1,
    explanation: "ITIL is used to provide guidance, not to prepare an organization for an ITIL inspection."
  },
  {
    question: "How many basic questions about the customer's expectations does a Service Manager answer?",
    choices: ["Two (2)", "Three (3)", "Four (4)", "Five (5)"],
    answer: 1,
    explanation: "Three questions: What is the expected service and how is it delivered? How is it used? How much does it cost?"
  },
  {
    question: "Which is one of the basic questions about the customer's expectations?",
    choices: [
      "How is the service supported?",
      "How much does the service cost?",
      "Who is the Service Sponsor?",
      "What is the IT department's budget?"
    ],
    answer: 1,
    explanation: "'How much does the service cost?' is one of the three customer-expectation questions."
  },
  {
    question: "The two basic questions about the IT department's capability are:",
    choices: [
      "How is the service supported? and How is the service delivered?",
      "How is the service used? and How much does it cost?",
      "Who uses the service? and Who pays for it?",
      "When is the service needed? and Where is it delivered?"
    ],
    answer: 0,
    explanation: "IT capability questions: How is the service supported? How is the service delivered?"
  },
  {
    question: "A service is considered SUPPORTED when:",
    choices: [
      "The IT department produces a report for the customer",
      "The IT department's resources are deployed to meet the customer's demands",
      "The customer pays for the service",
      "The Service Sponsor approves the budget"
    ],
    answer: 1,
    explanation: "Supported = IT resources are deployed to meet customer demands."
  },
  {
    question: "In the Finisar case study, the IT department was tasked with providing enough server space for the customer support team. This illustrates a service being:",
    choices: ["Delivered", "Supported", "Outsourced", "Retired"],
    answer: 1,
    explanation: "Deploying IT resources (server space) to meet demand is an example of a supported service."
  },
  {
    question: "A service is considered DELIVERED when:",
    choices: [
      "The IT department produces a product or report that fulfills the needs of a customer",
      "The IT department's resources are deployed",
      "The service is approved by ITIL",
      "The customer signs a contract"
    ],
    answer: 0,
    explanation: "Delivered = IT produces a product or report that fulfills the customer's needs."
  },
  {
    question: "An essential financial report derived from several databases and built into Oracle is an example of a product for:",
    choices: ["External customers", "Internal customers", "Prospects", "External suppliers"],
    answer: 1,
    explanation: "The financial report built into Oracle is the handout's example of a product for internal customers."
  },
  {
    question: "A customizable web page design palette that anyone can use is an example of a product for:",
    choices: ["Internal customers", "External customers", "The Service Team", "The Service Sponsor"],
    answer: 1,
    explanation: "The web page design palette is the example of a product for external customers."
  },
  {
    question: "Under the Service Transition process, which area implements new IT services while lessening disruption to existing services?",
    choices: ["Incident Management", "Change Management", "Demand Management", "Knowledge Management"],
    answer: 1,
    explanation: "Change Management (Service Transition) implements new services with minimal disruption."
  },
  {
    question: "What do Service Managers ensure is ready in case a change implementation begins to compromise existing services?",
    choices: ["A blackout plan", "A marketing plan", "A salary plan", "A recruitment plan"],
    answer: 0,
    explanation: "Service Managers ensure a blackout plan is ready under Change Management."
  },
  {
    question: "Incident Management falls under which ITSM process?",
    choices: ["Service Strategy", "Service Design", "Service Transition", "Service Operation"],
    answer: 3,
    explanation: "Incident Management is under the Service Operation process."
  },
  {
    question: "In Incident Management, what must Service Managers do when an interruption happens?",
    choices: [
      "Wait for the Service Sponsor's approval before acting",
      "Restore the service ASAP, isolate the cause, and act to avoid recurrence",
      "Rotate the Service Manager position",
      "Increase the service budget"
    ],
    answer: 1,
    explanation: "Restore the service as soon as possible, isolate the cause, and prevent recurrence."
  },
  {
    question: "Which role is described as 'a kind of board director' that oversees advice and execution during a service change?",
    choices: ["Service Manager", "Service Team", "External Supplier", "Prospect"],
    answer: 1,
    explanation: "The Service Team acts like a board director overseeing advice and execution during a service change."
  },
  {
    question: "What is the primary responsibility of the Service Team?",
    choices: [
      "Setting employee salaries",
      "Keeping the Service Manager well-informed of relevant data and information",
      "Supplying infrastructure under contracts",
      "Using IT services as consumers"
    ],
    answer: 1,
    explanation: "Their primary responsibility is keeping the Service Manager well-informed, including tracking metrics."
  },
  {
    question: "Service Teams are a collection of which people?",
    choices: [
      "Tech experts, product experts, support personnel, and executive leadership",
      "Only IT technicians",
      "Customers and prospects",
      "External suppliers and vendors"
    ],
    answer: 0,
    explanation: "Service Teams include tech experts, product experts, support personnel, and executive leadership."
  },
  {
    question: "Who is responsible for setting the budget for services, qualifying associated risks, and setting acceptable service levels?",
    choices: ["Service Manager", "Service Sponsor", "IT Service Consumer", "Knowledge Manager"],
    answer: 1,
    explanation: "The Service Sponsor (part of executive leadership) handles budget, risks, and acceptable service levels."
  },
  {
    question: "The Service Sponsor is usually occupied by a party that is:",
    choices: [
      "From an external supplier",
      "Directly acquainted with the business side of the company",
      "A newly hired IT technician",
      "A future IT service consumer"
    ],
    answer: 1,
    explanation: "The Service Sponsor is usually someone directly acquainted with the business side."
  },
  {
    question: "What is suggested to keep new ideas flowing between the Service Manager and Service Team?",
    choices: [
      "Hiring more external suppliers",
      "Rotating the Service Manager position",
      "Reducing meetings",
      "Outsourcing the Service Team"
    ],
    answer: 1,
    explanation: "Regular meetings are a must, and rotating the Service Manager position keeps new ideas flowing."
  },
  {
    question: "Which external role refers to all persons or organizational units who use the IT services?",
    choices: ["Prospects", "IT Service Consumers", "External Suppliers", "Service Sponsors"],
    answer: 1,
    explanation: "IT Service Consumers are all persons or organizational units who use the IT services."
  },
  {
    question: "Future IT Service Consumers with a defined demand for IT services are called:",
    choices: ["Prospects", "Sponsors", "Suppliers", "Stakeholders"],
    answer: 0,
    explanation: "Prospects are future IT Service Consumers with a defined demand."
  },
  {
    question: "Which external role provides infrastructure, operating supplies, and outsourcing services under established contracts?",
    choices: ["IT Service Consumers", "Prospects", "External Suppliers", "Service Team"],
    answer: 2,
    explanation: "External Suppliers provide infrastructure, operating supplies, and outsourcing services under contracts."
  },
  {
    question: "Based on the Jobstreet 2023 table, which ITSM responsibility has the HIGHEST average monthly salary?",
    choices: ["Problem Management", "Change Management", "Incident Management", "Risk Management"],
    answer: 1,
    explanation: "Change Management is highest at P92,000. Problem and Risk Management are P90,000; Incident is P88,000."
  },
  {
    question: "Which two ITSM responsibilities have the LOWEST average monthly salary at P25,000?",
    choices: [
      "Demand Management and Request Fulfillment",
      "Knowledge Management and Request Fulfillment",
      "Service & Validation Testing and Demand Management",
      "Access Management and Supplier Management"
    ],
    answer: 0,
    explanation: "Demand Management and Request Fulfillment are both P25,000."
  },
  {
    question: "What is the average monthly salary for Incident Management based on the table?",
    choices: ["P64,000", "P82,000", "P88,000", "P92,000"],
    answer: 2,
    explanation: "Incident Management: P88,000."
  },
  {
    question: "What is the average monthly salary for Service Level Management?",
    choices: ["P48,000", "P56,000", "P62,000", "P70,000"],
    answer: 1,
    explanation: "Service Level Management: P56,000."
  },
  {
    question: "Culture in an organization encompasses:",
    choices: [
      "Only the written company policies",
      "The practices, attitudes, behaviors, beliefs, and values shared between its members",
      "The organization's revenue and profit",
      "The physical layout of the office"
    ],
    answer: 1,
    explanation: "Culture is the practices, attitudes, behaviors, beliefs, and values shared between members."
  },
  {
    question: "Which term refers to the positive consideration of the importance of understanding good service and the appreciation for giving good service to internal and external customers?",
    choices: ["Service culture", "Service strategy", "Service portfolio", "Service level"],
    answer: 0,
    explanation: "That is the handout's definition of service culture."
  },
  {
    question: "How many influences of service culture are discussed in the handout?",
    choices: ["Three (3)", "Four (4)", "Five (5)", "Six (6)"],
    answer: 1,
    explanation: "Four: how an organization is seen, operation's effectiveness, how employees feel, and how operation learns and adapts."
  },
  {
    question: "Shopee leading Campaign's Southeast Asia Top 50 brands in 2023 with an 81% customer experience score illustrates which influence of service culture?",
    choices: [
      "Influence on how an organization is seen",
      "Influence on operation's effectiveness",
      "Influence on how employees feel about their jobs",
      "Influence on how operation learns and adapts"
    ],
    answer: 0,
    explanation: "Shopee's brand built on customer experience is the example for how an organization is seen."
  },
  {
    question: "What customer experience score did Shopee get in Campaign's 2023 list?",
    choices: ["71%", "81%", "90%", "95%"],
    answer: 1,
    explanation: "Shopee led with an 81% customer experience score."
  },
  {
    question: "Problems arise when an operation's culture does not align with its vision and strategy. Which influence of service culture is this?",
    choices: [
      "Influence on how an organization is seen",
      "Influence on operation's effectiveness",
      "Influence on how employees feel about their jobs",
      "Influence on how operation learns and adapts"
    ],
    answer: 1,
    explanation: "Influence on operation's effectiveness: core values affect how well an operation creates its services."
  },
  {
    question: "The April 2023 exposé by Senator Risa Hontiveros about scam hubs is used as an example of which influence?",
    choices: [
      "How an organization is seen",
      "Operation's effectiveness",
      "How employees feel about their jobs",
      "How operation learns and adapts"
    ],
    answer: 1,
    explanation: "It's an example of culture misaligned with stated values, under operation's effectiveness."
  },
  {
    question: "A strong service culture can turn employees into ______ of the organization; otherwise, they become critics.",
    choices: ["Customers", "Advocates", "Competitors", "Suppliers"],
    answer: 1,
    explanation: "Service culture can turn employees into advocates rather than critics."
  },
  {
    question: "Lazada Philippines earning a Great Place to Work Certification illustrates which influence of service culture?",
    choices: [
      "How an organization is seen",
      "Operation's effectiveness",
      "How employees feel about their jobs",
      "How operation learns and adapts"
    ],
    answer: 2,
    explanation: "Lazada is the example for how employees feel about their jobs."
  },
  {
    question: "What percentage of Lazada Philippines employees recommend it as a fantastic workplace?",
    choices: ["More than 70%", "More than 80%", "More than 90%", "100%"],
    answer: 2,
    explanation: "More than 90% recommend it and see themselves staying for the next two years."
  },
  {
    question: "IBM Philippines transitioning to work-from-home in 2021 using cloud and AI while upskilling employees illustrates which influence?",
    choices: [
      "How an organization is seen",
      "Operation's effectiveness",
      "How employees feel about their jobs",
      "How operation learns and adapts"
    ],
    answer: 3,
    explanation: "IBM PH is the example for how an operation learns and adapts."
  },
  {
    question: "Organizations willing to learn and adapt require comparing what is happening inside and outside the organization with:",
    choices: [
      "What competitors are doing",
      "What should be happening",
      "Last year's revenue",
      "Government regulations"
    ],
    answer: 1,
    explanation: "They compare what is happening with what *should* be happening, which needs a clear idea of how service should be delivered."
  }
]);

// The catalog: every term, subject and handout the quiz knows about.
// To add a handout: create its bank file under data/<term>/<subject>/ and add one entry below.
// Optional per subject: `notes` points to a reviewer page, linked from the start screen.
window.CATALOG = [
  {
    id: "pre-finals",
    name: "Pre-Finals",
    subjects: [
      {
        id: "it-service-management",
        name: "IT Service Management",
        notes: "data/pre-finals/it-service-management/reviewer.html",
        handouts: [
          {
            id: "itsm-05",
            title: "05 – IT Service Systems Economics Part I",
            file: "data/pre-finals/it-service-management/05-it-service-systems-economics-part-1.js"
          },
          {
            id: "itsm-06",
            title: "06 – IT Service Systems Economics Part II",
            file: "data/pre-finals/it-service-management/06-it-service-systems-economics-part-2.js"
          }
        ]
      }
    ]
  }
];
